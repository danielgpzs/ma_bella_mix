import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { nanoid } from "nanoid";
import * as db from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // E-commerce routers
  products: router({
    list: publicProcedure.query(() => db.getAllProducts()),
    getById: publicProcedure.input(z.string()).query(({ input }) => db.getProductById(input)),
    getByCategory: publicProcedure.input(z.string()).query(({ input }) => db.getProductsByCategory(input)),
  }),

  orders: router({
    create: protectedProcedure
      .input(z.object({
        customerName: z.string(),
        customerEmail: z.string().email(),
        customerPhone: z.string().optional(),
        shippingAddress: z.string(),
        shippingCity: z.string(),
        shippingState: z.string(),
        shippingCEP: z.string(),
        items: z.array(z.object({
          productId: z.string(),
          quantity: z.number(),
          price: z.number(),
        })),
        totalPrice: z.number(),
      }))
      .mutation(async ({ ctx, input }) => {
        const orderId = nanoid();
        const order = {
          id: orderId,
          userId: ctx.user.id,
          status: "pending" as const,
          totalPrice: input.totalPrice.toString(),
          customerName: input.customerName,
          customerEmail: input.customerEmail,
          customerPhone: input.customerPhone,
          shippingAddress: input.shippingAddress,
          shippingCity: input.shippingCity,
          shippingState: input.shippingState,
          shippingCEP: input.shippingCEP,
        };
        
        await db.createOrder(order);
        
        const orderItemsData = input.items.map(item => ({
          id: nanoid(),
          orderId,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price.toString(),
        }));
        
        await db.createOrderItems(orderItemsData);
        
        return { orderId, success: true };
      }),
    
    list: protectedProcedure.query(({ ctx }) => db.getOrdersByUserId(ctx.user.id)),
    getById: protectedProcedure.input(z.string()).query(async ({ ctx, input }) => {
      const order = await db.getOrderById(input);
      if (!order || order.userId !== ctx.user.id) {
        throw new Error("Order not found or unauthorized");
      }
      const items = await db.getOrderItemsByOrderId(input);
      return { ...order, items };
    }),
  }),

  reviews: router({
    getByProductId: publicProcedure.input(z.string()).query(({ input }) => db.getReviewsByProductId(input)),
    
    create: protectedProcedure
      .input(z.object({
        productId: z.string(),
        rating: z.number().min(1).max(5),
        title: z.string(),
        text: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const reviewId = nanoid();
        const review = {
          id: reviewId,
          productId: input.productId,
          userId: ctx.user.id,
          customerName: ctx.user.name || "Anonymous",
          customerImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${ctx.user.id}`,
          rating: input.rating,
          title: input.title,
          text: input.text,
          verified: true,
        };
        
        await db.createReview(review);
        return { reviewId, success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
