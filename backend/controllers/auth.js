const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const config = require('../helpers/config');
const noneUndefined = require('../helpers/utils').noneUndefined;
const getToken = require('../helpers/utils').getToken;
const status = require('../helpers/statusMessages');


/**
 * Signup User
 */
authRouter.post('/register', async (request, response)=> {
    if (noneUndefined(request.body)){
        const user = new User(request.body);
        user.password = bcrypt.hashSync(user.password, 10);
        try {
            await user.save();
            response.status(201).send({status: status.SUCCESS.CREATED_201})
        } catch (error) {
            response.status(500).send({error: status.ERROR_SERVER.SERVER_INTERNAL_500})
        }
    } else {
        response.status(400).send({error: status.ERROR_CLIENT.BAD_REQUEST_400})
    }
});


/**
 * Login User
 */
authRouter.post('/login', async(request, response)=> {
    if (noneUndefined(request.body)) {
        await User.findOne({email: request.body.email}, (error, user)=> {
            error ? response.status(500).send({error: status.ERROR_SERVER.SERVER_INTERNAL_500}) : {};
            !user ? response.status(401).send({email: "No user with that email exists"}) : {};

            const validHash = bcrypt.compareSync(request.body.password, user.password);
            if (validHash) {
                const tokenData = {email: user.email, id: user.id};
                const data = {
                    token: jwt.sign(tokenData, config.JWT_SECRET),
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
                response.status(200).send(data);
            } else {
                response.status(401).send({password: "Password does not match the email you entered"})
            }
        });
    }
})


/**
 * Return User Info given Auth Token
 */
authRouter.get('/get-user-info/', async(request, response)=> {
    const token = getToken(request);
    try {
        const decryptedData = jwt.verify(token, config.JWT_SECRET);
        (!token && !decryptedData) ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401}) : {};
        const user = await User.findById(decryptedData.id);
        response.status(200).send({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    } catch (exception) {
        response.status(500).send({error: status.ERROR_SERVER.SERVER_INTERNAL_500});
    }
})


module.exports = authRouter;
