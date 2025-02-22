import {
  init_subscribeToEvent,
  subscribeToEnvent
} from "./chunk-NGVZXK2G.mjs";
import {
  __esm
} from "./chunk-X6BYQHVC.mjs";

// src/routes/subscribeToEventRoute.ts
import { z } from "zod";
var subscribeToEventRoute;
var init_subscribeToEventRoute = __esm({
  "src/routes/subscribeToEventRoute.ts"() {
    init_subscribeToEvent();
    subscribeToEventRoute = async (app) => {
      app.post(
        "/subscriptions",
        {
          schema: {
            tags: ["subscription"],
            summary: "Subscribes someone to the event",
            body: z.object({
              name: z.string(),
              email: z.string().email(),
              referrer: z.string().nullish()
            }),
            response: {
              201: z.object({
                subscriberId: z.string()
              })
            }
          }
        },
        async (request, reply) => {
          const { name, email, referrer } = request.body;
          const { subscriberId } = await subscribeToEnvent({
            name,
            email,
            referrerId: referrer
          });
          return reply.status(201).send({
            subscriberId
          });
        }
      );
    };
  }
});

export {
  subscribeToEventRoute,
  init_subscribeToEventRoute
};
