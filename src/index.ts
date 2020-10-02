"use strict";

import dotenv from "dotenv";
// ENVIRONMENTS
dotenv.config();

// LIBRARIES
import bunyan from "bunyan";
import express from "express";
import http from "http";
import * as middleware from "./app/utils/middleware";
import { environment } from "./config/environment";
// CONFIGS
import { helper } from "./app/utils/helper";
import { expressConfig } from "./config/express";
// ROUTES
import { mainRoute } from "./app/routes/index";
import { documentRoute } from "./app/routes/documents";

const app: express.Application = express();
const server = http.createServer(app);
const log = bunyan.createLogger({
  name: "app_name_here"
});

// CONFIGS
helper(server, environment, log);
expressConfig(app, environment);
// ROUTES
mainRoute(app, environment, middleware);
documentRoute(app, middleware);

export default app;
