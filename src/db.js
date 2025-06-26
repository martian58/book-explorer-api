import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema.js";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL, {
    ssl: true,
});
export const db = drizzle(sql, { 
    schema,
    // logger: true, // Enable query logging
});