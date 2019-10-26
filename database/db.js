const mongoose = require('mongoose');
const config = require('../config/config')();

mongoose.connect(config.DATABASE, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`Connected to MongoDB`);
}).catch((err)=> {
    console.log(`Error connecting database ${err}`)
});