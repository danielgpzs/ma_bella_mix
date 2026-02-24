import { Link } from "wouter";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { useCartContext } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartContext();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product, 1);
    toast.success(`${product.name} adicionado ao carrinho!`);
    setTimeout(() => setIsAdding(false), 300);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/produto/${product.id}`}>
      <a className="block">
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
          {/* Imagem */}
          <div className="relative overflow-hidden bg-secondary h-64 sm:h-72">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {discountPercent > 0 && (
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                -{discountPercent}%
              </div>
            )}
          </div>

          {/* Conteudo */}
          <div className="p-4 sm:p-6">
            <h3
              className="font-bold text-lg mb-2 hover:text-primary transition-colors line-clamp-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>

            {/* Descricao */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Preco */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </div>

            {/* Botao */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              {isAdding ? "Adicionando..." : "Adicionar"}
            </Button>
          </div>
        </div>
      </a>
    </Link>
  );
}
