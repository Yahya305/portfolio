/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Matches any domain
            },
        ],dangerouslyAllowSVG:true
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true, // Use `true` for a permanent redirect (HTTP 301), or `false` for a temporary redirect (HTTP 302)
          },
        ];
      },
};

export default nextConfig;
