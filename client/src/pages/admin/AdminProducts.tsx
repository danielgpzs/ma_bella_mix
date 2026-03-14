import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Sérum Vitamina C",
    price: 89.90,
    category: "Séruns",
    stock: 15,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "2",
    name: "Hidratante Facial",
    price: 79.90,
    category: "Hidratantes",
    stock: 8,
    image: "https://via.placeholder.com/100",
  },
];

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success("Produto removido com sucesso!");
  };

  const handleAddProduct = () => {
    setIsAddingProduct(true);
    toast.info("Formulário de novo produto aberto");
    setTimeout(() => setIsAddingProduct(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Gerenciamento de Produtos</h2>
        <Button
          onClick={handleAddProduct}
          className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <Plus size={18} />
          Novo Produto
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
          <AlertCircle size={48} className="mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600">Nenhum produto cadastrado</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Produto</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Categoria</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Preço</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Estoque</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="font-medium text-slate-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{product.category}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${
                          product.stock > 10
                            ? "bg-green-100 text-green-800"
                            : product.stock > 0
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                        }
                      `}
                    >
                      {product.stock} unidades
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1"
                        onClick={() => toast.info("Editar produto")}
                      >
                        <Edit size={16} />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
