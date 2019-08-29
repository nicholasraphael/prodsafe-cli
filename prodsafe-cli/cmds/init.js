'use strict';

module.exports = () => {
    try {
        var spawnScript = require('child_process'),
            py = spawnScript('python', ['./scripts/config_yaml.py']);
    } catch(err) {
        console.log(err);
    }
}
