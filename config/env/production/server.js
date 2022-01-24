module.exports = ({ env }) => ({
  admin: {
    auth: env("ADMIN_JWT_SECRET"),
  },
});
