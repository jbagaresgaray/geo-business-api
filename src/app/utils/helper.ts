"use strict";

const helper = (server: any, config: any, _log: any) => {
  const port = process.env.PORT || 3000;
  server.listen(port, "0.0.0.0", (errs: any) => {
    if (errs instanceof Error) {
      console.log(
        "ENVIRONMENT: ",
        config.env,
        " Unable to start Server",
        config.port
      );
    } else {
      console.log(
        "ENVIRONMENT: ",
        config.env,
        " Server started at PORT: ",
        config.port,
        " Using API VERSION: ",
        config.api_version
      );
    }
  });
};

export { helper };
