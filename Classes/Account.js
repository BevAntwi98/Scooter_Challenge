const guest = require('./Guest');
const scooter = require('./Scooter');

class Account{

    deleteAccount(guest) { //if else
       // guest=new guest("Bev", 24, "64 zoo lane", "a@hotmail.com"); //tested in console to make sure it works
        guest.register.pop(guest.name); //removes persons account by name
        console.log(`${guest.name} has been removed`);
        return true;    
    }
    reportBrokenScooter(scooter){
        // scooter = new scooter(5, "Electric", 100, 32); //test to make sure it works
        return scooter.isDamaged();
    }
}
module.exports=Account;


// TEST TO MAKE SURE CODE WORKS IN CONSOLE
//  a = new Account();
//  a.deleteAccount(guest);
//  a.reportBrokenScooter(scooter)
