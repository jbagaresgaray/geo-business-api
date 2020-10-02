"use strict";

const helper = (server: any, config: any, _log: any) => {
  server.listen(process.env.APP_PORT || config.port || 3000, (errs: any) => {
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
