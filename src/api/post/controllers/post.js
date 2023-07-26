"use strict";

/**
 * post controller
 *
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", {
  async create(ctx) {
    ctx.query = { ...ctx.query, user: ctx.state.user.id };
    var { id } = ctx.state.user;
    const response = await super.create(ctx);
    const updatedResponse = await strapi.entityService.update(
      "api::post.post",
      response.data.id,
      { data: { user: id } }
    );
    return updatedResponse;
  },

  async find(ctx) {
    ctx.query = { ...ctx.query, user: ctx.state.user.id };

    var { id } = ctx.state.user;
    ctx.query.filters = {
      ...(ctx.query.filters || {}),
      user: id,
    };

    return super.find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user.id;

    const entry = await strapi.db.query("api::post.post").findOne({
      where: { user: user, id: id },
    });

    return entry;
  },
});
