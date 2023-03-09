export default (io) => {
    io.on('connection', (socket) => {
        console.log("nuevo usuario conectado", socket.handshake);
    })
}