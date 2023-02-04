const path = require("path");
const fs = require("fs-extra");
const childProcess = require("child_process");

class InitCommand {
  constructor(options) {
    this.options = options;
    this.rootPath = path.resolve();
  }
  async execute() {
    console.info("", "Initializing Git repository");
    // 初始化git仓库
    await childProcess.exec("git init", function (error, stdout, stderr) {
      if (error) {
        console.error("error: " + error);
        return;
      }
      console.log("stdout: " + stdout);
      console.log("stderr: " + typeof stderr);
    });

    await this.ensurePackageJSON();
    await this.ensureLernaConfig();
    await this.ensurePackagesDir();
    console.info("Initialized Lerna files");
  }
  async ensureLernaConfig() {
    console.info("创建learn.json");
    await fs.writeJson(path.join(this.rootPath, "lerna.json"), {
      useWorkspaces: true,
      version: "0.0.0",
    });
  }
  async ensurePackagesDir() {
    console.info("创建packages文件夹");
    await fs.mkdirp(path.join(this.rootPath, "packages"));
  }
  async ensurePackageJSON() {
    console.info("创建package.json");
    await fs.writeJson(path.join(this.rootPath, "package.json"), {
      name: "root",
      private: true,
      devDependencies: {
        lerna: "^6.4.1",
      },
    });
  }
}
function factory(argv) {
  new InitCommand(argv).execute();
}
module.exports = factory;
