/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['optim.tildacdn.com', 'thb.tildacdn.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
