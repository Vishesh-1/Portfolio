import { NextResponse } from 'next/server';
import { getExperiences, addExperience } from '@/lib/api';

export async function GET() {
  const experiences = await getExperiences();
  return NextResponse.json(experiences);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.role || !body.company) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    
    const newExperience = await addExperience(body);
    return NextResponse.json(newExperience, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}
