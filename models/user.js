const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));
const userSchema = mongoose.Schema({
    id: String,
    lat: String,
    long: String
})
module.exports = mongoose.model('user',userSchema);