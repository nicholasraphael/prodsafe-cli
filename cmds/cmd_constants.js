const POSTGRES_ENV_VARS = [
    {
        name: 'PGHOST',
        type: 'input',
        message: `What is your Postgres host server name (examples: localhost, database.server.com) `
    },
    {
        name: 'PGUSER',
        type: 'input',
        message: `What is your Postgres user name (examples: postgres) `
    },
    {
        name: 'PGDATABASE',
        type: 'input',
        message: `What is your Postgres database name (examples: test) `
    },
    {
        name: 'PGPASSWORD',
        type: 'input',
        message: `What is the password `
    },
    {
        name: 'PGPORT',
        type: 'input',
        message: 'What port is it listening on '
    }
];

module.exports = {
    POSTGRES_ENV_VARS: POSTGRES_ENV_VARS,
}
