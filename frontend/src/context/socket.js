import React from 'react';
import { io } from 'socket.io-client';

export const SocketContext = React.createContext();
export const socket = io();
