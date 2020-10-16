/**
 * Remove Unnecessary and unneeded fields from model Objects
 * @param returnedObject
 * @param auth
 */
const removeSchemaChunk = (returnedObject, auth = false) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    auth ? delete returnedObject.password : {};
}

/**
 * Return the Authentication Token from a request made to an endpoint
 * @param request
 * @returns {string|null}
 */
const getToken = request => {
    const auth = request.get('authorization');
    return (auth && auth.toLowerCase().startsWith('token')) ? auth.substring(6) : null;
}


/**
 * Returns true if none of the fields in a request body is undefined
 * and returns false otherwise
 * @param requestBody
 * @returns {boolean}
 */
const noneUndefined = requestBody => {
    let notDefined = false;
    for (let field in requestBody) {
        notDefined = requestBody[field] === undefined ? true : {}
    }
    return notDefined
}


module.exports = {
    removeSchemaChunk,
    noneUndefined,
    getToken,
}