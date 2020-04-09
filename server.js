const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 5555 })

wss.on("listening", () => {
   console.log("Waiting for client to connect..");
});

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`${message}`)
  })

  ws.send('Hii, Server is connected!!')

  setTimeout(() => {
  ws.send(JSON.stringify([{
    "id": 0,
    "name": "Vernon Dunham",
    "company": "Qualcore",
    "email": "vernon.dunham@qualcore.com"
  }, {
    "id": 1,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 2,
    "name": "Rico Muldoon",
    "company": "Akashy",
    "email": "rico.muldoon@airconix.com"
  }, {
    "id": 3,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 4,
    "name": "Rico Pettey",
    "company": "Thermolock",
    "email": "rico.pettey@thermolock.com"
  }, {
    "id": 5,
    "name": "Raymond Seabury",
    "company": "Airconix",
    "email": "raymond.seabury@airconix.com"
  }, {
    "id": 6,
    "name": "Dori Pettey",
    "company": "Hivemind",
    "email": "dori.pettey@hivemind.com"
  }, {
    "id": 7,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 8,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 9,
    "name": "Vernon Muldoon",
    "company": "Airconix",
    "email": "vernon.muldoon@airconix.com"
  }, {
    "id": 10,
    "name": "Vernon Seabury",
    "company": "Hivemind",
    "email": "vernon.seabury@hivemind.com"
  }, {
    "id": 11,
    "name": "Dori Neal",
    "company": "Airconix",
    "email": "dori.neal@airconix.com"
  }, {
    "id": 12,
    "name": "Raymond Pettey",
    "company": "Airconix",
    "email": "raymond.pettey@airconix.com"
  }, {
    "id": 13,
    "name": "Rico Muldoon",
    "company": "Qualcore",
    "email": "rico.muldoon@qualcore.com"
  }, {
    "id": 14,
    "name": "Vernon Seabury",
    "company": "Sunopia",
    "email": "vernon.seabury@sunopia.com"
  }, {
    "id": 15,
    "name": "Rico Pettey",
    "company": "Airconix",
    "email": "rico.pettey@airconix.com"
  }, {
    "id": 16,
    "name": "Jason Dunham",
    "company": "Sunopia",
    "email": "jason.dunham@sunopia.com"
  }, {
    "id": 17,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 18,
    "name": "Jason Pettey",
    "company": "Thermolock",
    "email": "jason.pettey@thermolock.com"
  }, {
    "id": 19,
    "name": "Vernon Dunham",
    "company": "Thermolock",
    "email": "vernon.dunham@thermolock.com"
  }, {
    "id": 20,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  },{
    "id": 21,
    "name": "Vernon Dunham",
    "company": "Qualcore",
    "email": "vernon.dunham@qualcore.com"
  }, {
    "id": 22,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 23,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 24,
    "name": "Rico Pettey",
    "company": "Thermolock",
    "email": "rico.pettey@thermolock.com"
  }, {
    "id": 25,
    "name": "Raymond Seabury",
    "company": "Airconix",
    "email": "raymond.seabury@airconix.com"
  }, {
    "id": 26,
    "name": "Dori Pettey",
    "company": "Hivemind",
    "email": "dori.pettey@hivemind.com"
  }, {
    "id": 27,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 28,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 29,
    "name": "Vernon Muldoon",
    "company": "Airconix",
    "email": "vernon.muldoon@airconix.com"
  }, {
    "id": 30,
    "name": "Vernon Seabury",
    "company": "Hivemind",
    "email": "vernon.seabury@hivemind.com"
  }, {
    "id": 31,
    "name": "Dori Neal",
    "company": "Airconix",
    "email": "dori.neal@airconix.com"
  }, {
    "id": 32,
    "name": "Raymond Pettey",
    "company": "Airconix",
    "email": "raymond.pettey@airconix.com"
  }, {
    "id": 33,
    "name": "Rico Muldoon",
    "company": "Qualcore",
    "email": "rico.muldoon@qualcore.com"
  }, {
    "id": 34,
    "name": "Vernon Seabury",
    "company": "Sunopia",
    "email": "vernon.seabury@sunopia.com"
  }, {
    "id": 35,
    "name": "Rico Pettey",
    "company": "Airconix",
    "email": "rico.pettey@airconix.com"
  }, {
    "id": 36,
    "name": "Jason Dunham",
    "company": "Sunopia",
    "email": "jason.dunham@sunopia.com"
  }, {
    "id": 37,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 38,
    "name": "Jason Pettey",
    "company": "Thermolock",
    "email": "jason.pettey@thermolock.com"
  }, {
    "id": 39,
    "name": "Vernon Dunham",
    "company": "Thermolock",
    "email": "vernon.dunham@thermolock.com"
  }, {
    "id": 40,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 41,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 42,
    "name": "Rico Muldoon",
    "company": "Akashy",
    "email": "rico.muldoon@airconix.com"
  }, {
    "id": 43,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 44,
    "name": "Rico Pettey",
    "company": "Thermolock",
    "email": "rico.pettey@thermolock.com"
  }, {
    "id": 45,
    "name": "Raymond Seabury",
    "company": "Airconix",
    "email": "raymond.seabury@airconix.com"
  }, {
    "id": 46,
    "name": "Dori Pettey",
    "company": "Hivemind",
    "email": "dori.pettey@hivemind.com"
  }, {
    "id": 47,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 48,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 49,
    "name": "Vernon Muldoon",
    "company": "Airconix",
    "email": "vernon.muldoon@airconix.com"
  }, {
    "id": 50,
    "name": "Vernon Seabury",
    "company": "Hivemind",
    "email": "vernon.seabury@hivemind.com"
  }, {
    "id": 51,
    "name": "Dori Neal",
    "company": "Airconix",
    "email": "dori.neal@airconix.com"
  }, {
    "id": 52,
    "name": "Raymond Pettey",
    "company": "Airconix",
    "email": "raymond.pettey@airconix.com"
  }, {
    "id": 53,
    "name": "Rico Muldoon",
    "company": "Qualcore",
    "email": "rico.muldoon@qualcore.com"
  }, {
    "id": 54,
    "name": "Vernon Seabury",
    "company": "Sunopia",
    "email": "vernon.seabury@sunopia.com"
  }, {
    "id": 55,
    "name": "Rico Pettey",
    "company": "Airconix",
    "email": "rico.pettey@airconix.com"
  }, {
    "id": 56,
    "name": "Jason Dunham",
    "company": "Sunopia",
    "email": "jason.dunham@sunopia.com"
  }, {
    "id": 57,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 58,
    "name": "Jason Pettey",
    "company": "Thermolock",
    "email": "jason.pettey@thermolock.com"
  }, {
    "id": 59,
    "name": "Vernon Dunham",
    "company": "Thermolock",
    "email": "vernon.dunham@thermolock.com"
  }, {
    "id": 60,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  },
  {
    "id": 0,
    "name": "Vernon Dunham",
    "company": "Qualcore",
    "email": "vernon.dunham@qualcore.com"
  }, {
    "id": 1,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 2,
    "name": "Rico Muldoon",
    "company": "Akashy",
    "email": "rico.muldoon@airconix.com"
  }, {
    "id": 3,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 4,
    "name": "Rico Pettey",
    "company": "Thermolock",
    "email": "rico.pettey@thermolock.com"
  }, {
    "id": 5,
    "name": "Raymond Seabury",
    "company": "Airconix",
    "email": "raymond.seabury@airconix.com"
  }, {
    "id": 6,
    "name": "Dori Pettey",
    "company": "Hivemind",
    "email": "dori.pettey@hivemind.com"
  }, {
    "id": 7,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 8,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 9,
    "name": "Vernon Muldoon",
    "company": "Airconix",
    "email": "vernon.muldoon@airconix.com"
  }, {
    "id": 10,
    "name": "Vernon Seabury",
    "company": "Hivemind",
    "email": "vernon.seabury@hivemind.com"
  }, {
    "id": 11,
    "name": "Dori Neal",
    "company": "Airconix",
    "email": "dori.neal@airconix.com"
  }, {
    "id": 12,
    "name": "Raymond Pettey",
    "company": "Airconix",
    "email": "raymond.pettey@airconix.com"
  }, {
    "id": 13,
    "name": "Rico Muldoon",
    "company": "Qualcore",
    "email": "rico.muldoon@qualcore.com"
  }, {
    "id": 14,
    "name": "Vernon Seabury",
    "company": "Sunopia",
    "email": "vernon.seabury@sunopia.com"
  }, {
    "id": 15,
    "name": "Rico Pettey",
    "company": "Airconix",
    "email": "rico.pettey@airconix.com"
  }, {
    "id": 16,
    "name": "Jason Dunham",
    "company": "Sunopia",
    "email": "jason.dunham@sunopia.com"
  }, {
    "id": 17,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 18,
    "name": "Jason Pettey",
    "company": "Thermolock",
    "email": "jason.pettey@thermolock.com"
  }, {
    "id": 19,
    "name": "Vernon Dunham",
    "company": "Thermolock",
    "email": "vernon.dunham@thermolock.com"
  }, {
    "id": 20,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  },{
    "id": 21,
    "name": "Vernon Dunham",
    "company": "Qualcore",
    "email": "vernon.dunham@qualcore.com"
  }, {
    "id": 22,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 23,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 24,
    "name": "Rico Pettey",
    "company": "Thermolock",
    "email": "rico.pettey@thermolock.com"
  }, {
    "id": 25,
    "name": "Raymond Seabury",
    "company": "Airconix",
    "email": "raymond.seabury@airconix.com"
  }, {
    "id": 26,
    "name": "Dori Pettey",
    "company": "Hivemind",
    "email": "dori.pettey@hivemind.com"
  }, {
    "id": 27,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 28,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 29,
    "name": "Vernon Muldoon",
    "company": "Airconix",
    "email": "vernon.muldoon@airconix.com"
  }, {
    "id": 30,
    "name": "Vernon Seabury",
    "company": "Hivemind",
    "email": "vernon.seabury@hivemind.com"
  }, {
    "id": 31,
    "name": "Dori Neal",
    "company": "Airconix",
    "email": "dori.neal@airconix.com"
  }, {
    "id": 32,
    "name": "Raymond Pettey",
    "company": "Airconix",
    "email": "raymond.pettey@airconix.com"
  }, {
    "id": 33,
    "name": "Rico Muldoon",
    "company": "Qualcore",
    "email": "rico.muldoon@qualcore.com"
  }, {
    "id": 34,
    "name": "Vernon Seabury",
    "company": "Sunopia",
    "email": "vernon.seabury@sunopia.com"
  }, {
    "id": 35,
    "name": "Rico Pettey",
    "company": "Airconix",
    "email": "rico.pettey@airconix.com"
  }, {
    "id": 36,
    "name": "Jason Dunham",
    "company": "Sunopia",
    "email": "jason.dunham@sunopia.com"
  }, {
    "id": 37,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 38,
    "name": "Jason Pettey",
    "company": "Thermolock",
    "email": "jason.pettey@thermolock.com"
  }, {
    "id": 39,
    "name": "Vernon Dunham",
    "company": "Thermolock",
    "email": "vernon.dunham@thermolock.com"
  }, {
    "id": 40,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 41,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }, {
    "id": 42,
    "name": "Rico Muldoon",
    "company": "Akashy",
    "email": "rico.muldoon@airconix.com"
  }, {
    "id": 43,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 44,
    "name": "Rico Pettey",
    "company": "Thermolock",
    "email": "rico.pettey@thermolock.com"
  }, {
    "id": 45,
    "name": "Raymond Seabury",
    "company": "Airconix",
    "email": "raymond.seabury@airconix.com"
  }, {
    "id": 46,
    "name": "Dori Pettey",
    "company": "Hivemind",
    "email": "dori.pettey@hivemind.com"
  }, {
    "id": 47,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 48,
    "name": "Jason Neal",
    "company": "Qualcore",
    "email": "jason.neal@qualcore.com"
  }, {
    "id": 49,
    "name": "Vernon Muldoon",
    "company": "Airconix",
    "email": "vernon.muldoon@airconix.com"
  }, {
    "id": 50,
    "name": "Vernon Seabury",
    "company": "Hivemind",
    "email": "vernon.seabury@hivemind.com"
  }, {
    "id": 51,
    "name": "Dori Neal",
    "company": "Airconix",
    "email": "dori.neal@airconix.com"
  }, {
    "id": 52,
    "name": "Raymond Pettey",
    "company": "Airconix",
    "email": "raymond.pettey@airconix.com"
  }, {
    "id": 53,
    "name": "Rico Muldoon",
    "company": "Qualcore",
    "email": "rico.muldoon@qualcore.com"
  }, {
    "id": 54,
    "name": "Vernon Seabury",
    "company": "Sunopia",
    "email": "vernon.seabury@sunopia.com"
  }, {
    "id": 55,
    "name": "Rico Pettey",
    "company": "Airconix",
    "email": "rico.pettey@airconix.com"
  }, {
    "id": 56,
    "name": "Jason Dunham",
    "company": "Sunopia",
    "email": "jason.dunham@sunopia.com"
  }, {
    "id": 57,
    "name": "Vernon Neal",
    "company": "Qualcore",
    "email": "vernon.neal@qualcore.com"
  }, {
    "id": 58,
    "name": "Jason Pettey",
    "company": "Thermolock",
    "email": "jason.pettey@thermolock.com"
  }, {
    "id": 59,
    "name": "Vernon Dunham",
    "company": "Thermolock",
    "email": "vernon.dunham@thermolock.com"
  }, {
    "id": 60,
    "name": "Dori Neal",
    "company": "Sunopia",
    "email": "dori.neal@sunopia.com"
  }
]));
  }, 2000)

  //ws.on('message', function() {
  //  console.log('Data sent to client.')
 // });

  ws.on('close', function() {
   console.log('Client Disconnected..');
  }); 

  // ws.on('close', message => {
  //   ws.send(`${message}`)
  // })

})
   




