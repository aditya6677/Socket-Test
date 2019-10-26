let db = require('../database/db');
let Schema = mongoose.Schema;

let user = new Schema ({
    userId : ObjectId,
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    status : {
        type : String
    }
});

module.exports = {
    user
}