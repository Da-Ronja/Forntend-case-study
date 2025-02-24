import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config: { plugins: NextFederationPlugin[]; },options: { isServer: any; } ){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote_product',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./ProductList": './src/components/ProductList.tsx',
        },
        shared: {},
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    )
    return config
  }
};

export default nextConfig;