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
    {
      method: "GET",
      path: "/posts/count",
      handler: "post.count",
      config: {
        policies: ["global::is-authenticated", "is-admin"],
      },
    },
    {
      method: "PUT",
      path: "/posts/:id",
      handler: "post.update",
      config: {
        policies: ["global::is-authenticated", "is-admin"],
      },
    },
    {
      method: "DELETE",
      path: "/posts/:id",
      handler: "post.delete",
      config: {
        policies: ["global::is-authenticated", "is-admin"],
      },
    },
  ],
};
