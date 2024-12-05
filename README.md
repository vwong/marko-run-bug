This repo reproduces the inability to use `@marko/run` versions 0.5.0+ with Express.

Running both `npm run dev` and `npm run dev:express` works as expected. In both cases, viewing http://localhost:3000 works.

But try upgrading to any version of `@marko/run` 0.5.0 and above (tested as recently as 0.5.5)
```
npm i -D @marko/run@latest
```

`npm run dev` continues to work, but now on http://localhost:5173 instead (presumably due to Vite upgrades).

When running `npm run dev:express`, http://localhost:5173 returns 404 with an empty body.

Node.js v22.11.0
