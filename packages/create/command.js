exports.command = "create <name>";
exports.describe = "创建一个新的lerna管理的包";
exports.builder = (yargs) => {
  yargs
    .positional("name", {
      type: "string",
      describe: "包名",
    })
    .options({
      registry: {
        group: "Command Groups:",
        describe: "配置包的发布的仓库地址",
        type: "string",
      },
    });
};
// init 真正的处理逻辑
exports.handler = (argv) => {
  console.log("执行init命令", argv);
  return require(".")(argv);
};
