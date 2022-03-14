#!/usr/bin/env node

"use strict";

const cp = require("child_process");
const { argv } = require("process");

const isWin32 = process.platform === "win32";
const args = argv.slice(2);

const spawn = (command, args, options = {}) => {
  const cmd = isWin32 ? "cmd" : command;

  const cmdArgs = isWin32 ? ["/c"].concat(command, args) : args;

  return cp.spawn(cmd, cmdArgs, options);
};

const child = spawn("npx", ["stage", "init", ...args], {
  stdio: "inherit",
});

child.on("error", (err) => {
  console.error("command failed: ", err);
  process.exit(1);
});

child.on("exit", (err) => {
  console.log("command exited: ", err);
  process.exit(err);
});
