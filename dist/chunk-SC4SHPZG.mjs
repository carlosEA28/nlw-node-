import {
  getSubscriberRankingPosition,
  init_getSubscriberRankingPosition
} from "./chunk-ZB2YOFQW.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/routes/getSubscriberRankingPositionRoute.ts
import { object, z } from "zod";
var getSubscriberRankingPositionRoute;
var init_getSubscriberRankingPositionRoute = __esm({
  "src/routes/getSubscriberRankingPositionRoute.ts"() {
    init_getSubscriberRankingPosition();
    getSubscriberRankingPositionRoute = async (app) => {
      app.get(
        "/subscribers/:subscriberId/ranking/position",
        {
          schema: {
            summary: "Get subscriber ranking position ",
            params: z.object({
              subscriberId: z.string()
            }),
            response: {
              200: object({
                position: z.number().nullish()
              })
            }
          }
        },
        async (request) => {
          const { subscriberId } = request.params;
          const { position } = await getSubscriberRankingPosition({ subscriberId });
          return { position };
        }
      );
    };
  }
});

export {
  getSubscriberRankingPositionRoute,
  init_getSubscriberRankingPositionRoute
};
