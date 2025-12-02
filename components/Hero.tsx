import { Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Data <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Building robust ETL pipelines, scalable data architectures, and turning raw data into actionable insights.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <Link
              href="https://github.com/Vishesh-1"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <Github size={20} />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishesh-sharma-569916200/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 font-medium"
            >
              <FileText size={20} />
              Resume
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end z-10">
          <div className="relative w-64 h-64 md:w-96 md:h-96 transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/profile-placeholder.svg"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
