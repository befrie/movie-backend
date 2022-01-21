module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "09cd6bf01ba646170ea4a7a45decb9e7"),
  },
});
