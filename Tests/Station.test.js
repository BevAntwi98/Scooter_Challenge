const Station = require('../Classes/Station');


describe('Station', () => {

    // charge scooter
    test('charge scooter', async () => {
        const s = new Station();
        await s.chargeScooter(); // we need to wait for the charge!
        console.log("Test complete");
    });


});