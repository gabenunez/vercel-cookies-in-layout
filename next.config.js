/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/:path",
        has: [
          {
            type: "host",
            value: "10.163.224.125",
          },
        ],
        destination: "https://www.zinus.com/:path",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/stocks",
        destination: "https://stocks-vs-trends.vercel.app/",
      },
    ];
  },
};
