import { NextResponse } from 'next/server';
import { getProjects, addProject } from '@/lib/api';

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Basic validation
    if (!body.title || !body.description) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    
    const newProject = await addProject(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
