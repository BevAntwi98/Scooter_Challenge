const Bank = require('../Classes/Bank');

describe('Bank', () => {

    // take payment
    test('User can take payment via Bank', async () => {
        const b = new Bank("Bev Bank Pay", "Natwest");
        await b.takePayment();
        console.log("Payment taken");

    });
})