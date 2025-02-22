import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/drizzle/entity/subscriptions.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
var subscriptions;
var init_subscriptions = __esm({
  "src/drizzle/entity/subscriptions.ts"() {
    subscriptions = pgTable("subscriptions", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: text("name").notNull(),
      email: text("email").unique(),
      createdAt: timestamp("created_at").notNull().defaultNow()
    });
  }
});

export {
  subscriptions,
  init_subscriptions
};
