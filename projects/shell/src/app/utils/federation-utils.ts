type Scope = unknown;
type Factory = () => any;

type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

const moduleMap = {};

function loadRemoteEntry(remoteEntry: string): Promise<void> {
  return new Promise<any>((resolve, reject) => {
    // @ts-ignore
    if (moduleMap[remoteEntry]) {
      resolve(undefined);
      return;
    }

    const script = document.createElement('script');
    script.src = remoteEntry;

    script.onerror = reject;

    script.onload = () => {
      // @ts-ignore
      moduleMap[remoteEntry] = true;
      resolve(undefined); // window is the global namespace
    };

    document.body.append(script);
  });
}

async function lookupExposedModule<T>(remoteName: string, exposedModule: string): Promise<T> {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  debugger
  console.log('lookupExposedModule', remoteName, exposedModule)
  await __webpack_init_sharing__('default');
  // @ts-ignore
  const container = window[remoteName] as Container; // or get the container somewhere else
  // Initialize the container, it may provide shared modules

  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(exposedModule);
  const Module = factory();
  return Module as T;
}

export type LoadRemoteModuleOptions = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};

export async function loadRemoteModule(options: LoadRemoteModuleOptions): Promise<any> {
  await loadRemoteEntry(options.remoteEntry);
  return await lookupExposedModule<any>(options.remoteName, options.exposedModule);
}
