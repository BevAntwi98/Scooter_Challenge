const Payment = require('../Classes/Payment');

describe('Payment',()=>{

    // test to see if user can verify details 
    test('user can verify details', async()=>{
        
        const p = new Payment("Payment","Card",123);
        await p.verifyBankDetails();
        console.log("card details entered");
    });

    // throw error test
    test('user entered letters instead of numbers', ()=>{
        expect(()=> new Payment().toThrowError("You have not entered a string of numbers")); //not sure if i have to pass in parameters
    });


    // test to take payment 
    test('User can take payment', ()=>{
        const p = new Payment("Payment","Card",123);
        expect(p.takePayment()).toBeUndefined(); //not sure why this is undefined
    })
})