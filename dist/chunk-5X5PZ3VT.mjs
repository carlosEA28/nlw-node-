import {
  getSubscriberInvitesCount,
  init_getSubscriberInvitesCount
} from "./chunk-SPETTBVY.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/routes/getSubscriberInvitesCountRoute.ts
import { object, z } from "zod";
var getSubscriberInvitesCountRoute;
var init_getSubscriberInvitesCountRoute = __esm({
  "src/routes/getSubscriberInvitesCountRoute.ts"() {
    init_getSubscriberInvitesCount();
    getSubscriberInvitesCountRoute = async (app) => {
      app.get(
        "/subscribers/:subscriberId/ranking/count",
        {
          schema: {
            summary: "Get subscriber invites count ",
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
          const { count } = await getSubscriberInvitesCount({ subscriberId });
          return { count };
        }
      );
    };
  }
});

export {
  getSubscriberInvitesCountRoute,
  init_getSubscriberInvitesCountRoute
};
