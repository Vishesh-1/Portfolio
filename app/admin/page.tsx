"use client";

import { useState, useEffect, useCallback } from 'react';
import { Project, Certification } from '@/lib/api';
import { Trash2, Plus, Award } from 'lucide-react';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Projects State
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [link, setLink] = useState('');

  // Certifications State
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [certTitle, setCertTitle] = useState('');
  const [certIssuer, setCertIssuer] = useState('');
  const [certDate, setCertDate] = useState('');
  const [certLink, setCertLink] = useState('');
  const [certImage, setCertImage] = useState('');

  const fetchProjects = useCallback(async () => {
    const res = await fetch('/api/projects');
    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
  }, []);

  const fetchCertifications = useCallback(async () => {
    const res = await fetch('/api/certifications');
    if (res.ok) {
      const data = await res.json();
      setCertifications(data);
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchProjects(), fetchCertifications()]);
      setIsLoading(false);
    };
    loadData();
  }, [fetchProjects, fetchCertifications]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid password');
    }
  }

  async function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);
    
    const res = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        tags: tagsArray,
        link
      }),
    });

    if (res.ok) {
      fetchProjects();
      setTitle('');
      setDescription('');
      setTags('');
      setLink('');
    } else {
      alert('Failed to add project');
    }
  }

  async function handleAddCertification(e: React.FormEvent) {
    e.preventDefault();
    
    const res = await fetch('/api/certifications', {
      method: 'POST',
      body: JSON.stringify({
        title: certTitle,
        issuer: certIssuer,
        date: certDate,
        link: certLink,
        image: certImage
      }),
    });

    if (res.ok) {
      fetchCertifications();
      setCertTitle('');
      setCertIssuer('');
      setCertDate('');
      setCertLink('');
      setCertImage('');
    } else {
      alert('Failed to add certification');
    }
  }

  async function handleDeleteProject(id: string) {
    if (!confirm('Are you sure?')) return;
    
    const res = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchProjects();
    } else {
      alert('Failed to delete project');
    }
  }

  async function handleDeleteCertification(id: string) {
    if (!confirm('Are you sure?')) return;
    
    const res = await fetch(`/api/certifications/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchCertifications();
    } else {
      alert('Failed to delete certification');
    }
  }

  if (isLoading) return <div className="p-8">Loading...</div>;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-slate-300 rounded px-4 py-2 mb-4 focus:outline-none focus:border-indigo-600 text-slate-900"
          />
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-slate-600 hover:text-slate-900"
          >
            Logout
          </button>
        </header>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Projects Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add Project Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-slate-900">
                <Plus size={20} />
                Add New Project
              </h3>
              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={3}
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma separated)</label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="SQL, Python, AWS"
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Link</label>
                  <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
                >
                  Add Project
                </button>
              </form>
            </div>

            {/* Project List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">Current Projects</h3>
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-slate-900">{project.title}</h4>
                    <p className="text-sm text-slate-500 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                    title="Delete Project"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {projects.length === 0 && (
                <p className="text-slate-500 italic">No projects yet.</p>
              )}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Certifications Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add Certification Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-slate-900">
                <Award size={20} />
                Add New Certification
              </h3>
              <form onSubmit={handleAddCertification} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                  <input
                    value={certTitle}
                    onChange={(e) => setCertTitle(e.target.value)}
                    required
                    placeholder="AWS Certified Solutions Architect"
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Issuer</label>
                  <input
                    value={certIssuer}
                    onChange={(e) => setCertIssuer(e.target.value)}
                    required
                    placeholder="Amazon Web Services"
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                  <input
                    type="month"
                    value={certDate}
                    onChange={(e) => setCertDate(e.target.value)}
                    required
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Image URL (Optional)</label>
                  <input
                    value={certImage}
                    onChange={(e) => setCertImage(e.target.value)}
                    placeholder="/cert-image.jpg or https://..."
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Link (Optional)</label>
                  <input
                    value={certLink}
                    onChange={(e) => setCertLink(e.target.value)}
                    placeholder="https://..."
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-600 text-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
                >
                  Add Certification
                </button>
              </form>
            </div>

            {/* Certification List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">Current Certifications</h3>
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-slate-900">{cert.title}</h4>
                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                    <p className="text-xs text-slate-400 mt-1">{cert.date}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteCertification(cert.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                    title="Delete Certification"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {certifications.length === 0 && (
                <p className="text-slate-500 italic">No certifications yet.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
