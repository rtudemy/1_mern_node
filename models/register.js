const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required : true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password : {
            type: String,
            required: true
        }
        
    },
);


module.exports = mongoose.model('Register', registerSchema);
