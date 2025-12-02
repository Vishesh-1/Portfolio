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
    { category: "Languages", items: ["Python", "SQL", "Scala", "Java"] },
    { category: "Data Engineering", items: ["Apache Spark", "Kafka", "Airflow", "DBT", "Hadoop"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform", "Git"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Snowflake", "BigQuery"] },
  ];

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/50 border border-indigo-100 text-indigo-700 text-sm rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
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

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-100 mt-12">
        © {new Date().getFullYear()} Data Engineer Portfolio
      </footer>
    </main>
  );
}