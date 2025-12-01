import { ExternalLink, Calendar, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Certification } from '@/lib/api';

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {certification.image && (
        <div className="relative h-48 w-full -mx-6 -mt-6 mb-6 bg-slate-100 overflow-hidden">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className={!certification.image ? "pt-2" : ""}>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
            {certification.title}
          </h3>
          {certification.link && (
            <Link
              href={certification.link}
              target="_blank"
              className="text-slate-400 hover:text-indigo-600 transition-colors p-1 hover:bg-indigo-50 rounded-full flex-shrink-0 ml-2"
            >
              <ExternalLink size={18} />
            </Link>
          )}
        </div>
        
        <div className="flex items-center gap-2 text-slate-700 mb-4">
          <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
            <Award size={16} />
          </div>
          <span className="font-medium text-sm">{certification.issuer}</span>
        </div>
        
        <div className="flex items-center gap-2 text-slate-400 text-xs mt-auto border-t border-slate-100 pt-3">
          <Calendar size={14} />
          <span>{certification.date}</span>
        </div>
      </div>
    </div>
  );
}
