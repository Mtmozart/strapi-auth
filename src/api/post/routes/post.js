"use strict";

/**
 * post router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/posts",
      handler: "post.create",
      config: {
        policies: ["global::is-authenticated", "is-admin"],
      },
    },
    {
      method: "GET",
      path: "/posts",
      handler: "post.find",
      config: {
        policies: ["global::is-authenticated", "is-admin"],
      },
    },
    {
      method: "GET",
      path: "/posts/:id",
      handler: "post.findOne",
      config: {
        policies: ["global::is-authenticated", "is-admin"],
      },
    },
  ],
};
