import { object, z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getSubscriberRankingPosition } from "../functions/getSubscriberRankingPosition";

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/subscribers/:subscriberId/ranking/position",
    {
      schema: {
        summary: "Get subscriber ranking position ",
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          200: object({
            position: z.number().nullish(),
          }),
        },
      },
    },
    async (request) => {
      const { subscriberId } = request.params;

      const { position } = await getSubscriberRankingPosition({ subscriberId });

      return { position };
    }
  );
};
