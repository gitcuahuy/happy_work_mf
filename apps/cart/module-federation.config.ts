import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': 'apps/cart/src/app/remote-entry/entry.module.ts',
  },
  remotes: [
    ['shell', "shell@http://localhost:4200/remoteEntry.js"]
  ],

};

export default config;
