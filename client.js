const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    // host: 'localhost',
    // port: 50541
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', (server) => {
    console.log('Connected to Server! ');
  });
  conn.on('error', (error)=> console.log(error))
  
  conn

  return conn;
}

module.exports = connect;