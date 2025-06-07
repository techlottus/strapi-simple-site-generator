module.exports = ({ env }) => ({
  plugins: [
    {
      redirects: {
        enabled: true
      }
    }
  ],
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: `${env('AWS_BUCKET')}/${env('AWS_FOLDER')}`,
        },
      },
    },
  },
  'editorjs': {
    enabled: true,
    resolve: './src/plugins/strapi-editorjs'
  },
  "multi-site-vercel-deploy": {
    enabled: true,
    config: {
      sites: [
        {
          deployHook: env('PORTALVERSE_VERCEL_DEPLOY_HOOK'),
          apiToken: env('PORTALVERSE_VERCEL_DEPLOY_API_TOKEN'),
          appFilter: env('PORTALVERSE_VERCEL_DEPLOY_APP_FILTER'),
          teamFilter: env('PORTALVERSE_VERCEL_DEPLOY_TEAM_FILTER'),
          displayName: "Portalverse",
        },
        {
          deployHook: env('EVENTS_VERCEL_DEPLOY_HOOK'),
          apiToken: env('EVENTS_VERCEL_DEPLOY_API_TOKEN'),
          appFilter: env('EVENTS_VERCEL_DEPLOY_APP_FILTER'),
          teamFilter: env('EVENTS_VERCEL_DEPLOY_TEAM_FILTER'),
          displayName: "Eventos",
        },
      ],
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    }
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
});