import React from 'react';

export default function PageShell({ children, className = '' }) {
  return (
      <div className={`mx-auto max-w-7xl px-4 pt-2 pb-0 sm:px-6 sm:pt-8 sm:pb-10 lg:px-8 ${className}`}>
        {children}
      </div>
  );
}