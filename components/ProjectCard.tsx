import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/lib/api';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        <Link
          href={project.link}
          target="_blank"
          className="text-slate-400 hover:text-indigo-600 transition-colors"
        >
          <ExternalLink size={20} />
        </Link>
      </div>
      <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
