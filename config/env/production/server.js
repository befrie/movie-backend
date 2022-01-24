module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: 1337,
  admin: {
    auth: env("ADMIN_JWT_SECRET"),
  },
});
