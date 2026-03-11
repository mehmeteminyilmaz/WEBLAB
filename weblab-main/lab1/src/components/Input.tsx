import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helpText?: string;
}

export default function Input({
    label,
    error,
    helpText,
    id,
    className = '',
    ...props
}: InputProps) {
    return (
        <div className="space-y-1 w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-text/80 dark:text-text/60"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`
          w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2
          bg-surface text-text dark:bg-bg
          ${error
                        ? 'border-error focus:ring-error/50'
                        : 'border-border focus:ring-primary/50 hover:border-muted'
                    }
          ${props.disabled ? 'opacity-50 cursor-not-allowed bg-muted/10' : ''}
          ${className}
        `}
                aria-describedby={
                    error ? `${id}-error` : helpText ? `${id}-help` : undefined
                }
                {...props}
            />
            {error && (
                <p id={`${id}-error`} role="alert" className="text-sm text-error/90 font-medium">
                    {error}
                </p>
            )}
            {helpText && !error && (
                <p id={`${id}-help`} className="text-sm text-muted">
                    {helpText}
                </p>
            )}
        </div>
    );
}
