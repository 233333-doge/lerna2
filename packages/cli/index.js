const yargs = require("yargs/yargs");
function lernaCLI() {
  const cli = yargs();
  // 所有命令的全局选项
  const globalOptions = {
    logLevel: {
      type: "string",
      describe: "日志的级别",
      defaultDescription: "info",
      alas: "L",
    },
  };

  const globalKeys = Object.keys(globalOptions).concat(["help", "version"]);
  // console.log(process);
  return cli
    .option(globalOptions)
    .group(globalKeys, "Global Options:")
    .usage(`Usage: $0 <command> [options]`) //命令格式 如：lerna为$0 create为<command> doma为<option>
    .demandCommand(1, "至少需要一个命令") //为输入命令的时候会报错，”至少需要一个命令“
    .strict() //true严格模式，输入的命令不认识，会报ERR！ lerna Unknow command ‘XX’
    .recommendCommands() //如果你写错了，它会帮你提建议报ERR
    .fail((msg, error) => {
      console.log(msg), console.log(error);
    }) //报错处理
    .alias("h", "help")
    .alias("v", "version")
    .epilogue(
      `
  When a command fails, all logs are written to lerna-debug.log in the current working directory.

  For more information, check out the docs at https://lerna.js.org/docs/introduction`
    );
}
module.exports = lernaCLI;
