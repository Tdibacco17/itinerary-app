'use server';
import getClient from '@/lib/db';
import { revalidatePath } from 'next/cache';

export interface ItineraryCheck {
    id: number;
    check: boolean;
}

export async function getItineraryChecks(): Promise<Record<number, boolean>> {
    const client = getClient();
    await client.connect();

    const res = await client.query('SELECT id, "check" FROM itinerary_status');
    await client.end();

    return Object.fromEntries(res.rows.map(row => [row.id, row.check]));
}

export async function toggleItineraryCheck(id: number, currentCheck: boolean): Promise<ItineraryCheck> {
    const client = getClient();
    await client.connect();

    const newValue = !currentCheck;

    await client.query(
        `UPDATE itinerary_status SET "check" = $1 WHERE id = $2`,
        [newValue, id]
    );

    await client.end();
    revalidatePath('/');
    return { id, check: newValue };
}