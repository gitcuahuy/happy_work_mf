import { ModuleFederationConfig } from '@nx/webpack';
const coreLibraries = new Set([
  // 'react',
  // 'react-dom',
  // 'react-router-dom',
  // A workspace library for a publish/subscribe
  // system of communication.
  'shared-common',
]);

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['shop', 'cart'],
  // Share core libraries, and avoid everything else
  // shared: (libraryName, defaultConfig) => {
  //   if (coreLibraries.has(libraryName)) {
  //     return defaultConfig;
  //   }

  //   // Returning false means the library is not shared.
  //   return false;
  // },
};

export default config;
