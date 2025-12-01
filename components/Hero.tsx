import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Data Engineer
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Building robust ETL pipelines, scalable data architectures, and turning raw data into actionable insights.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="https://github.com/Vishesh-1"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishesh-sharma-569916200/"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
    </section>
  );
}
