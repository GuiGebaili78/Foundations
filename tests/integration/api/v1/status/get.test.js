test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3001/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parseUpdateAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parseUpdateAt);

  expect(responseBody.dependencies.database.version).toEqual("17.4");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
