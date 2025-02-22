import {
  db,
  init_client
} from "./chunk-SS43GD3B.mjs";
import {
  init_subscriptions,
  subscriptions
} from "./chunk-MIHW5TJN.mjs";
import {
  init_client as init_client2,
  redis
} from "./chunk-TKSZU5FP.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/functions/subscribeToEvent.ts
import { eq } from "drizzle-orm";
async function subscribeToEnvent({
  name,
  email,
  referrerId
}) {
  const subscribers = await db.select().from(subscriptions).where(eq(subscriptions.email, email));
  if (subscribers.length > 0) {
    return { subscriberId: subscribers[0].id };
  }
  const result = await db.insert(subscriptions).values({
    name,
    email
  }).returning();
  if (referrerId) {
    await redis.zincrby("referral:ranking", 1, referrerId);
  }
  const subscriber = result[0];
  return {
    subscriberId: subscriber.id
  };
}
var init_subscribeToEvent = __esm({
  "src/functions/subscribeToEvent.ts"() {
    init_client();
    init_subscriptions();
    init_client2();
  }
});

export {
  subscribeToEnvent,
  init_subscribeToEvent
};
