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
    console.log('Successfully connected to game server ');
  });
  conn.on('connect', () => {
    conn.write("Name: KDT");
  });

  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });
  // conn.on('connect', ()=> {
  //   setTimeout(()=> conn.write("Move: left"), 50)
  // })
  // conn.on('connect', ()=> {
  //   let repeat = setInterval(()=> conn.write("Move: left"), 50);
    
  //   setTimeout(()=> clearInterval(repeat) , 2000);
  // })

  conn.on('error', (error)=> console.log(error))
  

  return conn;
}

module.exports = connect;