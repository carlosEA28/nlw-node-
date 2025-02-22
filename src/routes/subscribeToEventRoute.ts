import { z } from "zod";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { subscribeToEnvent } from "../functions/subscribeToEvent";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        tags: ["subscription"],
        summary: "Subscribes someone to the event",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body;

      const { subscriberId } = await subscribeToEnvent({ name, email });

      return reply.status(201).send({
        subscriberId,
      });
    }
  );
};
