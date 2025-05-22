const { Client } = require('pg');

const connectionString =
    process.env.DATABASE_URL;

const getClient = () => new Client({ connectionString });

async function createTable() {
    const client = getClient();
    await client.connect();
    await client.query(`
    CREATE TABLE IF NOT EXISTS itinerary_status (
    id INT PRIMARY KEY,
    "check" BOOLEAN NOT NULL DEFAULT false
    );
  `);
    await client.end();
    console.log('✅ Tabla itinerary_status creada');
}

async function seedUnchecked(ids) {
    if (!ids.length) return;
    const client = getClient();
    await client.connect();

    const valuesText = ids.map((_, i) => `($${i + 1}, false)`).join(',');
    await client.query(
        `INSERT INTO itinerary_status (id, "check") VALUES ${valuesText}
    ON CONFLICT (id) DO NOTHING`,
        ids
    );

    await client.end();
    console.log(`✅ Insertados ${ids.length} registros con check = false`);
}

async function resetTable() {
    const client = getClient();
    await client.connect();
    await client.query('DELETE FROM itinerary_status;');
    await client.end();
    console.log('✅ Todos los registros fueron eliminados');
}

async function main() {
    await createTable(); // Asegura que la tabla existe

    await resetTable(); // Limpia todos los registros actuales

    await seedUnchecked(Array.from({ length: 11 }, (_, i) => i + 1)); // Inserta IDs 1 a 25 con check=false
}

main().catch(console.error);
