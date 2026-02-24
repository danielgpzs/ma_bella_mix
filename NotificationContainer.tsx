import { useNotification, Notification } from "@/contexts/NotificationContext";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();
  const [displayedNotifications, setDisplayedNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setDisplayedNotifications(notifications);
  }, [notifications]);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-emerald-600" />;
      case "error":
        return <AlertCircle size={20} className="text-rose-600" />;
      case "warning":
        return <AlertTriangle size={20} className="text-amber-600" />;
      case "info":
        return <Info size={20} className="text-slate-600" />;
      default:
        return null;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-emerald-50 border-emerald-200";
      case "error":
        return "bg-rose-50 border-rose-200";
      case "warning":
        return "bg-amber-50 border-amber-200";
      case "info":
        return "bg-slate-50 border-slate-200";
      default:
        return "bg-slate-50 border-slate-200";
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-emerald-900";
      case "error":
        return "text-rose-900";
      case "warning":
        return "text-amber-900";
      case "info":
        return "text-slate-900";
      default:
        return "text-slate-900";
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 space-y-3 max-w-md">
      {displayedNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            flex items-start gap-4 p-4 rounded-lg border
            ${getBackgroundColor(notification.type)}
            animate-in fade-in slide-in-from-top-2 duration-300
            shadow-md hover:shadow-lg transition-shadow
          `}
        >
          {/* Ícone */}
          <div className="flex-shrink-0 mt-0.5">
            {notification.icon || getIcon(notification.type)}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-sm ${getTextColor(notification.type)}`}>
              {notification.title}
            </h3>
            <p className={`text-sm mt-1 ${getTextColor(notification.type)} opacity-90`}>
              {notification.message}
            </p>
          </div>

          {/* Botão de fechar */}
          <button
            onClick={() => removeNotification(notification.id)}
            className={`flex-shrink-0 mt-0.5 ${getTextColor(notification.type)} hover:opacity-70 transition-opacity`}
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
