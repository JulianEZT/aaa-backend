import { config } from "dotenv";
import { Server } from "./app/server/server";

config();
const server = new Server();
server.listen();