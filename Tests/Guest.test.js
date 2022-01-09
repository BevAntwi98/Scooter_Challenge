const Guest = require('../Classes/Guest');


describe('Guest', function () {  //bag test suite

// test to see that once a person is verified, they are signed up and pushed into register array
test('Guest of age can sign up', ()=>{
    const a = new Guest("bev",24,"64 zoo lane","b@b.com");
    a.verifyAge();
    expect.arrayContaining("bev");
});


// test to see whether underage user can signup
test('Underage guest cannot sign up', ()=>{
    const a = new Guest("bev",18,"64 zoo lane","b@b.com");
    a.verifyAge();
    expect.arrayContaining([]); //expect empty array bc person under 18
});

// test to see if signUp for underage person is false
test('Underage guest signUP returns false', ()=>{
    const a = new Guest("bev",18,"64 zoo lane","b@b.com");
    a.verifyAge();
    expect(a.signUp("bev")).toBeFalsy();
});



});