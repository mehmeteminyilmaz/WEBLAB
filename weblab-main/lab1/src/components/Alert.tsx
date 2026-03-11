import React from 'react';

interface AlertProps {
    children: React.ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}

export default function Alert({
    children,
    variant = 'info',
    title,
    dismissible = false,
    onDismiss,
    className = '',
}: AlertProps) {
    const variants = {
        info: 'bg-secondary/10 border-secondary text-secondary-contrast dark:text-secondary-light',
        success: 'bg-success/10 border-success text-success-contrast dark:text-success-light',
        warning: 'bg-accent/10 border-accent text-accent-contrast dark:text-accent-light',
        error: 'bg-error/10 border-error text-error-contrast dark:text-error-light',
    };

    // Improved accessible contrast colors for alerts
    const variantStyles = {
        info: 'bg-blue-900/10 border-blue-500 text-blue-700 dark:text-blue-300',
        success: 'bg-emerald-900/10 border-emerald-500 text-emerald-700 dark:text-emerald-300',
        warning: 'bg-amber-900/10 border-amber-500 text-amber-700 dark:text-amber-300',
        error: 'bg-red-900/10 border-red-500 text-red-700 dark:text-red-300',
    };

    return (
        <div
            role="alert"
            className={`border-l-4 rounded-r-lg p-4 flex gap-4 items-start ${variantStyles[variant]} ${className}`}
        >
            <div className="flex-1">
                {title && (
                    <p className="font-bold mb-1 tracking-tight">
                        {title}
                    </p>
                )}
                <div className="text-sm opacity-90 leading-relaxed">
                    {children}
                </div>
            </div>
            {dismissible && (
                <button
                    onClick={onDismiss}
                    className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                    aria-label="Kapat"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}
