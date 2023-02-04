// function lerna2() {
//   return "lerna2";
// }
// module.exports = lerna2;

const cli = require("wangfan_cli");
// let cli2 = cli();
// console.log(cli2);
const initCmd = require("wangfan_init/command");
const createCmd = require("wangfan_create/command");
function main(argv) {
  // cli返回的是yargs的实例
  // 配置init命令
  // 解析执行
  return cli().command(initCmd).command(createCmd).parse(argv);
}
module.exports = main;
