module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd8a34d40a599a09041e0c251d40fcd20'),
  },
});
