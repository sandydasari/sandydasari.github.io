/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: 'export',

  // Turbopack config - keep empty for default behavior
  turbopack: {},

  // Disable static optimization for pages using dynamic imports
  experimental: {
    optimizePackageImports: ['@xenova/transformers'],
  },

  // Webpack config for Transformers.js compatibility
  webpack: (config, { isServer }) => {
    // Common fallbacks for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      module: false,
      perf_hooks: false,
    };

    // Exclude server-only packages from being bundled
    config.resolve.alias = {
      ...config.resolve.alias,
      'sharp$': false,
      'onnxruntime-node$': false,
    };

    // Handle WebAssembly and workers for Transformers.js
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    });

    // Mark certain packages as external to prevent bundling issues
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        { sharp: 'commonjs sharp' },
        { 'onnxruntime-node': 'commonjs onnxruntime-node' },
      ];
    }

    return config;
  },
}

module.exports = nextConfig