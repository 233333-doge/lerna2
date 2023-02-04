## 1.初始化 lerna 项目

```
lerna init
lerna notice cli v4.0.0
lerna info Initializing Git repository 创建git仓库
lerna info Createing package.json 创建
lerna info Creating lerna.json 创建
lerna info Creating packages directory 创建packages目录

```
## 调试源码
_ 一遍调试源码，一遍实现 lerna

+ 在cli.js里面打断点
+ 生成调试文件

```js
info cli using local version of lerna
lerna notice cli v6.4.1
@lerna/add
@lerna/bootstrap
@lerna/changed
@lerna/clean
@lerna/create
@lerna/diff
@lerna/exec
@lerna/import
@lerna/info
@lerna/init
@lerna/link
@lerna/list
@lerna/publish
@lerna/run
@lerna/version
@lerna/child-process
@lerna/cli
@lerna/command
@lerna/conventional-commits
@lerna/filter-options
@lerna/global-options
lerna
@lerna/otplease
@lerna/package-graph
@lerna/package
@lerna/project
@lerna/prompt
@lerna/validation-error
@lerna/check-working-tree
@lerna/collect-uncommitted
@lerna/collect-updates
@lerna/create-symlink
@lerna/describe-ref
@lerna/filter-packages
@lerna/get-npm-exec-opts
@lerna/get-packed
@lerna/github-client
@lerna/gitlab-client
@lerna/has-npm-version
@lerna/listable
@lerna/log-packed
@lerna/map-to-registry
@lerna/npm-conf
@lerna/npm-dist-tag
@lerna/npm-install
@lerna/npm-publish
@lerna/npm-run-script
@lerna/output
@lerna/pack-directory
@lerna/prerelease-id-from-version
@lerna/profiler
@lerna/pulse-till-done
@lerna/query-graph
@lerna/resolve-symlink
@lerna/rimraf-dir
@lerna/run-lifecycle
@lerna/run-topologically
@lerna/symlink-binary
@lerna/symlink-dependencies
@lerna/temp-write
@lerna/timer
@lerna/write-log-file
lerna success found 62 packages
```

