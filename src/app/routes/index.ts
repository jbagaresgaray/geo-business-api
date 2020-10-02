/*jshint camelcase: false */

"use strict";
// ======================== ROUTING ============================ //
import { getAllBusiness } from "./routing/users";

export const mainRoute = (app: any, config: any, _middleware: any) => {
  console.log("ROUTES: ", config.api_version);

  app.route("/").get((_req: any, res: any) => {
    res.render("index");
  });

  app
    // tslint:disable-next-line: prefer-template
    .route(config.api_version + "/business")
    .get(getAllBusiness);
};
