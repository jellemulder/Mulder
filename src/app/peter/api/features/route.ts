import { NextRequest, NextResponse } from 'next/server';
import { dbClient } from '@/lib/mongodb';

export async function GET() {
  try {
    await dbClient.connect();
    const db = dbClient.db('portfolio');
    const features = await db.collection('features').find({}).toArray();
    
    return NextResponse.json({ features });
  } catch (error) {
    console.error('Error fetching features:', error);
    return NextResponse.json({ error: 'Failed to fetch features' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, status, priority, description } = body;

    if (!name || !status || !priority) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await dbClient.connect();
    const db = dbClient.db('portfolio');
    
    const newFeature = {
      name,
      status,
      priority,
      description: description || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('features').insertOne(newFeature);
    
    return NextResponse.json({ 
      message: 'Feature created successfully', 
      featureId: result.insertedId 
    });
  } catch (error) {
    console.error('Error creating feature:', error);
    return NextResponse.json({ error: 'Failed to create feature' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, status, priority, description } = body;

    if (!id) {
      return NextResponse.json({ error: 'Feature ID is required' }, { status: 400 });
    }

    await dbClient.connect();
    const db = dbClient.db('portfolio');
    
    const updateData = {
      ...(name && { name }),
      ...(status && { status }),
      ...(priority && { priority }),
      ...(description !== undefined && { description }),
      updatedAt: new Date()
    };

    const result = await db.collection('features').updateOne(
      { _id: id },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Feature not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Feature updated successfully' });
  } catch (error) {
    console.error('Error updating feature:', error);
    return NextResponse.json({ error: 'Failed to update feature' }, { status: 500 });
  }
}
