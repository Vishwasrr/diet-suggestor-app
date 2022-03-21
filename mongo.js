const mongoose = require('mongoose');

//          connect to production(Heroku) or connect to local dev
const uri = process.env.MONGODB_URI || 'mongodb+srv://Vishwas:vishwas123@cluster0.uimm1.mongodb.net/FoodCount-app'

mongoose.connect(uri, 
{useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    //we're connected!
    console.log("Mongoose online")
});