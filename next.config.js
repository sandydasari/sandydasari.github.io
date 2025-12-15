/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: 'export',

  // Turbopack config (empty to silence the error - Turbopack is default in Next.js 16)
  turbopack: {},

  // Webpack config for Transformers.js compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Polyfill Node.js modules for browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        module: false,
        perf_hooks: false,
      };

      // Prevent server-only packages from being bundled
      config.resolve.alias = {
        ...config.resolve.alias,
        'sharp$': false,
        'onnxruntime-node$': false,
      };
    }
    return config;
  },
}

module.exports = nextConfig