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

// src/functions/getRanking.ts
import { inArray } from "drizzle-orm";
async function getRanking() {
  const ranking = await redis.zrevrange("referral:ranking", 0, 2, "WITHSCORES");
  const subscriberIdAndScore = {};
  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1]);
  }
  const subscribers = await db.select().from(subscriptions).where(inArray(subscriptions.id, Object.keys(subscriberIdAndScore)));
  const rankingWithScore = subscribers.map((sub) => {
    return {
      id: sub.id,
      name: sub.name,
      score: subscriberIdAndScore[sub.id]
    };
  }).sort((sub1, sub2) => {
    return sub2.score - sub1.score;
  });
  return { rankingWithScore };
}
var init_getRanking = __esm({
  "src/functions/getRanking.ts"() {
    init_client();
    init_subscriptions();
    init_client2();
  }
});

export {
  getRanking,
  init_getRanking
};
