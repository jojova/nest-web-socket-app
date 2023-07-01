import { Controller, Get } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';

@Controller()
export class AppController {
  constructor(private readonly socketGateway: SocketGateway) {}

  @Get()
  sendDataToClients(): string {
    this.socketGateway.server.emit('data', 'Data from server'); // Emit a 'data' event to all connected clients
    return 'Data sent to clients';
  }
}
