
# 命令行交互
    import inquirer from "inquirer";
    const r = await inquirer.prompt([
        {
            type: "input",
            name: "packageName", message: "set package name",
            validate(val) {
                if (val) return true;
                return "Please enter package name";
            },
            choices: [
                {
                    name: '77'
                }
            ],
        },
    ]);
# 指定脚本运行环境
    #!/usr/bin/env node

# 安装依赖
    execa("yarn",{tcwd: '路径', stdio: "inherit"});
# 切换源
    npm config set registry http://registry.npm.taobao.org/
    npm config set registry https://registry.npmjs.org/
# 登录npm
    npm login
# 发布
    npm publish --registry https://registry.npmjs.org
# 设置那些文件发布上去
    "files": ["bin" "package.json"]
# 删除发布的npm包
    npm unpublish--force --registry https://registry.npmjs.org

# yarn常用操作
    yarn add name -save/-dev
    yarn remove name -save/-dev

    yarn global add name
    yarn global <add/bin/list/remove/upgrade>
