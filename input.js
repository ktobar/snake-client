let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  

  const handleUserInput = (key)=> {
     //console.log("key; ",key)
    if (key === 'w'){
        connection.write("Move: up");
    }
    if (key === 's'){
      connection.write("Move: down");
    }
    if (key === 'a'){
      connection.write("Move: left");
    }
    if (key === 'd'){
      connection.write("Move: right");
    } 
    if (key === '\u0003') {
      process.exit();
    }
  }

  stdin.on('data', (data)=>handleUserInput(data));

  return stdin;
}
module.exports = setupInput;
