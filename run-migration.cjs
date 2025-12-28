const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = 'postgresql://postgres.sxivdasguucvnpwvlprm:vyooma26@123456@aws-1-ap-south-1.pooler.supabase.com:6543/postgres';

async function runMigration() {
    const client = new Client({ connectionString });

    try {
        console.log('Connecting to database...');
        await client.connect();
        console.log('✅ Connected successfully!\n');

        const sqlPath = path.join(__dirname, 'supabase', 'migrations', '00000000_initial_schema.sql');
        console.log(`Reading SQL from: ${sqlPath}`);
        const sql = fs.readFileSync(sqlPath, 'utf-8');

        console.log('Executing migration...\n');
        await client.query(sql);

        console.log('✅ Migration completed successfully!');
        console.log('\nCreated tables:');
        console.log('  - profiles');
        console.log('  - organizations');
        console.log('  - org_members');
        console.log('  - assets');
        console.log('  - inspections');
        console.log('  - inspection_data');
        console.log('  - defects');
        console.log('\n✅ Row Level Security enabled on all tables');

    } catch (error) {
        console.error('❌ Migration failed:', error.message);
        throw error;
    } finally {
        await client.end();
        console.log('\nConnection closed.');
    }
}

runMigration();
