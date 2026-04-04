// components/ui/Button.tsx

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // You can add more custom props here if needed
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props   // This spreads all remaining props (type, disabled, onClick, etc.)
}) => {
  // Base styles
  let baseClasses = "inline-flex items-center justify-center font-medium rounded-2xl transition-all active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-offset-2 ";

  // Variant styles
  if (variant === 'primary') {
    baseClasses += "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 ";
  } else if (variant === 'outline') {
    baseClasses += "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 ";
  } else {
    baseClasses += "bg-gray-200 hover:bg-gray-300 text-gray-900 ";
  }

  // Size styles
  if (size === 'lg') {
    baseClasses += "px-10 py-4 text-lg ";
  } else if (size === 'sm') {
    baseClasses += "px-5 py-2.5 text-sm ";
  } else {
    baseClasses += "px-7 py-3.5 text-base ";
  }

  return (
    <button
      type="button"           // Default fallback
      className={`${baseClasses} ${className}`}
      {...props}              // Spreads type, disabled, onClick, etc.
    >
      {children}
    </button>
  );
};

export default Button;