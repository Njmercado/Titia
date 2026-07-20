export interface KnowledgeBaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  isActive?: boolean;
}

export default function KnowledgeBaseCard({ icon, title, description, isActive = false }: KnowledgeBaseCardProps) {
  return (
    <div className={`p-6 border-[3px] border-black transition-colors ${isActive ? 'bg-brutal-sage shadow-brutal-offset' : 'bg-white'}`}>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="font-headings text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
