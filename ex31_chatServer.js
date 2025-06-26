// ex29_chatServer.js
const { log } = require('console');
const http = require('http')
    , fs = require('fs')
    , path = require('path')
    , express = require('express')
    , socketio = require('socket.io') // npm i socket.io

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat3.html'))
})

// 웹서버 가동
const server = http.createServer(app);

server.listen(5555, () => {
    console.log(`http://localhost:5555`)
})

// 소켓 서버 가동
const io = socketio().listen(server)

/**
 * [1] public 통신 : 나를 포함한 모든 접속자에게 메시지를 보낸다
 *                  io.sockets.emit()
 * [2] broadcast 통신 : 나를 제외한 모든 접속자에게 메시지를 보낸다
 *                  io.broadcast.emit()
 * [3] private 통신 : 특정 접속자에게만 메시지를 보낸다 (챗봇, 귓속말)
 *                  io.sockets.to(socket.id).emit()
 * [4] 특정 방에 입장한 접속자들에게만 메시지를 보낸다
 *                  io.sockets.in('방이름').emit()
 */

io.sockets.on('connection', (socket) => {
    // socket id
    const uid = socket.id;

    // 클라이언트에서 챗서버에 접속하면 클라이언트와 통신에 필요한 socket을 콜백함수에 전달
    console.log('connection 이벤트 핸들러 >> 클라이언트가 접속했어요. socket.id: ', uid)

    socket.on('echo', (data) => {
        console.log('메시지 받음: ' + data)
        // io.emit('chat message', msg)
        // io.sockets.emit('sendAll', data) // 접속한 모든 클라이언트에게 메세지 전송 => sendAll 이벤트를 수신(on('sendAll'))
        // socket.broadcast.emit('sendBroad', data)
        io.sockets.to(uid).emit('sendOne', data)
    })

    socket.on('disconnect', () => {
        console.log('클라이언트가 연결을 끊었어요')
    })
})

// http://127.0.0.1:5555/chat