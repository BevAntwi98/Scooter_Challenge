const Scooter = require('../Classes/Scooter');

describe('Scooter', () => {

    // test for damaged scooter

    test('Scooter is damaged', () => {
        const s = new Scooter(1, "Electric", 100, 32);
        expect(s.isDamaged()).toBeTruthy();
    });

    // test for available scooter

    test('Scooter is Available', () => {
        const s = new Scooter(1, "Electric", 100, 32);
        s.isAvailable(1);
        expect(s.isAvailable(1)).toBeTruthy();
    });

    // scooter isnt fully charged and thus unavailable

    test('Scooter is not fully charged', () => {
        const s = new Scooter(1, "Electric", 80, 32);
        s.isAvailable(1);
        expect(s.isAvailable(1)).toBeFalsy();
    });





})