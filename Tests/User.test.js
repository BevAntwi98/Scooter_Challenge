
const GooglePay = require('../Classes/GooglePay');
const Scooter = require('../Classes/Scooter');
const User = require('../Classes/User');


describe('User', function () { //TO FIX

    // see if user can hire scooter
    test('User can hire scooter', () => {
        const u = new User("bev", 24, "b@b.com", Math.random());
        let a = u.hireScooter();
        expect(a).toBeUndefined();
    });

    // see if user can hire scooter if scooter is less than 100
    test('User cannot hire scooter', () => {
        const u = new User("bev", 24, "b@b.com", Math.random());
        const s = new Scooter(1, "Electric", 40, 20);
        let a = u.hireScooter(s);
        expect(a).toBeFalsy();

    });

    // see if user can return scooter. Not sure how to test this part (returnFScooter function)
    test('User can return scooter', () => {
        const u = new User("bev", 24, "b@b.com", Math.random());
        const s = new Scooter(1, "Electric", 40, 20);
        expect(u.returnScooter(s)).toBeFalsy();
        // return u.returnScooter().then(()=>{
        //     expect(()=> u.takePayment().toBeTruthy());
        // })
    })

    //see if user can submit feedback
    test('User can submit feedback', async () => {
        const u = new User("bev", 24, "b@b.com", Math.random());
        // const review = prompt(`Hi There ${this.name}, please leave some feedback so I can better develop my js code ;) `);
        await u.submitFeedback();
        console.log("Feedback submitted");

    });

})