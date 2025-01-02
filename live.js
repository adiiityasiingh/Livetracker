const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"public")));
io.on("connection",(socket)=>{
    socket.on("send-location",(data)=>{
        io.emit("receive-location",{ id: socket.id, ...data});
        console.log(data)
    });
    socket.on("disconnect", ()=>{
        io.emit("user-disconnected", socket.id);
        console.log("User Disconnected having UsedID:", socket.id)
    })
    console.log("User Connected");
});

// Starting the server
app.get("/",(req,res)=>{
res.render("index");
console.log("Server running on port 3003");
})
server.listen(3003);
