import { useRoute } from "wouter";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ReviewsSection } from "@/components/ReviewsSection";
import { products } from "@/lib/products";
import { useCartContext } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";

export default function Produto() {
  const [, params] = useRoute("/produto/:id");
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
            <Link href="/produtos">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Voltar aos Produtos
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    toast.success(`${quantity}x ${product.name} adicionado ao carrinho!`);
    setTimeout(() => setIsAdding(false), 300);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <Link href="/produtos">
            <div className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 cursor-pointer">
              <ArrowLeft size={18} />
              Voltar aos Produtos
            </div>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Imagem */}
            <div className="flex items-center justify-center bg-secondary/50 rounded-lg overflow-hidden h-96 lg:h-full min-h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detalhes */}
            <div>
              <h1
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              {/* Preço */}
              <div className="mb-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{discountPercent}%
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">Frete grátis para todo Brasil</p>
              </div>

              <div className="divider-gold my-6"></div>

              {/* Descrição */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Descrição</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>

                <h3 className="font-bold text-lg mb-3">Benefícios</h3>
                <ul className="space-y-2 mb-4">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary text-lg mt-1">✨</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg mb-3">Modo de Uso</h3>
                <p className="text-muted-foreground">{product.usage}</p>
              </div>

              <div className="divider-gold my-6"></div>

              {/* Compra */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Quantidade:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <ShoppingCart size={20} />
                  {isAdding ? "Adicionando..." : "Adicionar ao Carrinho"}
                </Button>

                <Link href="/carrinho">
                  <Button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-4 rounded-lg text-lg">
                    Ir para Carrinho
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Avaliações */}
        <div className="container">
          <ReviewsSection productId={product.id} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
