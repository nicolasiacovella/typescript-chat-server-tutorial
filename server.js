console.log("Starting Application")

const io = require('socket.io')(3000
    ,
    {
        cors: {
          origin: "http://127.0.0.1:5500",
          methods: ["GET", "POST"]
        }
     }
)

io.on('connection', socket => {
  console.log("New user")
  socket.emit('chat-message', 'Hello Cruel World');    
})

