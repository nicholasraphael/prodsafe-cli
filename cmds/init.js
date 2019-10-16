//prodsafe module imports
const prodsafeConnect = require('../src/prodsafe.connect');
const CONST_ENV_VARS = require('./cmd_constants.js');

const path = require("path");
const { spawn } = require('child_process');
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const sh = require('shelljs');

const connectionCmds = {
    help: `
        prodsafe-cli init <options>
        postgresql .............. show postgresql connection instructions `
};

const getPostgresENVInfo = () => {
    //seperate into seperate file for environment names
    return inquirer.prompt(CONST_ENV_VARS.POSTGRES_ENV_VARS);
}

const exportENVInfo = async (envVariables) => {
    let pgVarNames = Object.keys(envVariables);
    sh.exec(`sh ./scripts/env_postgres.sh ${envVariables[pgVarNames[0]]}
        ${envVariables[pgVarNames[1]]}
        ${envVariables[pgVarNames[2]]}
        ${envVariables[pgVarNames[3]]}
        ${envVariables[pgVarNames[4]]}`);
}

module.exports = async (args) => {
    let subCmd = args._[0];
    let dbType = args._[1];
    if ( subCmd === 'init') {
        console.log(
            chalk.green(
                figlet.textSync("prodsafe", {
                    font: "big",
                    horizontalLayout: "default",
                    verticalLayout: "default"
                })
            )
        );
        switch (dbType) {
            case 'postgresql':
                //todo: progress bar for init process
                console.log("Let's setup your environment connection!")
                //input args for postgresql connection
                let userRes = await getPostgresENVInfo();
                //output answers to bash_profile
                await exportENVInfo(userRes);
                //connect to database
                try {
                    prodsafeConnect.connectToPostgres();
                } catch (err) {
                    console.log(err);
                }

            case 'mongodb':
                break;
            case 'amazons3':
                break;
            default:
                console.log(connectionCmds.help);
        }
    }
}
