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
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                MA BELLA MIX
              </div>
            </a>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            </Link>
            <Link href="/produtos">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Produtos</a>
            </Link>
            <Link href="/sobre">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Sobre</a>
            </Link>
            <Link href="/contato">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Contato</a>
            </Link>
          </nav>

          {/* Carrinho e Menu Mobile */}
          <div className="flex items-center gap-4">
            <Link href="/carrinho">
              <a className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
                <ShoppingCart size={24} className="text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </a>
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
              <a className="block py-2 text-foreground hover:text-primary transition-colors">Home</a>
            </Link>
            <Link href="/produtos">
              <a className="block py-2 text-foreground hover:text-primary transition-colors">Produtos</a>
            </Link>
            <Link href="/sobre">
              <a className="block py-2 text-foreground hover:text-primary transition-colors">Sobre</a>
            </Link>
            <Link href="/contato">
              <a className="block py-2 text-foreground hover:text-primary transition-colors">Contato</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
