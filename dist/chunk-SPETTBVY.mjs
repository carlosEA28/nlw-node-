import {
  init_client,
  redis
} from "./chunk-TKSZU5FP.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/functions/getSubscriberInvitesCount.ts
async function getSubscriberInvitesCount({
  subscriberId
}) {
  const count = await redis.zscore("referral:ranking", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}
var init_getSubscriberInvitesCount = __esm({
  "src/functions/getSubscriberInvitesCount.ts"() {
    init_client();
  }
});

export {
  getSubscriberInvitesCount,
  init_getSubscriberInvitesCount
};
