import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { env } from "../env";
import { accessInviteLink } from "../functions/accessInviteLink";
import { redis } from "../redis/client";

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        tags: ["referral"],
        summary: "Access invite link and redirect user",
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
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
