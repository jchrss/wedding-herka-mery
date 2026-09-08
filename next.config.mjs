/** @type {import('next').NextConfig} */
const nextConfig = {
  // The cover moved onto "/", but links to the old route are already out.
  async redirects() {
    return [
      {
        source: '/invitations',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
