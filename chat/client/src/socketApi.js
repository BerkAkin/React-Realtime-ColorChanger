import io from 'socket.io-client'

let socket;

export const initSocket = () => {

    console.log("Sunucuya bağlanılıyor")

    socket = io('http://localhost:3001',{
        transports:["websocket"]
    })

    socket.on('connect',()=>{
        console.log("Sunucuya Bağlanıldı")
    })
}


export const send = (color) =>{
    socket.emit('newColor',color)
}