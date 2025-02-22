import {
  init_client,
  redis
} from "./chunk-TKSZU5FP.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/functions/accessInviteLink.ts
async function accessInviteLink({
  subscriberId
}) {
  await redis.hincrby("referral:access-count", subscriberId, 1);
}
var init_accessInviteLink = __esm({
  "src/functions/accessInviteLink.ts"() {
    init_client();
  }
});

export {
  accessInviteLink,
  init_accessInviteLink
};
