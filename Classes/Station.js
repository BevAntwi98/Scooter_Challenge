class Station {

    name;
    scooters = [10];

    constructor(name){
        this.name=name;

    }

    async chargeScooter(){ //function to charge scooter. maybe add async / loading func
        console.log('Starting charge');
        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
        // console.log('Charge complete');   
    }


}
module.exports=Station