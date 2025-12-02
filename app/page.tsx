import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import CertificationCard from '@/components/CertificationCard';
import ExperienceCard from '@/components/ExperienceCard';
import { getProjects, getCertifications, getExperiences } from '@/lib/api';

export default async function Home() {
  const projects = await getProjects();
  const certifications = await getCertifications();
  const experiences = await getExperiences();

  const skills = [
    {
      category: "Cloud & Infrastructure",
      items: ["Azure Data Factory", "Azure Synapse", "Azure Blob Storage", "Azure Logic Apps", "Microsoft Fabric", "Databricks"]
    },
    {
      category: "Languages & Compute",
      items: ["Python", "SQL", "T-SQL", "PySpark"]
    },
    {
      category: "Architecture & Concepts",
      items: ["ETL/ELT Design", "Data Warehousing", "Dimensional Modeling"]
    },
    {
      category: "Tools & DevOps",
      items: ["SQL Server", "Git", "Azure Dev-Ops"]
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 border border-white/60">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-indigo-100 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span key={item} className="px-4 py-2 bg-white/70 border border-indigo-100 text-slate-700 text-sm rounded-lg font-medium shadow-sm hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {certifications.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </section>
      )}

      {experiences.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-100 mt-12">
        © {new Date().getFullYear()} Data Engineer Portfolio
      </footer>
    </main>
  );
}