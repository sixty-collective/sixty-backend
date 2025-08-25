module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  'strapi-v5-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  "strapi-import-export": {
    enabled: true,
    config: {
      authorizedExports: ["api::profile.profile"],
      authorizedImports: ["api::profile.profile", "api::descriptor.descriptor", "api::discipline.discipline"]
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
      v4CompatibilityMode: true,
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        }
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
