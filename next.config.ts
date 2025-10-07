/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kinetaraphysiotherapy.com' }],
        destination: 'https://kinetaraphysiotherapy.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
