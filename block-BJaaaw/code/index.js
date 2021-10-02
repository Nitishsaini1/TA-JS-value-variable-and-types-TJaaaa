// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Enter a number "));
// let num = 8;

if (num > 10){
  alert('number is even')
} else {
  alert('number is odd')
};

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numMax1 = Number(prompt("Enter a number"));
let numMax2 = Number(prompt("Enter a number"));

if(numMax1>numMax2){
  alert('numMax1 is greater')

} else{
  alert('numMax2 is greater')
};

// 3. Convert the above code using`?` terniary operator
 

 numMax2 < numMax1 ? 
   alert('numMax1 is greater')
  :
 alert('numMax2 is greater');
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let house = prompt("game of thrones one house name");



if (house < "stark"){
  alert(" A lannister always pays his debt");
} else if ( house = "lannister"){
  alert( " Winter is coming"); 
} else{
  alert("all men must die");
}
// 5. Convert the above code using`?` terniary operator

// house = stark ?
//  alert("Winter is coming")
//  :
//  alert("A lannister always pays his debt");
 
 // Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("Your birth of month"));

switch (month){
  case 1:
     alert('Jan month of 30 days');
     break;
    case 2:
        alert('Feb month of 28 days');
          break;
     case 3:
         alert('March month of 31 days');
         break;
      case 4:
        alert('April  month of 30 days');
        break;
      case 5:
         alert('May  month of 30 days');
         break;
      case 6:
          alert('June month of 30 days');
         break;
      case 7:
         alert('July month of 31 days');
         break;
      case 8:
         alert('August month of 31 days');
        break;
      case 9:
           alert('September month of 30 days');
          break;
      case 10:
             alert('October month of 31 days');
             break;
      case 11:
             alert('November month of 30 days');
             break;
      case 12:
              alert('December month of 30 days');
              break;
      default:
             alert("Not a month ");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.
  You will find out the in -hand amount by deducting the tax amount from salery.Conditions are given below.
  - `Salary <= 20000 tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt('Your salary ?'));

switch ( salary ){
    case ( 20000 < salary):
       alert("In hand amount is  20000");
       break;
    case ( 40000 < salary):
       alert("In hand amount is 40000");
       break;
    case ( 50000 < salary):
       alert("In hand amount is 50000");  
       
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks =  Number(prompt(' Your marks ')) ;

if (marks > 100 ){
  alert("Marks can't be greater than 100");
} else if (marks > 80){
  alert("Grade A");
} else if (marks > 50){
  alert("Grade B");
} else if (marks > 30){
  alert("Grade C");
} else if (marks > 0){
  alert("Grade D");
}

//switch

switch (marks){
   case marks > 100  :
    alert("Marks can't be greater than 100 by switch");
     break;
     case marks > 80  :
      alert("Marks can't be greater than 100 by switch");
       break;
   case marks > 50 :
    alert("Marks can't be greater than 100 by switch");
     break;
   case marks > 30  :
    alert("Marks can't be greater than 100 by switch");
     break;
   case marks > 0  :
    alert("Marks can't be greater than 100 by switch");
     
  
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherCondition = Number(prompt("What is the weather like outside?"));
   let weather = weatherCondition;
      let weather = sunny, rainy, hot, freezing;

if (weatherCondition = sunny){
  alert("Wear a T-shirt")
} else if (weatherCondition = rainy){
  alert(`Don't forget to take your raincoat`)
} else if (weatherCondition = hot){
  alert(`Get a hanky`)
} else if (weatherCondition = freezing){
  alert(`Get your sweeter on`)
} else {
  alert(`Not a valid input`)
}