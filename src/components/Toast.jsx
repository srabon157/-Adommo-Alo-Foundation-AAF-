import React from 'react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderColor = 'var(--primary-emerald)';

        if (toast.type === 'error') {
          Icon = AlertTriangle;
          borderColor = '#ef4444';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderColor = 'var(--accent-gold)';
        }

        return (
          <div
            key={toast.id}
            className="toast"
            style={{ borderLeftColor: borderColor }}
          >
            <Icon size={20} color={borderColor} flexShrink={0} />
            <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', flexGrow: 1 }}>
              {toast.message}
            </span>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
              aria-label="Dismiss Notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
