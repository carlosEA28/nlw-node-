import { object, z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberInviteClicks } from "../functions/getSubscriberInviteClicks";
import { getSubscriberInvitesCount } from "../functions/getSubscriberInvitesCount";

export const getSubscriberInvitesCountRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invites count ",
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: object({
            count: z.number(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { count } = await getSubscriberInvitesCount({ subscriberId });

      return { count };
    }
  );
};
