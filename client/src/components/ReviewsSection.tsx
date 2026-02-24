import { Star } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import { getProductReviews, getAverageRating, getRatingDistribution } from "@/lib/reviews";

interface ReviewsSectionProps {
  productId: string;
}

export function ReviewsSection({ productId }: ReviewsSectionProps) {
  const reviews = getProductReviews(productId);
  const averageRating = getAverageRating(productId);
  const ratingDistribution = getRatingDistribution(productId);

  if (reviews.length === 0) {
    return null;
  }

  const totalReviews = reviews.length;
  const percentages: Record<number, number> = {};
  
  Object.entries(ratingDistribution).forEach(([rating, count]) => {
    percentages[parseInt(rating)] = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  });

  return (
    <section className="py-12 border-t border-border">
      <h2
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Avaliações de Clientes
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Resumo de Rating */}
        <div className="bg-secondary/50 rounded-lg p-6">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-primary mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(averageRating)
                      ? "fill-accent text-accent"
                      : "text-border"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {totalReviews} avaliações
            </p>
          </div>

          {/* Distribuição de Ratings */}
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-xs font-semibold w-4">{rating}</span>
                <Star size={14} className="fill-accent text-accent" />
                <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all"
                    style={{ width: `${percentages[rating]}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">
                  {ratingDistribution[rating]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Reviews */}
        <div className="lg:col-span-3 space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
