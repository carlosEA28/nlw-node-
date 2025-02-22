import { redis } from "../redis/client";

interface accessInviteLinkParams {
  subscriberId: string;
}

export async function accessInviteLink({
  subscriberId,
}: accessInviteLinkParams) {
  await redis.hincrby("referral:acces-count", subscriberId, 1);
}
