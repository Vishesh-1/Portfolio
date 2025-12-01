import { Building2, Calendar } from 'lucide-react';
import { Experience } from '@/lib/api';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-indigo-100 last:border-l-0">
      {/* Timeline Dot */}
      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
      
      <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow -mt-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{experience.role}</h3>
            <div className="flex items-center gap-2 text-indigo-600 font-medium mt-1">
              <Building2 size={16} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
            <Calendar size={14} />
            <span>{experience.date}</span>
          </div>
        </div>
        <p className="text-slate-600 whitespace-pre-line leading-relaxed text-sm">{experience.description}</p>
      </div>
    </div>
  );
}
