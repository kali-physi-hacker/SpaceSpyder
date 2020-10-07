require('dotenv').config()


/**
 *  Mongoose Database Configuration
 */
let MONGOOSE_URI;
const MONGOOSE_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

switch (process.env.NODE_ENV) {
    case "development":
        MONGOOSE_URI = process.env.MONGODB_STAGE_URI;
        break;
    case "production":
        MONGOOSE_URI = process.env.MONGODB_PROD_URI;
        break;
    default:
        MONGOOSE_URI = process.env.MONGODB_STAGE_URI;
        break;
}

// Json Web Token Encryption KEy
const JWT_SECRET = process.env.JWT_SECRET;

// SERVER LISTENING PORT
const PORT = process.env.PORT;


module.exports = {
    MONGOOSE_URI,
    MONGOOSE_OPTIONS,
    JWT_SECRET,
    PORT
}