import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // handle root file- index.js
      build.onResolve({filter:/(^index\.js$)/},(args:any)=>{
        return { path: 'index.js', namespace: 'a' };
      })
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        // handle relative paths
        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            namespace: 'a',
            path: new URL(args.path, 'https://unpkg.com'+args.resolveDir + '/').href,
          };
        }
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });   
            // Handle main file of a module
          build.onResolve({ filter: /.*/ }, async (args: any) => {
            return {
              namespace: 'a',
              path: `https://unpkg.com/${args.path}`,
            };
          }); 
    },
  };
};
