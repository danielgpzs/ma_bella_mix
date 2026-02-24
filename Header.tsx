import { Link } from "wouter";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCartContext } from "@/contexts/CartContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCartContext();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                MA BELLA MIX
              </div>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">Home</span>
            </Link>
            <Link href="/produtos">
              <span className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">Produtos</span>
            </Link>
            <Link href="/sobre">
              <span className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">Sobre</span>
            </Link>
            <Link href="/contato">
              <span className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer">Contato</span>
            </Link>
          </nav>

          {/* Carrinho e Menu Mobile */}
          <div className="flex items-center gap-4">
            <Link href="/carrinho">
              <div className="relative p-2 hover:bg-secondary rounded-lg transition-colors cursor-pointer">
                <ShoppingCart size={24} className="text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>

            {/* Menu Mobile */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <Link href="/">
              <span className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer">Home</span>
            </Link>
            <Link href="/produtos">
              <span className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer">Produtos</span>
            </Link>
            <Link href="/sobre">
              <span className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer">Sobre</span>
            </Link>
            <Link href="/contato">
              <span className="block py-2 text-foreground hover:text-primary transition-colors cursor-pointer">Contato</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
