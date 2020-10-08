const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../../helpers/config');

const Space = require('../../models/space');
const User = require('../../models/user');


/**
 * Test for Space Models.
 * Phases of test cases:
 *      1. Insert Space into the db successfully (Test Normal use case)
 *      2. Insert Space with invalid field. (Test on Schema)
 *      3. Insert Space without required field. (Test on Validation)
 */
const userMockup = {
    firstName: "Desmond",
    lastName: "Brown",
    email: "browndesmond30@email.com",
    password: "Something"
};
let savedUser;

let spaceMockup = {
    name: "Space Name",
    description: "Some space description",
}

describe('Test For Space Model',  ()=> {
    beforeAll(async ()=> {
        await mongoose.connect(config.MONGOOSE_URI, config.MONGOOSE_OPTIONS, error=> {
                if (error) {
                    console.log("MongoDB Connection Failed!!!");
                    console.log("=====================================================");
                    console.log(error);
                    console.log("=====================================================")
                    process.exit(1)
                }
            console.log("MongoDB Connection Successful");
            });
        const user = new User(userMockup);
        savedUser = await user.save();
    })

    test('TEST CASE 1: Space Model Creation (SAVE) Operation', async ()=> {
        spaceMockup.vendor = savedUser.id;
        const space = new Space(spaceMockup);
        const savedSpace = await space.save();

        // Expect the following
        expect(savedSpace.id).toBeDefined();
        expect(savedSpace.name).toBe(spaceMockup.name);
        expect(savedSpace.description).toBe(spaceMockup.description);
        expect(savedSpace.vendor.toString()).toBe(savedUser.id);
        expect(savedSpace.dateAdded).toBeDefined();
    });

    test('TEST CASE 2: Space Model Insertion with valid fields which are not defined in the Schema', async ()=> {
        spaceMockup.vendor = savedUser.id;
        spaceMockup.anotherField = "Another Field";
        const space = new Space(spaceMockup);
        const savedSpace = await space.save();

        // Expect the following
        expect(savedSpace._id).toBeDefined();
        expect(savedSpace.anotherField).toBeUndefined();
    });

    test('TEST CASE 3: Space Model Insertion without required fields', async ()=> {
        delete spaceMockup.vendor;
        const space = new Space(spaceMockup);

        let err;
        try {
            err = await space.save();
        }catch (error) {
            err = error;
        }

        // Expect the following
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        // console.log(err.errors.vendor.value);
        expect(err.errors.vendor.value).toBeUndefined();
    });
});