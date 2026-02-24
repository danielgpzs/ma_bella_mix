import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              MA BELLA MIX
            </h3>
            <p className="text-muted-foreground text-sm">
              Sua rotina de skincare começa aqui. Produtos premium para uma pele radiante.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/">
                  <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/produtos">
                  <span className="hover:text-primary transition-colors cursor-pointer">Produtos</span>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <span className="hover:text-primary transition-colors cursor-pointer">Sobre</span>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <span className="hover:text-primary transition-colors cursor-pointer">Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Frete
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contato@mabella.com</li>
              <li>Telefone: (11) 9999-9999</li>
              <li>Seg-Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-8"></div>

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2026 MA BELLA MIX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
