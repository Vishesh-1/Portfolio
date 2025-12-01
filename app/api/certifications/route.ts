import { NextResponse } from 'next/server';
import { getCertifications, addCertification } from '@/lib/api';

export async function GET() {
  const certifications = await getCertifications();
  return NextResponse.json(certifications);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Basic validation
    if (!body.title || !body.issuer || !body.date) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    
    const newCertification = await addCertification(body);
    return NextResponse.json(newCertification, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create certification' }, { status: 500 });
  }
}
