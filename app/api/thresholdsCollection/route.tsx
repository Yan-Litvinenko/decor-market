import connectToDatabase from '@/db/mongodb';
import { NextResponse } from 'next/server';
import { type MongoClient } from 'mongodb';
import type { ThresholdsDatabase } from '@/types/server/thresholds.interface';
import type { ProductField } from '@/types/server/product.interface';
import type { ProductMaterial } from '@/types/client/product.interface';
import type { ProductThresholds } from '@/types/client/thresholds.interface';
import type { Collection, Db } from 'mongodb';

export async function GET(): Promise<NextResponse> {
    try {
        const client: MongoClient = await connectToDatabase();
        const db: Db = client.db(process.env.MONGO_DB_NAME);

        const thresholdsCollection: Collection<ThresholdsDatabase> = db.collection('thresholds');
        const thresholdsColorCollection: Collection<ProductField<string>> = db.collection('thresholds_colors');
        const thresholdsLengthCollection: Collection<ProductField<number>> = db.collection('thresholds_lengths');
        const thresholdsWidthCollection: Collection<ProductField<number>> = db.collection('thresholds_widths');
        const countryOfOriginCollection: Collection<ProductField<number>> = db.collection('country_of_origin');
        const firmCollection: Collection<ProductField<number>> = db.collection('firm');
        const materialCollection: Collection<ProductField<ProductMaterial>> = db.collection('product_material');

        const thresholds: ThresholdsDatabase[] = await thresholdsCollection.find().toArray();
        const colors: ProductField<string>[] = await thresholdsColorCollection.find().toArray();
        const lengths: ProductField<number>[] = await thresholdsLengthCollection.find().toArray();
        const widths: ProductField<number>[] = await thresholdsWidthCollection.find().toArray();
        const countryOfOrigins: ProductField<number>[] = await countryOfOriginCollection.find().toArray();
        const firms: ProductField<number>[] = await firmCollection.find().toArray();
        const materials: ProductField<ProductMaterial>[] = await materialCollection.find().toArray();
        

        const result = thresholds.map((thresholds) => {
            return {
                ...thresholds,
                color: colors.find((color) => color.id === thresholds.color),
                length: lengths.find((length) => length.id === thresholds.length),
                width: widths.find((width) => width.id === thresholds.width),
                country_of_origin: countryOfOrigins.find((country) => country.id === thresholds.country_of_origin),
                firm: firms.find((firm) => firm.id === thresholds.firm),
                material: materials.find((material) => material.id === thresholds.material),
            };
        }) as ProductThresholds[];

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: 'Error getting doorstep collection' }, { status: 500 });
    }
}
