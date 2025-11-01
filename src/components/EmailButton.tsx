'use client';

import { Mail } from 'lucide-react';

export default function EmailButton({ email }: { email: string }) {
  return (
    <a 
      href={`mailto:${email}`}
      className="inline-flex items-center justify-center space-x-1.5 bg-orange-100 hover:bg-orange-200 text-orange-700 hover:text-orange-900 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <Mail className="h-4 w-4" />
      <span className="font-medium">Email</span>
    </a>
  );
}
