module.exports = [
  // ...
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
      exposeHeaders: ["Authorization"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
  // ...

  "strapi::errors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
