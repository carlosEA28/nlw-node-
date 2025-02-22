import {
  getSubscriberInviteClicks,
  init_getSubscriberInviteClicks
} from "./chunk-RU46363F.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/routes/getSubscriberInviteClicksRoute.ts
import { object, z } from "zod";
var getSubscriberInviteClicksRoute;
var init_getSubscriberInviteClicksRoute = __esm({
  "src/routes/getSubscriberInviteClicksRoute.ts"() {
    init_getSubscriberInviteClicks();
    getSubscriberInviteClicksRoute = async (app) => {
      app.get(
        "/subscribers/:subscriberId/ranking/clicks",
        {
          schema: {
            summary: "Get subscriber ranking invite clicks count ",
            params: z.object({
              subscriberId: z.string()
            }),
            response: {
              302: object({
                count: z.number()
              })
            }
          }
        },
        async (request) => {
          const { subscriberId } = request.params;
          const { count } = await getSubscriberInviteClicks({ subscriberId });
          return { count };
        }
      );
    };
  }
});

export {
  getSubscriberInviteClicksRoute,
  init_getSubscriberInviteClicksRoute
};
