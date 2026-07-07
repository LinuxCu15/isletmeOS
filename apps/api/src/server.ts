import cors from "@fastify/cors";
import Fastify from "fastify";

const server = Fastify({
  logger: true,
});

await server.register(cors, {
  origin: process.env.API_CORS_ORIGIN ?? "http://localhost:3000",
});

const host = process.env.API_HOST ?? "0.0.0.0";
const port = Number(process.env.API_PORT ?? 4000);

try {
  await server.listen({ host, port });
} catch (error) {
  server.log.error(error);
  process.exit(1);
}

