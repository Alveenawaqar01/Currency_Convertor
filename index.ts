#! /usr/bin/env node
import inquirer from "inquirer";
//Define the List of currencies the their exchange rates
const currency:any ={
   "USD" :1,
   "EUR":0.9,
   "JYP" :113,
   "CAD" :1.3,
   "AUD" :1.65,
   "PKR" :280 
};
 let user_answer = await inquirer.prompt([
    {
        name:"from",
        message:"select the currency",
        type:"list",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"], 
    },{
        name:"to",
        message:"select to currency",
        type:"list",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"],
    },{
           name:"Amount",
           message:"enter your amount",
           type:"number",
    },
 ]);

 let userfromcurrency = user_answer.from;
 let usertoCurrency = user_answer.to
 let fromAmount = currency[userfromcurrency];
 let toAmount = currency[usertoCurrency];
 let Amount = user_answer.Amount;
 let baseAmount = Amount / fromAmount;
 let convertedAmount = baseAmount * toAmount;
 console.log(convertedAmount);
 



 
 
 
 
 