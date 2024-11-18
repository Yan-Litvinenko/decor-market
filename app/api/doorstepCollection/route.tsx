import connectToDatabase from '@/db/mongodb';
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import type { Doorstep, DoorstepColorDb, DoorstepDb } from '@/types/Doorstep.interface';
import type { Collection, Db, WithId } from 'mongodb';

export async function GET(): Promise<NextResponse> {
    try {
        const client: MongoClient = await connectToDatabase();
        const db: Db = client.db(process.env.MONGO_DB_NAME);

        const doorstepCollection: Collection<DoorstepDb> = db.collection('doorstep');
        const doorstepColorCollection: Collection<DoorstepColorDb> = db.collection('doorstep_colors');

        const doorsteps: WithId<DoorstepDb>[] = await doorstepCollection.find({}).toArray();
        const colors: WithId<DoorstepColorDb>[] = await doorstepColorCollection.find({}).toArray();

        const result = doorsteps.map((doorstep) => {
            return {
                ...doorstep,
                color: colors.find((color) => color.id === doorstep.color),
            } as Doorstep;
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: 'Error getting doorstep collection' }, { status: 500 });
    }
}
