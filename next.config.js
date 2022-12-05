/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    BACKEND_URL: "https://wild-puce-hippopotamus-hose.cyclic.app",
  },
};
