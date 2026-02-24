import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 sm:h-[500px] md:h-[600px] overflow-hidden bg-secondary">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/HdSri6v1XJeMqIKpb7beha/sandbox/FZwbug7WjSoSUwDakav74X-img-1_1771948680000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSGRTcmk2djFYSmVNcUlLcGI3YmVoYS9zYW5kYm94L0Zad2J1ZzdXalNvU1V3RGFrYXY3NFgtaW1nLTFfMTc3MTk0ODY4MDAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xt6UomGdmxbOVi~QJqZXUxYIHzURbMOyyG839gaGiRQY346ZE4AYcOBBe9IrFKgntxJmL-WQ0YHX-4Qqjn4iqv7kCLJW2BKOz8ID-DLZ6CCChO~eBEwG8cnuY44rBvuG8Z0GHwU-KzwtRDFtyD-bqJpgF441pEnyi-vOiYeSfKte7XzdSVTO7kb4SXnK7XmvM3quQSvfkYLUgaV8SFepmRkC2~KAQWTOWKMVyPg1H4G9rUhZksEJfd-ovDIip49aUUsHNH~mVINqGy8D86cZrx3htNmV86trJqqouJIWNrOqFkXnB1QPdVxXdBQtcUetfVCEmVUk7gro5Rm2MMNvaQ__"
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Descubra o Poder de uma Pele Radiante
              </h1>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Sua rotina de skincare começa aqui. Produtos premium para uma beleza natural.
              </p>
              <Link href="/produtos">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                    Comprar Agora
                    <ArrowRight size={20} />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-16 sm:py-20 container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Categorias
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href="/produtos">
                <a className="p-6 bg-secondary rounded-lg hover:bg-accent/10 transition-colors text-center group">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <p className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors">
                    {category.name}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </section>

        <div className="divider-gold my-8"></div>

        {/* Produtos em Destaque */}
        <section className="py-16 sm:py-20 container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/produtos">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 text-lg">
                  Ver Todos os Produtos
                </Button>
              </a>
            </Link>
          </div>
        </section>

        <div className="divider-gold my-8"></div>

        {/* Seção de Benefícios */}
        <section className="py-16 sm:py-20 bg-secondary/50">
          <div className="container">
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Por Que Escolher MA BELLA MIX
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-bold text-xl mb-2">Produtos Premium</h3>
                <p className="text-muted-foreground">
                  Selecionados com cuidado para garantir qualidade e eficácia.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="font-bold text-xl mb-2">Frete Rápido</h3>
                <p className="text-muted-foreground">
                  Entrega em todo o Brasil com rastreamento.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💝</div>
                <h3 className="font-bold text-xl mb-2">Garantia</h3>
                <p className="text-muted-foreground">
                  Satisfação garantida ou seu dinheiro de volta.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
