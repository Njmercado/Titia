import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto bg-white border-[3px] border-black shadow-brutal-offset p-8 sm:p-12 mb-16 relative">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-brutal-amber border-b-[3px] border-l-[3px] border-black flex items-center justify-center">
        <Sparkles size={24} className="text-black animate-pulse" />
      </div>

      <h1 className="font-headings text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
        Software & Artificial Intelligence Engineer
      </h1>
      <p className="text-xl sm:text-2xl leading-relaxed text-gray-800 mb-10 max-w-4xl font-medium">
        Software and Artificial Intelligence Engineer with over 5 years of experience. Specialized in systems architecture, MLOps, and interactive design through AI DLC processes. I lead the development of the Kribí platform, merging advanced engineering and Natural Language Processing (NLP) to preserve native languages globally.
      </p>
      
      <a 
        href="#rag-ecosystem" 
        className="inline-flex items-center gap-3 bg-brutal-terra text-white px-8 py-4 border-[3px] border-black shadow-brutal-offset hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all font-bold text-lg"
      >
        <span>Try AI Assistant (RAG)</span>
      </a>
    </section>
  );
}
