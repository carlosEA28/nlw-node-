import {
  accessInviteLink,
  init_accessInviteLink
} from "./chunk-KASPIXFO.mjs";
import {
  env,
  init_env
} from "./chunk-2HHFUIXV.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/routes/accessInviteLinkRoute.ts
import { z } from "zod";
var accessInviteLinkRoute;
var init_accessInviteLinkRoute = __esm({
  "src/routes/accessInviteLinkRoute.ts"() {
    init_env();
    init_accessInviteLink();
    accessInviteLinkRoute = async (app) => {
      app.get(
        "/invites/:subscriberId",
        {
          schema: {
            tags: ["referral"],
            summary: "Access invite link and redirect user",
            params: z.object({
              subscriberId: z.string()
            }),
            response: {
              201: z.object({
                subscriberId: z.string()
              })
            }
          }
        },
        async (request, reply) => {
          const { subscriberId } = request.params;
          await accessInviteLink({ subscriberId });
          const redirectUrl = new URL(env.WEB_URL);
          redirectUrl.searchParams.set("referrer", subscriberId);
          return reply.redirect(redirectUrl.toString(), 302);
        }
      );
    };
  }
});

export {
  accessInviteLinkRoute,
  init_accessInviteLinkRoute
};
