class Scooter {

    scooter_id;
    type;
    model;
    chargePercentage;
    maxRange;

    constructor(scooter_id, type, chargePercentage, maxRange) {
        this.scooter_id = scooter_id;
        this.type = type;
        this.chargePercentage = chargePercentage;
        this.maxRange = maxRange;
        this.damage;
    }

    isDamaged() {
        console.log("report to maintenence");
        return this.damage = true;
    }

    isAvailable(scooter_id) {

        let d = new Date();
        d.getDate;


        //    error in case its not available
        if (this.chargePercentage !== 100 || this.maxRange !== 32) {
            let a = console.log("This bike is not ready to use");
            return a;
        }
        console.log("Starting session at " + d) //enter details to get time and date 
        return scooter_id;
    }
}
module.exports = Scooter