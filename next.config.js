/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: 'export',

  // Turbopack config - keep empty for default behavior
  turbopack: {},

  // Webpack config for Transformers.js compatibility (fallback for webpack mode)
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