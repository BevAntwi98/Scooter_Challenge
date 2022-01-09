const CardIssuer = require('../Classes/CardIssuer');

describe('CardIssuer', () => {


    // take payment
    test('User can take payment via CardIssuer', async () => {
        const c = new CardIssuer("Bev CardIssuer", "Visa");
        await c.takePayment();
        console.log("Payment taken");

    })
})