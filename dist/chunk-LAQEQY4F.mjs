import {
  getRanking,
  init_getRanking
} from "./chunk-ZKNBJZ57.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/routes/getRankingRoute.ts
import z, { object } from "zod";
var getRankingRoute;
var init_getRankingRoute = __esm({
  "src/routes/getRankingRoute.ts"() {
    init_getRanking();
    getRankingRoute = async (app) => {
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
                    score: z.number()
                  })
                )
              })
            }
          }
        },
        async (request) => {
          const { rankingWithScore } = await getRanking();
          return { ranking: rankingWithScore };
        }
      );
    };
  }
});

export {
  getRankingRoute,
  init_getRankingRoute
};
