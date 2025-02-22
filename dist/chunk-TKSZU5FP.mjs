import {
  env,
  init_env
} from "./chunk-2HHFUIXV.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/redis/client.ts
import { Redis } from "ioredis";
var redis;
var init_client = __esm({
  "src/redis/client.ts"() {
    init_env();
    redis = new Redis(env.REDIS_URL);
  }
});

export {
  redis,
  init_client
};
