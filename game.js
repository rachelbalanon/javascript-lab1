"use strict";

let userName = prompt("What is your name?");
let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let play = prompt(`Hi ${userName}! Would you like to play?`); 

if (play === "no" || "No"){
    console.log(`FINE ${userName}. Nobody wanted to play with you anyway.`);
}

else if (play === "yes" || "Yes"){

    while (play) {
        userHealth -= Math.floor(Math.random() * 2) + 1;
        grantHealth -= Math.floor(Math.random() * 2) +1;
        console.log(`${userName}'s health is ${userHealth}.`)
        console.log(`Grant's health is ${grantHealth}.`)

        if(grantHealth <= 0) {
            console.log(`Grant is defeated. ${userName} gains 1 win!`);
            userWins += 1;
            grantHealth = 10;
        } else if (userHealth <= 0) {
            console.log(`${userName} LOSES!`);
            break;
        }
        else if (userWins >= 3) {
            console.log(`${userName} won 3 times!`)
            break;
        }
    }
} 