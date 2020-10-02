const shell = require("shelljs");

shell.mkdir("-p", "dist/app");
// shell.cp('-R', '.env', 'dist/.env');
shell.cp("-R", "src/app/views", "dist/app");
shell.cp("-R", "src/docs", "dist");
