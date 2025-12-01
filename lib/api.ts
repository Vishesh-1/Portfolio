import fs from 'fs/promises';
import path from 'path';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

const dataDirectory = path.join(process.cwd(), 'data');
const projectsFile = path.join(dataDirectory, 'projects.json');
const certificationsFile = path.join(dataDirectory, 'certifications.json');

export async function getProjects(): Promise<Project[]> {
  try {
    const fileContents = await fs.readFile(projectsFile, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading projects file:", error);
    return [];
  }
}

export async function getCertifications(): Promise<Certification[]> {
  try {
    const fileContents = await fs.readFile(certificationsFile, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading certifications file:", error);
    return [];
  }
}

export async function saveProjects(projects: Project[]): Promise<void> {
  await fs.writeFile(projectsFile, JSON.stringify(projects, null, 2));
}

export async function saveCertifications(certifications: Certification[]): Promise<void> {
  await fs.writeFile(certificationsFile, JSON.stringify(certifications, null, 2));
}

export async function addProject(project: Omit<Project, 'id'>): Promise<Project> {
  const projects = await getProjects();
  const newProject = { ...project, id: Date.now().toString() };
  projects.push(newProject);
  await saveProjects(projects);
  return newProject;
}

export async function addCertification(certification: Omit<Certification, 'id'>): Promise<Certification> {
  const certifications = await getCertifications();
  const newCertification = { ...certification, id: Date.now().toString() };
  certifications.push(newCertification);
  await saveCertifications(certifications);
  return newCertification;
}

export async function deleteProject(id: string): Promise<void> {
  const projects = await getProjects();
  const filteredProjects = projects.filter((p) => p.id !== id);
  await saveProjects(filteredProjects);
}

export async function deleteCertification(id: string): Promise<void> {
  const certifications = await getCertifications();
  const filteredCertifications = certifications.filter((c) => c.id !== id);
  await saveCertifications(filteredCertifications);
}
