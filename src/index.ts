import express from "express";
import { routerMiddleware } from "@marko/run-adapter-node/middleware";

const { PORT = 3000 } = process.env;

express()
  .use(routerMiddleware())
  .listen(PORT, () => {
    console.log(`Address: http://localhost:${PORT}`);
  });
