const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : "mongodb://localhost:27017/test";
const db = mongoose.connection;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.once('open', _ => {
    console.log('DataBase connected:', uri);
});
db.on('error', err => {
    console.log(err);
});

