import app from './app';
import {Server as websocketServer} from 'socket.io';
import http from 'http';

//ambos servidores deben estar conectados, pero no directo
//tengo servidor http y servidor de websicket
const server = http.createServer(app)
const httpServer  = server.listen(3000)
const io = new websocketServer(httpServer)


console.log('server en 3000')
