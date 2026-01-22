module.exports = ({ env }) => ({
  plugins: [
    {
      redirects: {
        enabled: true,
      },
    },
  ],
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("AWS_BUCKET_URL"),
        rootPath: env("AWS_FOLDER"),
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
    },
  },
  graphql: {
    config: {
      playgroundAlways: env.bool("GRAPHQL_PLAYGROUND", false),
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: true,
      depthLimit: 20,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: env.bool("GRAPHQL_INTROSPECTION", false),
      },
    },
  },
});
