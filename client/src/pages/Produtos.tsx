import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Header da Página */}
        <section className="bg-secondary/50 py-12 container">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossos Produtos
          </h1>
          <p className="text-muted-foreground text-lg">
            Descubra nossa seleção completa de produtos para skincare.
          </p>
        </section>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros */}
            <aside className="lg:col-span-1">
              <div className="bg-secondary/50 rounded-lg p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Categorias</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-white"
                        : "hover:bg-accent/20 text-foreground"
                    }`}
                  >
                    Todos os Produtos
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? "bg-primary text-white"
                          : "hover:bg-accent/20 text-foreground"
                      }`}
                    >
                      {category.icon} {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Produtos */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="text-muted-foreground mb-6">
                    Mostrando {filteredProducts.length} produto(s)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Nenhum produto encontrado nesta categoria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
