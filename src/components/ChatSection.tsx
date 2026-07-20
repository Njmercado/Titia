'use client';

import { Database, Globe, GraduationCap } from 'lucide-react';
import KnowledgeBaseCard from '@/components/KnowledgeBaseCard';
import Chat from '@/components/Chat';

export default function ChatSection() {
  return (
    <section id="rag-ecosystem" className="w-full mb-16">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto">

        {/* LEFT PANEL: Fixed Informational Track */}
        <div className="w-full lg:flex-1 flex flex-col gap-4">
          <div className="border-[3px] border-black bg-brutal-cream p-4 font-bold text-lg mb-2 shadow-brutal-offset">
            Knowledge Base (RAG Source)
          </div>

          <KnowledgeBaseCard
            icon={<GraduationCap size={24} />}
            title="Systems and Computing Engineer"
            description="Focus on Computer Science - Universidad del Norte."
          />

          <KnowledgeBaseCard
            icon={<Database size={24} />}
            title="Artificial Intelligence Specialist"
            description="Universidad Minuto de Dios. Strong focus on data architectures, Natural Language Processing (NLP), and MLOps."
          />

          <KnowledgeBaseCard
            icon={<Globe size={24} />}
            title="Software Engineer"
            description="Global Educational Technology Solutions (EdTech). Large-scale system optimization and stability for millions of users."
          />
        </div>

        {/* RIGHT PANEL: Interactive Chat Interface */}
        <Chat />
      </div>
    </section>
  );
}
