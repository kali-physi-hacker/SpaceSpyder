/**
 * Remove Unnecessary and unneeded fields from model Objects
 * @param returnedObject
 * @param auth
 */
const removeSchemaChunk = (returnedObject, auth=false) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    auth ? delete returnedObject.password : {};
}


module.exports = {
    removeSchemaChunk,
}