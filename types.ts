import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: string;
  problemsSolved: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface TrustBadge {
  // FIX: Changed type to be more specific to allow passing className in React.cloneElement.
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  subtitle: string;
}
