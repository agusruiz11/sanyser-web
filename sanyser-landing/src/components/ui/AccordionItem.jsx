import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function AccordionItem({ pregunta, respuesta, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="font-semibold text-primary-navy text-base">{pregunta}</span>
        <ChevronDown
          size={20}
          className={`text-primary-orange flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
          {respuesta}
        </div>
      </div>
    </div>
  );
}
