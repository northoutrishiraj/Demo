const WebSocket = require('ws')
const url = 'ws://localhost:5555'
const connection = new WebSocket(url)


//connection.listen(url);

connection.onlisten = (listen) => {
  console.log(`listening ${listen}`);
}

connection.onopen = () => {
  connection.send('Hii, Client is connected!!') 
}

// connection.onerror = (error) => {
//   console.log(`WebSocket error: ${error}`)
// }

connection.on('close', function() {
 console.log('Server is Disconnected..');
}); 

connection.onmessage = (e) => {
  console.log(e.data)
  
}
connection.on('message', function() {
  connection.send('Data is recieved by client.');
});

// connection.onclose = () => {
//   console.log('closes')
// }

//connection.onmessage = function(event) {
  //console.log(event.data);
//}