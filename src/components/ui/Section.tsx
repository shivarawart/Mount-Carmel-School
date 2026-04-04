// components/ui/Section.tsx

import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  bg?: 'gradient' | 'light' | 'white' | string;   // add more variants if needed
  children: React.ReactNode;
  className?: string;   // important for future flexibility
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  center = false,
  bg = 'white',
  children,
  className = '',
}) => {
  // Your existing styles/logic here...

  const bgClass = bg === 'gradient' 
    ? 'bg-gradient-to-br from-white to-gray-100 text-white' 
    : bg === 'light' 
    ? 'bg-gray-50' 
    : 'bg-white';

  return (
    <section className={`py-16 md:py-20 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Subtitle */}
        {(title || subtitle) && (
          <div className={`mb-12 ${center ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default Section;