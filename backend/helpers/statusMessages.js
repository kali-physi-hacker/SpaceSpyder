const INFORMATIONAL = {};
const SUCCESS = {
    OK_200: "OK",
    ACCEPTED_202: "ACCEPTED",
    CREATED_201: "CREATED",
    NO_CONTENT_204: "NO CONTENT"
};
const REDIRECTION = {};
const ERROR_CLIENT = {
    BAD_REQUEST_400: "REQUEST NOT FORMED PROPERLY",
    NOT_AUTHORIZED_401: "NOT AUTHORIZED",
    FORBIDDEN_403: "ACCESS RESTRICTED",
    NOT_FOUND_404: "RESOURCE NOT FOUND",
    NOT_ACCEPTABLE_406: "NOT ACCEPTABLE",
};
const ERROR_SERVER = {
    SERVER_INTERNAL_500: "INTERNAL SERVER_ERROR",
    SERVICE_UNAVAILABLE_503: "SERVICE NOT AVAILABLE"
};


module.exports = {
    INFORMATIONAL,
    SUCCESS,
    REDIRECTION,
    ERROR_CLIENT,
    ERROR_SERVER
}