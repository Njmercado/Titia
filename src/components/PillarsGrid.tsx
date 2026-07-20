import Link from 'next/link';
import { Code2, Server, Globe, ArrowRight } from 'lucide-react';
import pillarsData from '@/constants/pillars.constant.json';

const iconMap: Record<string, React.ElementType> = {
  Code2: Code2,
  Globe: Globe,
  Server: Server,
};

const colorMap: Record<string, string> = {
  amber: "bg-brutal-amber",
  sage: "bg-brutal-sage",
  terra: "bg-brutal-terra text-white",
};

export default function PillarsGrid() {
  return (
    <section id="projects" className="w-full mb-16">
      <h2 className="font-headings text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2 inline-block">
        {pillarsData.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        
        {pillarsData.pillars.map((pillar) => {
          const Icon = iconMap[pillar.icon];
          const bgColor = colorMap[pillar.color] || "bg-gray-200";
          
          return (
            <article key={pillar.id} className="bg-white border-[3px] border-black shadow-brutal-offset p-6 hover:-translate-y-2 hover:shadow-brutal transition-all h-full flex flex-col">
              <div className={`w-12 h-12 border-2 border-black flex items-center justify-center mb-4 ${bgColor}`}>
                {Icon && <Icon size={24} className={pillar.color === 'terra' ? '' : 'text-black'} />}
              </div>
              <h3 className="font-headings text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-grow">
                {pillar.description}
              </p>
              
              <div className={`flex flex-wrap gap-2 pt-4 border-t-2 border-black ${pillar.link ? 'mb-6' : 'mt-auto'}`}>
                {pillar.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold border-2 border-black px-2 py-1 bg-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
              
              {pillar.link && (
                <Link 
                  href={pillar.link} 
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-3 font-bold hover:bg-brutal-amber hover:text-black transition-colors border-2 border-black shadow-brutal-sm w-full"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight size={18} />
                </Link>
              )}
            </article>
          );
        })}
        
      </div>
    </section>
  );
}
