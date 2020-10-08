const mongoose = require('mongoose');

const removeSchemaChunk = require('../helpers/utils').removeSchemaChunk;


const spaceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

spaceSchema.set('toJSON', {
    transform: (document, returnedSpace) => {
        removeSchemaChunk(returnedSpace);
    }
});


const Space = mongoose.model('Space', spaceSchema);


module.exports = Space;