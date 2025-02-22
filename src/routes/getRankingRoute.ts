import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getRanking } from "../functions/getRanking";
import z, { object } from "zod";

export const getRankingRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/ranking",
    {
      schema: {
        summary: "Get ranking ",
        response: {
          200: object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async (request) => {
      const { rankingWithScore } = await getRanking();

      return { ranking: rankingWithScore };
    }
  );
};
