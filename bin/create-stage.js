#!/usr/bin/env node

"use strict";

const cp = require("child_process");
const path = require("path");
const { argv } = require("process");
const { pathExistSync } = require("@fujia/check-path");

const isWin32 = process.platform === "win32";
const args = argv.slice(2);

const spawn = (command, args, options = {}) => {
  const cmd = isWin32 ? "cmd" : command;

  const cmdArgs = isWin32 ? ["/c"].concat(command, args) : args;

  return cp.spawn(cmd, cmdArgs, options);
};

const execFilePath = path.resolve(__dirname, "../node_modules/@fujia/cli-core/bin/index.js");

if (pathExistSync(execFilePath)) {
  cp.execFileSync(execFilePath, ["init", ...args], {
    stdio: "inherit",
  });
}
