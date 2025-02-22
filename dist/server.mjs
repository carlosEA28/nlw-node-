import {
  accessInviteLinkRoute,
  init_accessInviteLinkRoute
} from "./chunk-FPTRMBLZ.mjs";
import {
  getRankingRoute,
  init_getRankingRoute
} from "./chunk-LAQEQY4F.mjs";
import {
  getSubscriberInviteClicksRoute,
  init_getSubscriberInviteClicksRoute
} from "./chunk-PGAR7LNY.mjs";
import {
  getSubscriberInvitesCountRoute,
  init_getSubscriberInvitesCountRoute
} from "./chunk-5X5PZ3VT.mjs";
import {
  getSubscriberRankingPositionRoute,
  init_getSubscriberRankingPositionRoute
} from "./chunk-SC4SHPZG.mjs";
import {
  init_subscribeToEventRoute,
  subscribeToEventRoute
} from "./chunk-NLQSRAHC.mjs";
import "./chunk-NGVZXK2G.mjs";
import "./chunk-KASPIXFO.mjs";
import "./chunk-ZKNBJZ57.mjs";
import "./chunk-SS43GD3B.mjs";
import "./chunk-MIHW5TJN.mjs";
import "./chunk-RU46363F.mjs";
import "./chunk-SPETTBVY.mjs";
import "./chunk-ZB2YOFQW.mjs";
import "./chunk-TKSZU5FP.mjs";
import {
  env,
  init_env
} from "./chunk-2HHFUIXV.mjs";
import {
  __commonJS
} from "./chunk-X6BYQHVC.mjs";

// src/server.ts
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
var require_server = __commonJS({
  "src/server.ts"() {
    init_subscribeToEventRoute();
    init_env();
    init_accessInviteLinkRoute();
    init_getSubscriberInviteClicksRoute();
    init_getSubscriberInvitesCountRoute();
    init_getSubscriberRankingPositionRoute();
    init_getRankingRoute();
    var app = fastify().withTypeProvider();
    app.setSerializerCompiler(serializerCompiler);
    app.setValidatorCompiler(validatorCompiler);
    app.register(fastifyCors, {
      origin: true
    });
    app.register(fastifySwagger, {
      openapi: {
        info: {
          title: "NLW Connect",
          version: "0.0.1"
        }
      },
      transform: jsonSchemaTransform
    });
    app.register(fastifySwaggerUi, {
      routePrefix: "/docs"
    });
    app.register(subscribeToEventRoute);
    app.register(accessInviteLinkRoute);
    app.register(getSubscriberInviteClicksRoute);
    app.register(getSubscriberInvitesCountRoute);
    app.register(getSubscriberRankingPositionRoute);
    app.register(getRankingRoute);
    app.listen({ port: env.PORT }).then(() => {
      console.log("HTTP server running");
    });
  }
});
export default require_server();
