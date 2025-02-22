import { object, z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberInviteClicks } from "../functions/getSubscriberInviteClicks";

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber ranking invite clicks count ",
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

      const { count } = await getSubscriberInviteClicks({ subscriberId });

      return { count };
    }
  );
};
