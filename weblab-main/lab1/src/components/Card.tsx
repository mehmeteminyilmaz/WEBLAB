import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    image?: string;
    imageAlt?: string;
    footer?: React.ReactNode;
    variant?: 'elevated' | 'outlined' | 'filled';
    className?: string;
}

export default function Card({
    title,
    children,
    image,
    imageAlt,
    footer,
    variant = 'elevated',
    className = '',
}: CardProps) {
    const variants = {
        elevated: 'bg-surface shadow-md hover:shadow-lg dark:bg-surface/50 border border-transparent',
        outlined: 'bg-transparent border border-border hover:border-muted',
        filled: 'bg-muted/10 border border-transparent hover:bg-muted/20',
    };

    return (
        <div className={`rounded-xl overflow-hidden transition-all duration-300 ${variants[variant]} ${className}`}>
            {image && (
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={imageAlt || ""}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            )}
            <div className="p-5 space-y-3">
                {title && (
                    <h3 className="text-lg font-bold text-text tracking-tight">
                        {title}
                    </h3>
                )}
                <div className="text-text/70 leading-relaxed text-sm">
                    {children}
                </div>
            </div>
            {footer && (
                <div className="px-5 py-4 bg-muted/5 border-t border-border mt-auto">
                    {footer}
                </div>
            )}
        </div>
    );
}
