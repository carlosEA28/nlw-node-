import {
  init_client,
  redis
} from "./chunk-TKSZU5FP.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/functions/getSubscriberInviteClicks.ts
async function getSubscriberInviteClicks({
  subscriberId
}) {
  const count = await redis.hget("referral:access-count", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}
var init_getSubscriberInviteClicks = __esm({
  "src/functions/getSubscriberInviteClicks.ts"() {
    init_client();
  }
});

export {
  getSubscriberInviteClicks,
  init_getSubscriberInviteClicks
};
