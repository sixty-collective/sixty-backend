module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
    config: {},
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  transformer: {
    enabled: false,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      apolloServer: {
        tracing: false,
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: "aws-s3",
  //     providerOptions: {
  //       accessKeyId: env("AWS_ACCESS_KEY_ID"),
  //       secretAccessKey: env("AWS_ACCESS_SECRET"),
  //       region: env("AWS_REGION"),
  //       params: {
  //         ACL: env("AWS_ACL", "public-read"),
  //         signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
  //         Bucket: env("AWS_BUCKET"),
  //       },
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },
});
