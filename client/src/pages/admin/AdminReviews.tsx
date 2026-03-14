import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, AlertCircle, Star } from "lucide-react";
import { toast } from "sonner";

interface Review {
  id: string;
  productName: string;
  customerName: string;
  rating: number;
  title: string;
  text: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

const mockReviews: Review[] = [
  {
    id: "REV-001",
    productName: "Sérum Vitamina C",
    customerName: "Ana Costa",
    rating: 5,
    title: "Produto excelente!",
    text: "Adorei o resultado. Minha pele ficou muito mais radiante após uma semana de uso.",
    status: "pending",
    createdAt: "2026-03-14",
  },
  {
    id: "REV-002",
    productName: "Hidratante Facial",
    customerName: "João Silva",
    rating: 4,
    title: "Muito bom",
    text: "Produto de qualidade, hidrata bem. Recomendo!",
    status: "pending",
    createdAt: "2026-03-13",
  },
];

export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);

  const handleApprove = (id: string) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status: "approved" } : r)));
    toast.success("Avaliação aprovada!");
  };

  const handleReject = (id: string) => {
    setReviews(reviews.map((r) => (r.id === id ? { ...r, status: "rejected" } : r)));
    toast.success("Avaliação rejeitada!");
  };

  const pendingReviews = reviews.filter((r) => r.status === "pending");
  const approvedReviews = reviews.filter((r) => r.status === "approved");
  const rejectedReviews = reviews.filter((r) => r.status === "rejected");

  const renderReviewCard = (review: Review, showActions: boolean = true) => (
    <div key={review.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-slate-900">{review.productName}</h3>
          <p className="text-sm text-slate-600">{review.customerName}</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}
            />
          ))}
        </div>
      </div>

      <div className="mb-3">
        <p className="font-medium text-slate-900">{review.title}</p>
        <p className="text-sm text-slate-600 mt-1">{review.text}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">{review.createdAt}</p>
        {showActions && review.status === "pending" && (
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1"
              onClick={() => handleApprove(review.id)}
            >
              <Check size={16} />
              Aprovar
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center gap-1"
              onClick={() => handleReject(review.id)}
            >
              <X size={16} />
              Rejeitar
            </Button>
          </div>
        )}
        {!showActions && (
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              review.status === "approved"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {review.status === "approved" ? "Aprovada" : "Rejeitada"}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Moderação de Avaliações</h2>

      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-sm text-amber-600 font-medium">Pendentes</p>
          <p className="text-3xl font-bold text-amber-900">{pendingReviews.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-600 font-medium">Aprovadas</p>
          <p className="text-3xl font-bold text-green-900">{approvedReviews.length}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <p className="text-sm text-red-600 font-medium">Rejeitadas</p>
          <p className="text-3xl font-bold text-red-900">{rejectedReviews.length}</p>
        </div>
      </div>

      {/* Avaliações Pendentes */}
      {pendingReviews.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Avaliações Pendentes</h3>
          <div className="space-y-3">
            {pendingReviews.map((review) => renderReviewCard(review, true))}
          </div>
        </div>
      )}

      {pendingReviews.length === 0 && approvedReviews.length === 0 && rejectedReviews.length === 0 && (
        <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
          <AlertCircle size={48} className="mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600">Nenhuma avaliação encontrada</p>
        </div>
      )}

      {/* Avaliações Aprovadas */}
      {approvedReviews.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Avaliações Aprovadas</h3>
          <div className="space-y-3">
            {approvedReviews.map((review) => renderReviewCard(review, false))}
          </div>
        </div>
      )}

      {/* Avaliações Rejeitadas */}
      {rejectedReviews.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Avaliações Rejeitadas</h3>
          <div className="space-y-3">
            {rejectedReviews.map((review) => renderReviewCard(review, false))}
          </div>
        </div>
      )}
    </div>
  );
}
