import { Link } from "wouter";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/CartContext";

export default function Carrinho() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartContext();
  const total = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Seu Carrinho está Vazio
            </h1>
            <p className="text-muted-foreground mb-8">
              Que tal explorar nossos produtos e encontrar algo especial?
            </p>
            <Link href="/produtos">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 flex items-center gap-2 mx-auto">
                  <ArrowLeft size={18} />
                  Voltar aos Produtos
                </Button>
              </a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Seu Carrinho
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Itens do Carrinho */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="bg-secondary/50 rounded-lg p-6 flex gap-6">
                    {/* Imagem */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    {/* Detalhes */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{item.product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.product.description}
                      </p>

                      {/* Controle de Quantidade */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        {/* Remover */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary mb-2">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        R$ {item.product.price.toFixed(2).replace(".", ",")} cada
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumo */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/50 rounded-lg p-6 sticky top-24">
                <h2 className="font-bold text-xl mb-6">Resumo do Pedido</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal:</span>
                    <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Frete:</span>
                    <span>Grátis</span>
                  </div>
                  <div className="divider-gold"></div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">R$ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <a>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg mb-3">
                      Ir para Checkout
                    </Button>
                  </a>
                </Link>

                <Link href="/produtos">
                  <a>
                    <Button className="w-full bg-white border border-primary text-primary hover:bg-primary/5 font-semibold py-3 rounded-lg">
                      Continuar Comprando
                    </Button>
                  </a>
                </Link>

                <button
                  onClick={clearCart}
                  className="w-full mt-3 text-destructive hover:text-destructive/80 font-semibold py-2 transition-colors"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
