import { ExternalLink, Calendar, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Certification } from '@/lib/api';

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {certification.image && (
        <div className="relative h-48 w-full -mx-6 -mt-6 mb-6 bg-slate-100">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-slate-900">{certification.title}</h3>
        {certification.link && (
          <Link
            href={certification.link}
            target="_blank"
            className="text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <ExternalLink size={20} />
          </Link>
        )}
      </div>
      <div className="flex items-center gap-2 text-slate-700 mb-4 font-medium">
        <Award size={18} className="text-indigo-500" />
        <span>{certification.issuer}</span>
      </div>
      <div className="flex items-center gap-2 text-slate-500 text-sm mt-auto">
        <Calendar size={16} />
        <span>{certification.date}</span>
      </div>
    </div>
  );
}
