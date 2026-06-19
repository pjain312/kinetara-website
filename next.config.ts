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
      {
        source: '/team',
        destination: '/specialized-team',
        permanent: true,
      },
      {
        source: '/physiotherapist-palak-jain-pelvic-floor-spine',
        destination: '/physiotherapist-palak-jain-spine-ortho',
        permanent: true,
      },
      // Old URLs only (/physiotherapy-kalkaji) — must not match /physiotherapy-clinic-*
      {
        source: '/physiotherapy-:location((?!clinic-).*)',
        destination: '/physiotherapy-clinic-:location',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/physiotherapy-clinic-:location',
        destination: '/physiotherapy/:location',
      },
      {
        source: '/physiotherapist-palak-jain-spine-ortho',
        destination: '/physiotherapist/palak-jain',
      },
      {
        source: '/physiotherapist-iqra-siddiqui-dry-needling',
        destination: '/physiotherapist/iqra-siddiqui',
      },
    ];
  },
};

module.exports = nextConfig;
