import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Package, ShoppingCart, MessageSquare, LogOut } from "lucide-react";
import AdminProducts from "./admin/AdminProducts";
import AdminOrders from "./admin/AdminOrders";
import AdminReviews from "./admin/AdminReviews";

type AdminTab = "dashboard" | "products" | "orders" | "reviews";

export default function AdminDashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");

  // Verificar se é admin
  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Acesso Restrito</h1>
          <p className="text-slate-600 mb-6">Você não tem permissão para acessar o painel de administrador.</p>
          <Button
            onClick={() => setLocation("/")}
            className="bg-primary hover:bg-primary/90 text-white w-full"
          >
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  const tabs = [
    { id: "dashboard" as AdminTab, label: "Dashboard", icon: LayoutDashboard },
    { id: "products" as AdminTab, label: "Produtos", icon: Package },
    { id: "orders" as AdminTab, label: "Pedidos", icon: ShoppingCart },
    { id: "reviews" as AdminTab, label: "Avaliações", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              MA BELLA MIX - Admin
            </h1>
            <p className="text-sm text-slate-600">Bem-vindo, {user?.name}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut size={18} />
            Sair
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }
                `}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                  <p className="text-sm text-blue-600 font-medium">Total de Produtos</p>
                  <p className="text-3xl font-bold text-blue-900 mt-2">5</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                  <p className="text-sm text-green-600 font-medium">Pedidos Pendentes</p>
                  <p className="text-3xl font-bold text-green-900 mt-2">0</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
                  <p className="text-sm text-amber-600 font-medium">Avaliações Pendentes</p>
                  <p className="text-3xl font-bold text-amber-900 mt-2">0</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                  <p className="text-sm text-purple-600 font-medium">Receita Total</p>
                  <p className="text-3xl font-bold text-purple-900 mt-2">R$ 0</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "products" && <AdminProducts />}
          {activeTab === "orders" && <AdminOrders />}
          {activeTab === "reviews" && <AdminReviews />}
        </div>
      </div>
    </div>
  );
}
