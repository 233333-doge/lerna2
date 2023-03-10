const path = require("path");
const fs = require("fs-extra");
const initPackageJson = require("pify")(require("init-package-json"));

class CreateCommand {
  constructor(options) {
    this.options = options;
    this.rootPath = path.resolve();
  }
  async execute() {
    console.Console("执行create9");
    //name=xxx registry=私服地址
    const { name, registry } = this.options;
    this.targetDir = path.join(this.rootPath, `packages/${name}`);
    this.libDir = path.join(this.targetDir, "lib");
    this.testDir = path.join(this.targetDir, `__test__`);
    await fs.mkdirp(this.libDir);
    await fs.mkdirp(this.testDir);
    //init-package-json可以弹出选项让我们填写package.json信息
    //pify 可以把一个回调方式改为promise方式
    await initPackageJson(this.targetDir, "");
  }
  async initPackageJson() {
    //
  }
}
function factory(argv) {
  new CreateCommand(argv).execute();
}
module.exports = factory;
