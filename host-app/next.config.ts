import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config: { plugins: NextFederationPlugin[]; },options: { isServer: any; } ){
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          'remote_product': `remote_product@http://localhost:3001/_next/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          'remote_product_types': `remote_product@http://localhost:3001/_next/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          'remote_basket': `remote_basket@http://localhost:3002/remoteEntry.js`,
          'remote_basket_types': `remote_basket@http://localhost:3002/remoteEntry.js`,
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