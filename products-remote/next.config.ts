import { NextConfig } from 'next';
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote_product',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProductList': './src/components/ProductListWithProvider.tsx',
        },
        shared: {
          '@reduxjs/toolkit': {
            singleton: true,
            requiredVersion: false,
          },
          'react-redux': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
};

export default nextConfig;