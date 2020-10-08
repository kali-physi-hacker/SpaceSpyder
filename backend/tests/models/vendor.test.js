const mongoose = require('mongoose');
const config = require('../../helpers/config');

const Vendor = require('../../models/vendor');
const User = require('../../models/user');


let savedUser;
const mockedUser = {
    firstName: "Desmond",
    lastName: "Brown",
    email: "browndesmond30@yahoo.com",
    password: "something"
}

/**
 * Test for Vendor Models.
 * Phases of test cases:
 *      1. Insert Space into the db successfully (Test Normal use case)
 *      2. Insert Space with invalid field. (Test on Schema)
 *      3. Insert Space without required field. (Test on Validation)
 */
describe('Test for Vendor Model', ()=> {
    beforeAll(async ()=> {
        await mongoose.connect(config.MONGOOSE_URI, config.MONGOOSE_OPTIONS, error=> {
            if (error){
                console.log("MongoDB Connection Failed!!!");
                console.log("=====================================================");
                console.log(error);
                console.log("=====================================================")
                process.exit(1)
            }
            console.log("MongoDB Connection Successful");
        })

        const user = new User(mockedUser);
        savedUser =  await user.save();
    })

    test('TEST CASE 1: Vendor Model Creation', async() => {
        const vendor = new Vendor({user: savedUser.id});
        const savedVendor = await vendor.save();

        // Expect the following
        expect(savedVendor.id).toBeDefined();
        expect(savedVendor.user.toString()).toBe(savedUser.id);
    })

    test('TEST CASE 2: Vendor Model Insertion with valid fields which are not defined in the Schema', async()=> {
        const vendor = new Vendor({user: savedUser.id, anotherField: "anotherField"});
        const savedVendor = await vendor.save();

        // Expect the following
        expect(savedVendor.id).toBeDefined();
        expect(savedVendor.anotherField).toBeUndefined();
    })

    test('TEST CASE 3: Vendor Model Insertion without required field', async ()=> {
        const vendor = new Vendor({});

        let err
        try {
            err = await vendor.save();
        } catch(error) {
            err = error;
        }

        // Expect the following
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.user.value).toBeUndefined();
    })
})