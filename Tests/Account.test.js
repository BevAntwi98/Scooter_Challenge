const Account = require('../Classes/Account');
const Guest = require('../Classes/Guest');
const Scooter = require('../Classes/Scooter');
const scooter = require('../Classes/Scooter');


describe('Account', function () {  //bag test suite

    // test to see that a guest can delete account
    test('Account can be deleted', () => {
        const a = new Guest("bev", 24, "64 zoo lane", "b@b.com");
        const b = new Account();
        expect(b.deleteAccount(a)).toBeTruthy();
    });

    test('Broken scooter is reported',()=>{
       const scooter = new Scooter(1,"Electric",100,21);
       const b = new Account();
       expect(b.reportBrokenScooter(scooter)).toBeTruthy();
    })


   


});