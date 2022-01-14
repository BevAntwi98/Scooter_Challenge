const Guest = require('../Classes/Guest');


describe('Guest', function () {  //bag test suite

    // test to see that once a person is verified, they are signed up and pushed into register array
    test('Guest of age can sign up', () => {
        const a = new Guest("bev", 24, "64 zoo lane", "b@b.com");
        a.verifyAge();
        expect(a.verifyAge).toBeTruthy();
    });


    // test to see whether underage user can signup
    test('Underage guest cannot sign up', () => {  //DOUBLE CHECK
        const a = new Guest("bev", 18, "64 zoo lane", "b@b.com");
        a.verifyAge();
        expect(a.verifyAge()).toBeFalsy();
    });
    
    // test to see if signUp successful
    test('Underage guest signUP returns false', () => {
        const a = new Guest("bev", 18, "64 zoo lane", "b@b.com");
        a.signUp();
        expect.arrayContaining("bev");
    });


});