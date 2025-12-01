import { NextResponse } from 'next/server';
import { deleteExperience } from '@/lib/api';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    await deleteExperience(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
}
