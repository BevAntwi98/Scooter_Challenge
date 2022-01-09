const Google = require('../Classes/GooglePay');

describe('Google', () => {

    // take payment
    test('User can take payment via Google Pay', async () => {
        const g = new Google("Bev Google Pay", "App");
        await g.takePayment();
        console.log("Payment taken");

    })
})