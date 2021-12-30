module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '228239bccf2f7bc77d445473ac060cf8'),
  },
});
