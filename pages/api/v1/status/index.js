import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  /* teste para saber a versão do postgres que está instalada no servidor*/
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  // console.log(databaseVersionResult.rows[0])

  /* teste para saber o máximo de conexões que o servidor suporta*/
  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;
  // console.log(databaseMaxConnectionsResult.rows[0].max_connections)

  /* teste para saber quantas conexões estão abertas no servidor*/
  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],

    // "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';"
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;
  // console.log(databaseOpenedConnectionsResult.rows[0].count)

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: parseInt(databaseOpenedConnectionsValue),
      },
    },
  });
}

export default status;
