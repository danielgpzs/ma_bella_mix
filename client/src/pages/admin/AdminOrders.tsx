import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface OrderItem {
  productName: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  totalPrice: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  createdAt: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Maria Silva",
    customerEmail: "maria@example.com",
    totalPrice: 189.80,
    status: "pending",
    items: [
      { productName: "Sérum Vitamina C", quantity: 1, price: 89.90 },
      { productName: "Hidratante Facial", quantity: 1, price: 79.90 },
    ],
    createdAt: "2026-03-14",
  },
];

const statusColors = {
  pending: { bg: "bg-amber-100", text: "text-amber-800", label: "Pendente" },
  processing: { bg: "bg-blue-100", text: "text-blue-800", label: "Processando" },
  shipped: { bg: "bg-purple-100", text: "text-purple-800", label: "Enviado" },
  delivered: { bg: "bg-green-100", text: "text-green-800", label: "Entregue" },
  cancelled: { bg: "bg-red-100", text: "text-red-800", label: "Cancelado" },
};

export default function AdminOrders() {
  const [orders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    toast.success(`Pedido ${orderId} atualizado para ${statusColors[newStatus].label}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Gerenciamento de Pedidos</h2>

      {orders.length === 0 ? (
        <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
          <AlertCircle size={48} className="mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600">Nenhum pedido encontrado</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const statusColor = statusColors[order.status];
            return (
              <div
                key={order.id}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{order.id}</h3>
                    <p className="text-sm text-slate-600">{order.customerName}</p>
                    <p className="text-sm text-slate-600">{order.customerEmail}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">
                      R$ {order.totalPrice.toFixed(2).replace(".", ",")}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${statusColor.bg} ${statusColor.text}`}>
                      {statusColor.label}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Itens:</h4>
                  <ul className="space-y-1">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600">
                        • {item.productName} (x{item.quantity}) - R$ {item.price.toFixed(2).replace(".", ",")}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Criado em: {order.createdAt}</p>
                  <div className="flex items-center gap-2">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value as Order["status"])}
                      className="px-3 py-1 rounded border border-slate-300 text-sm"
                    >
                      {Object.entries(statusColors).map(([key, value]) => (
                        <option key={key} value={key}>
                          {value.label}
                        </option>
                      ))}
                    </select>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <Eye size={16} />
                      Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Detalhes do Pedido</h3>
            <div className="space-y-3 mb-6">
              <p>
                <span className="font-semibold text-slate-900">ID:</span> {selectedOrder.id}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Cliente:</span> {selectedOrder.customerName}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> {selectedOrder.customerEmail}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Total:</span> R${" "}
                {selectedOrder.totalPrice.toFixed(2).replace(".", ",")}
              </p>
            </div>
            <Button
              onClick={() => setSelectedOrder(null)}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
