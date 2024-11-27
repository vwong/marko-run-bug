This repo reproduces the inability to use `@marko/run`.

When running `npm run build`, I get:
```
~/marko-run-bug% npm run build                                                                                                           9:55PM

> debug@1.0.0 build
> NODE_ENV=production marko-run build

x Build failed in 34ms
node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^

[vite:load-fallback] Could not load /Users/voon.wong/marko-run-bug/undefined?marko-server-entry (imported by __marko-run__router.js): ENOENT: no
 such file or directory, open '/Users/voon.wong/marko-run-bug/undefined?marko-server-entry'
    at async open (node:internal/fs/promises:638:25)
    at async Object.readFile (node:internal/fs/promises:1238:14)
    at async Object.load (file:///Users/voon.wong/marko-run-bug/node_modules/vite/dist/node/chunks/dep-BcnkIxro.js:50203:25)
    at async PluginDriver.hookFirstAndGetPlugin (file:///Users/voon.wong/marko-run-bug/node_modules/rollup/dist/es/shared/node-entry.js:20712:28
)
    at async file:///Users/voon.wong/marko-run-bug/node_modules/rollup/dist/es/shared/node-entry.js:19832:33
    at async Queue.work (file:///Users/voon.wong/marko-run-bug/node_modules/rollup/dist/es/shared/node-entry.js:20922:32) {
  errno: -2,
  code: 'PLUGIN_ERROR',
  syscall: 'open',
  path: '/Users/voon.wong/marko-run-bug/undefined?marko-server-entry',
  pluginCode: 'ENOENT',
  plugin: 'vite:load-fallback',
  hook: 'load',
  watchFiles: [
    '/Users/voon.wong/marko-run-bug/node_modules/@marko/run/dist/adapter/default-entry.mjs',
    '/Users/voon.wong/marko-run-bug/node_modules/@marko/run/dist/adapter/middleware.js'
  ]
}

Node.js v22.11.0
```

A similar error is found when trying to renu `npm run dev` too.

Downgrading to an earlier version of `@marko/run` such as 0.4.12 works.
