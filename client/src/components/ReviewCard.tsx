import { Star, CheckCircle } from "lucide-react";
import { Review } from "@/lib/reviews";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      {/* Header com foto, nome e data */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Foto do cliente */}
          <img
            src={review.customerImage}
            alt={review.customerName}
            className="w-12 h-12 rounded-full object-cover"
          />
          
          {/* Nome e data */}
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-foreground">
                {review.customerName}
              </h4>
              {review.verified && (
                <CheckCircle size={16} className="text-primary" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {formatDate(review.date)}
            </p>
          </div>
        </div>
      </div>

      {/* Rating em estrelas */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-accent text-accent"
                  : "text-border"
              }
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">
          {review.rating}.0
        </span>
      </div>

      {/* Título da avaliação */}
      <h5 className="font-semibold text-foreground mb-2">
        {review.title}
      </h5>

      {/* Texto da avaliação */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {review.text}
      </p>
    </div>
  );
}
