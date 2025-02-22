import {
  init_client,
  redis
} from "./chunk-TKSZU5FP.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/functions/getSubscriberRankingPosition.ts
async function getSubscriberRankingPosition({
  subscriberId
}) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId);
  if (rank == null) {
    return { posistion: null };
  }
  return { position: rank + 1 };
}
var init_getSubscriberRankingPosition = __esm({
  "src/functions/getSubscriberRankingPosition.ts"() {
    init_client();
  }
});

export {
  getSubscriberRankingPosition,
  init_getSubscriberRankingPosition
};
