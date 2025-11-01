'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function ResourceModal({ isOpen, onClose, title, content }: ResourceModalProps) {
  // Parse the content to handle different resource types
  const renderContent = () => {
    if (!content) return null;

    // Check if it's a list of links
    if (content.includes('#EXAMURL') || content.includes('#UNIVERSITYWEBSITE')) {
      const sections = content.split(/\n\s*\n/);
      return sections.map((section, index) => {
        const lines = section.trim().split('\n');
        const header = lines[0].startsWith('#') ? lines.shift() : null;
        
        return (
          <div key={index} className="mb-6">
            {header && (
              <h3 className="text-lg font-semibold mb-3 text-orange-600">
                {header.replace(/^#+\s*/, '')}
              </h3>
            )}
            <ul className="space-y-2">
              {lines.map((line, i) => {
                const match = line.match(/^(\d+[.)])?\s*(.*?)(https?:\/\/\S+)?$/);
                if (!match) return null;
                
                const [, number, text, url] = match;
                if (!text) return null;

                return (
                  <li key={i} className="flex items-start">
                    {number && <span className="mr-2 text-gray-500">{number}</span>}
                    {url ? (
                      <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 flex items-center"
                      >
                        {text.trim()}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    ) : (
                      <span>{text.trim()}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });
    }

    // Handle SOP and LOR content
    if (content.includes('http')) {
      const lines = content.split('\n');
      return (
        <div className="space-y-4">
          {lines.map((line, i) => {
            if (line.startsWith('http')) {
              return (
                <a 
                  key={i} 
                  href={line} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline hover:text-blue-800"
                >
                  {line}
                </a>
              );
            }
            return <p key={i} className="text-gray-700">{line}</p>;
          })}
        </div>
      );
    }

    // Default text content
    return <div className="whitespace-pre-line text-gray-700">{content}</div>;
  };

  console.log('Modal render - isOpen:', isOpen, 'Title:', title);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => {
            console.log('Modal backdrop clicked');
            onClose();
          }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={onClose}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6 relative z-[1001]"
              onClick={(e) => {
                console.log('Modal content clicked');
                e.stopPropagation();
              }}
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4" id="modal-title">
                    {title}
                  </h3>
                  <div className="mt-2 max-h-[60vh] overflow-y-auto pr-2">
                    {renderContent()}
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:text-sm"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
