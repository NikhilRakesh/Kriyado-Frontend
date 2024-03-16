import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const UsersNotification = () => {

    const [message, setMessage] = useState('');
    const roomName = "CNOT";

    useEffect(() => {
        if (roomName === "CNOT") {
            const socket = new WebSocket('ws://192.168.80.141:8000/ws/notifications/CNOT/');
    
            socket.onopen = () => {
                console.log('WebSocket connection opened.');
            };

            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                setMessage(data.message);
                console.log(data.message);
            };
       
            socket.onclose = () => {
                console.log('WebSocket connection closed.');
            };

            return () => {
                socket.close();
            };
        }
    }, [roomName]);

    return (
        <div className='bg-gray-50 rounded-lg m-6 p-6 shadow-lg   '>
            <h1 className='text-center font-bold'>Users Notification</h1>
            <p>Message: {message}</p>
        </div>
    )
}

export default UsersNotification
