const fastify = require("fastify")({logger: true});
const path = require("path");
const fs = require("fs")

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public",
});

fastify.get("/", async (request, reply) => {
  return reply.sendFile("index.html");
});

fastify.get("/api/hydrocarbons", async (request, reply) => {
  const data = fs.readFileSync(path.join(__dirname, "data.json"));
  const hydrocarbons = JSON.parse(data);
  return hydrocarbons;
});

const PORT = 3000;

fatsify.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running on http://localhost:${PORT}`);    
});
