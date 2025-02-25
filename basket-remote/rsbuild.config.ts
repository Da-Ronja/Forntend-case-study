import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies }  from './package.json';

export default defineConfig({
  server: {
    port: 3002
  },
  moduleFederation: {
    options: {
     name: 'remote_basket',
      exposes: {
        './Basket': './src/components/Basket.tsx',
        './BasketTypes': './src/types/basket.ts',
      },
      filename: 'remoteEntry.js',
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }
  },
  plugins: [pluginReact()]
});