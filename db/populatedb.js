
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  sendername VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  timesent VARCHAR ( 255 )
);

INSERT INTO messages (sendername, message, timesent) 
VALUES
  ('Christopher', 'Hello guys', '2023-02-04 10:00:00'),
  ('Damon', 'Hi', '2023-02-04 10:00:00'),
  ('Peter', 'Hello', '2023-02-04 10:00:00'),
  ('John', 'Hi', '2023-02-04 10:00:00');
`;

async function main() {
  console.log("seeding...");
  const connectionString = process.argv[2];
  if(!connectionString) {
    console.error("Error: Missing connection string");
    process.exit(1);
  }
  const client = new Client({connectionString});
  try {
  await client.connect();
  await client.query(SQL);
  console.log("Database seeded successfully!");
  } catch(error) {
    console.error(error);
  } finally {
    await client.end();
    console.log("done");
  }
  
}

main();
