const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"public")));
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB

mongoose.connect('mongodb+srv://adiiityasiingh:qB4L6O4FsNlFgyzZ@livetracker.enyhr.mongodb.net/?retryWrites=true&w=majority&appName=Livetracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Define a schema and model
const dataSchema = new mongoose.Schema({
    ID: String,
    Long: String,
    Lat: String
});

const Data = mongoose.model('Data', dataSchema);

// Initialize Express App
app.use(bodyParser.json());
io.on("connection",(socket)=>{
    socket.on("send-location",  async (data)=>{
        io.emit("receive-location",{ id: socket.id, ...data});
        try {
            // const { name, email, age } = req.body;
            const newData = new Data({ ID: socket.id, Long: data.longitude, Lat: data.latitude });
            await newData.save();
           console.log({ message: '✅ Data saved successfully', data: newData });
        } catch (error) {
            console.error('❌ Error saving data:', error);
            
        }
        console.log(data)
    });




    socket.on("disconnect", ()=>{
        io.emit("user-disconnected", socket.id);
        console.log("User Disconnected having UsedID:", socket.id)
    })
    console.log("User Connected");
});


app.get("/", async(req,res)=>{
res.render("index");
console.log("Server running on port 3003");
})
server.listen(3003);
