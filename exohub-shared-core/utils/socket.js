import { io } from 'socket.io-client';

/**
 * Exo-Socket: 실시간 경매 낙찰 및 긴급 공지 전파 엔진
 */
export const socketManager = {
  socket: null,
  connect: (token) => {
    this.socket = io(process.env.NEXT_PUBLIC_WS_URL, {
      auth: { token },
      transports: ['websocket']
    });
    
    this.socket.on('connect', () => console.log('🌐 [Exo-Net] 실시간 생태계 연결됨'));
  },
  subscribe: (event, callback) => this.socket?.on(event, callback),
  emit: (event, data) => this.socket?.emit(event, data)
};
