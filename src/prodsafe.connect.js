const { Client } = require('pg');

function connectToPostgres() {
    let client = new Client();
    client.connect(err => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
          console.log('connected');
          return true;
      }
    });
}

module.exports = {
    connectToPostgres: connectToPostgres,
}
