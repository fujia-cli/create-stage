#!/usr/bin/env node

"use strict";

// const cp = require("child_process");
// const { argv } = require("process");
// const stage = require("@fujia/cli-core");

// const isWin32 = process.platform === "win32";
// const args = argv.slice(2);

// const spawn = (command, args, options = {}) => {
//   const cmd = isWin32 ? "cmd" : command;

//   const cmdArgs = isWin32 ? ["/c"].concat(command, args) : args;

//   return cp.spawn(cmd, cmdArgs, options);
// };

// spawn()
require("@fujia/cli-core/bin");
