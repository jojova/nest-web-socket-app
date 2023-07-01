import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('Socket server initialized');
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    client.emit('message', 'Welcome to the server'); // Send a welcome message to the client
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  handleClientMessage(client: Socket, message: string) {
    console.log(`Received message from client (${client.id}): ${message}`);
    // Process the received message
  }
}
