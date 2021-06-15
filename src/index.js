#!/usr/bin/env node
import fs from 'fs';
import { join, resolve } from 'path';
import ejs from 'ejs';
import inquirer from "inquirer";
import execa from "execa";
import { exec, spawn } from 'child_process'
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);
console.log(resolve('./'), join('./'), '----]]]');
const inquirerObj = await inquirer.prompt([
    {
        type: "input",
        name: "projectName",
        message: "set project name",
        validate(val) {
            if (val) return true;
            return "Please enter project name";
        },
    },
    {
        type: "checkbox",
        message: "please select",
        name: 'middleware',
        choices: [
            {
                name: 'vueRouter'
            }
        ],
    }
]);

const dirName = fs.mkdirSync(`./${inquirerObj.projectName}`, {recursive: true});
console.log(inquirerObj);

let packageJson = fs.readFileSync(resolve(__dirname, '../template/package.ejs')).toString();
packageJson = ejs.render(packageJson, inquirerObj);


fs.writeFile(join(`./${inquirerObj.projectName}/package.json`), packageJson, (err) => {
    if (err) {
        console.log(err, '---');
    } else {
        execa("yarn", {cwd: `./${inquirerObj.projectName}`, stdio: 'inherit'});
    }
})

export default inquirerObj;