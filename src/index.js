/* eslint-disable global-require */
const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  
  let cmd = args._[0] || 'help';

  if (args.help || args.h) {
    cmd = 'help';
  }
  switch (cmd) {
    case 'init':
      require('../cmds/init')(args);
      break;

    case 'help':
      console.log('implement help script');
      break;

    default:
      console.log(`"${cmd}" is not a valid command!`);
      break;
  }
};
/* eslint-enable global-require */
