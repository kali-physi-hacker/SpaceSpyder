const mongoose = require('mongoose');

const removeSchemaChunch = require('../helpers/utils').removeSchemaChunk;


const vendorSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


vendorSchema.set('toJSON', {
    transform: (document, returnedObjects) => {
        removeSchemaChunch(returnedObjects);
    }
})


const Vendor = mongoose.model('Vendor', vendorSchema);


module.exports = Vendor;