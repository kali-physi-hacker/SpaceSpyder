const spaceRouter = require('express').Router();
const jwt = require('jsonwebtoken');

const Space = require('../models/space');
const User = require('../models/user');

const config = require('../helpers/config');
const getToken = require('../helpers/utils').getToken;
const noneUndefined = require('../helpers/utils').noneUndefined;
const status = require('../helpers/statusMessages');


/**
 * Get all spaces
 */
spaceRouter.get('/', async(request, response)=> {
    await Space.find({}).exec((error, spaces)=> {
        error ? response.status(500).send({error: status.ERROR_SERVER.SERVER_INTERNAL_500}) : {};
        response.status(200).send(spaces);
    })
})


/**
 * Add a space
 */
spaceRouter.post('/', async(request, response)=> {
    const token = getToken(request);

    try {
        const decryptedData = jwt.verify(token, config.JWT_SECRET);

        (!token && !decryptedData.id) ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401}) : {};
        const user = await User.findById(decryptedData.id);
        !user.vendor.id ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401, details: "You are not a vendor"}) : {};

        if (noneUndefined(request.body)) {
            const space = new Space(request.body);
            space.vendor = user.vendor.id;
            await space.save();
            response.status(201).send({status: status.SUCCESS.CREATED_201});
        } else {
            response.status(400).send({error: status.ERROR_CLIENT.BAD_REQUEST_400});
        }
    } catch (exception) {
        response.status(500).send({error: status.ERROR_SERVER.SERVER_INTERNAL_500});
    }
})


/**
 * Modify a space detail
 */
spaceRouter.put('/:id', async(request, response) => {
    const token = getToken(request);
    try {
        const decryptedData = jwt.verify(token, config.JWT_SECRET);
        (!token && !decryptedData.id) ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401}) : {};
        const user = await User.findById(decryptedData.id);
        user.vendor.id !== request.params.id ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401}) : {};
        await Space.findByIdAndUpdate(request.params.id)
            .then(updatedSpace=> response.status(200).send(updatedSpace))
            .catch(exception=> {
                console.log(exception);
                response.status(500).send({error: exception})
            })
    } catch (exception) {
        response.status(500).send({error: exception});
    }
})


/**
 * Delete a space
 */
spaceRouter.delete('/:id', async(request, response)=> {
    const token = getToken();
    try {
        const decryptedData = jwt.verify(token, config.JWT_SECRET);
        (!token && !decryptedData) ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401}) : {};
        const user = await User.findById(decryptedData.id);
        user.vendor.id !== request.params.id ? response.status(401).send({error: status.ERROR_CLIENT.NOT_AUTHORIZED_401}): {};
        await Space.findByIdAndDelete(request.params.id)
            .then(deletedSpace=> response.status(204).send(deletedSpace))
            .catch(exception=> {
                console.log(exception);
                response.status(500).send({error: exception});
            })
    } catch (exception) {
        response.status(500).send({error: exception});
    }
})