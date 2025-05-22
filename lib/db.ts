// lib/db.ts
import { Client } from 'pg';

const connectionString = process.env.DATABASE_URL;

export default function getClient() {
    return new Client({ connectionString });
}