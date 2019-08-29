"use strict";

const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0] || 'help';

    if (args.help || args.h) {
        cmd = 'help';
    }
    switch (cmd) {
        case 'init':
            require('.prodsafe-cli/cmds/init')(args);
        case 'help':
            console.log('implement help js script');
        default:
            error(`"${cmd}" is not a valid command!`, true)
            break
    }

}
