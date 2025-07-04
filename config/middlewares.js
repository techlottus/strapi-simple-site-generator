module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "apollo-server-landing-page.cdn.apollographql.com"],
          "script-src": ["'self'", "'unsafe-inline'", "apollo-server-landing-page.cdn.apollographql.com"],
          "style-src": ["'self'", "'unsafe-inline'", "apollo-server-landing-page.cdn.apollographql.com"],
          "frame-src": ["sandbox.embed.apollographql.com"],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            "apollo-server-landing-page.cdn.apollographql.com"
            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`, // change here
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`, // change here
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb',
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
