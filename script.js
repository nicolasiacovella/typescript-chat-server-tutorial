const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')


const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {
    console.log("got data")
    console.log(data) 
})

// socket.on('chat-message', function (data) {
//     console.log(`Received message: ${data}`);
// });




messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})