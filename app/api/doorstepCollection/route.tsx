import connectToDatabase from '@/db/mongodb';
import { NextResponse } from 'next/server';
import { type MongoClient } from 'mongodb';
import type { DoorstepDatabase } from '@/types/server/doorstep.interface';
import type { ProductField } from '@/types/server/product.interface';
import type { DoorstepType } from '@/types/client/doorstep.interface';
import type { Collection, Db } from 'mongodb';

export async function GET(): Promise<NextResponse> {
    try {
        const client: MongoClient = await connectToDatabase();
        const db: Db = client.db(process.env.MONGO_DB_NAME);

        const doorstepCollection: Collection<DoorstepDatabase> = db.collection('doorstep');
        const doorstepColorCollection: Collection<ProductField<string>> = db.collection('doorstep_colors');
        const doorstepNamesCollection: Collection<ProductField<string>> = db.collection('doorstep_names');
        const doorstepLengthCollection: Collection<ProductField<number>> = db.collection('doorstep_lengths');
        const doorstepWidthCollection: Collection<ProductField<number>> = db.collection('doorstep_widths');
        const countryOfOriginCollection: Collection<ProductField<number>> = db.collection('country_of_origin');
        const firmCollection: Collection<ProductField<number>> = db.collection('firm');

        const doorsteps: DoorstepDatabase[] = await doorstepCollection.find().toArray();
        const colors: ProductField<string>[] = await doorstepColorCollection.find().toArray();
        const names: ProductField<string>[] = await doorstepNamesCollection.find().toArray();
        const lengths: ProductField<number>[] = await doorstepLengthCollection.find().toArray();
        const widths: ProductField<number>[] = await doorstepWidthCollection.find().toArray();
        const countryOfOrigins: ProductField<number>[] = await countryOfOriginCollection.find().toArray();
        const firms: ProductField<number>[] = await firmCollection.find().toArray();

        const result = doorsteps.map((doorstep) => {
            return {
                ...doorstep,
                color: colors.find((color) => color.id === doorstep.color),
                name: names.find((name) => name.id === doorstep.name),
                length: lengths.find((length) => length.id === doorstep.length),
                width: widths.find((width) => width.id === doorstep.width),
                country_of_origin: countryOfOrigins.find((country) => country.id === doorstep.country_of_origin),
                firm: firms.find((firm) => firm.id === doorstep.firm),
            };
        }) as DoorstepType[];

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: 'Error getting doorstep collection' }, { status: 500 });
    }
}
