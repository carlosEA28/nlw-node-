import {
  init_subscriptions,
  subscriptions
} from "./chunk-MIHW5TJN.mjs";
import {
  env,
  init_env
} from "./chunk-2HHFUIXV.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/drizzle/client.ts
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
var pg, db;
var init_client = __esm({
  "src/drizzle/client.ts"() {
    init_env();
    init_subscriptions();
    pg = postgres(env.POSTGRES_URL);
    db = drizzle(pg, {
      schema: { subscriptions }
    });
  }
});

export {
  pg,
  db,
  init_client
};
