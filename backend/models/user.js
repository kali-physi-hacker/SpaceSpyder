const mongoose = require('mongoose');

const removeSchemaChunk = require('../helpers/utils').removeSchemaChunk;


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        removeSchemaChunk(returnedObject, true);
    }
});


const User = mongoose.model('User', userSchema);


module.exports = User;