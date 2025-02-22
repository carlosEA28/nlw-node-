import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/env.ts
import { z } from "zod";
var envSchema, env;
var init_env = __esm({
  "src/env.ts"() {
    envSchema = z.object({
      PORT: z.coerce.number().default(3333),
      POSTGRES_URL: z.string().url(),
      REDIS_URL: z.string().url(),
      WEB_URL: z.string().url()
    });
    env = envSchema.parse(process.env);
  }
});

export {
  env,
  init_env
};
