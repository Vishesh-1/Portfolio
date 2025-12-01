import { ExternalLink, FolderGit2 } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/lib/api';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <FolderGit2 size={20} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
        </div>
        <Link
          href={project.link}
          target="_blank"
          className="text-slate-400 hover:text-indigo-600 transition-colors p-1 hover:bg-indigo-50 rounded-full"
        >
          <ExternalLink size={20} />
        </Link>
      </div>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
