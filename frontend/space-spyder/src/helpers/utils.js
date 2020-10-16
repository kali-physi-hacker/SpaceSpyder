/**
 * Return True if a field is empty
 * @param fields
 * @returns {boolean}
 */
const nonEmpty = fields => {
    let noEmpty = true;
    for (let field in fields) {
        if (fields[field] === "") {
            noEmpty = false;
            break;
        }
    }
    return noEmpty;
}


module.exports = {
    nonEmpty
}