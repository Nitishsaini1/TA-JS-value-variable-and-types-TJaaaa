// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Enter a number "));
// let num = 8;

if (num % 2 === 0){
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

let house = prompt("Enter game of thrones one house name");



if (house === "stark"){
  alert( " Winter is coming"); 
} else if ( house === "lannister"){
  alert(" A lannister always pays his debt");
} else{
  alert( " All men must die");
}
// 5. Convert the above code using`?` terniary operator

// house = stark ?
//  alert("Winter is coming")
//  :
//  alert("A lannister always pays his debt");
 
house === "stark" ?   alert("Winter is coming") :  house === "lannister" ?   alert(" A lannister always pays his debt") :   alert(" All men must die") ;
 // Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt("Name of a month");

switch (monthName){
  case "January":
     alert('Jan month of 30 days');
     break;
    case "February":
        alert('Feb month of 28 days');
          break;
     case "March":
         alert('March month of 31 days');
         break;
      case "April":
        alert('April  month of 30 days');
        break;
      case "May":
         alert('May  month of 30 days');
         break;
      case "June":
          alert('June month of 30 days');
         break;
      case "July":
         alert('July month of 31 days');
         break;
      case "August":
         alert('August month of 31 days');
        break;
      case "September":
           alert('September month of 30 days');
          break;
      case "October":
             alert('October month of 31 days');
             break;
      case "November":
             alert('November month of 30 days');
             break;
      case "December":
              alert('December month of 30 days');
              break;
      default:
             alert("Not a vaild input ");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.
  You will find out the in -hand amount by deducting the tax amount from salery.Conditions are given below.
  - `Salary <= 20000 tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt('Your salary ?'));

switch (true){
    case salary <= 20000 :{
      let tax = (salary * 10) / 100;
      alert(`Your in-hand amount ${salary - tax}`);
      break;
    }
    case salary <= 40000 : {
      let tax = (salary * 20) / 100;
      alert(`Your in-hand amount ${salary - tax}`);
      
      break;
    }
    case salary > 50000 : {
      let tax = (salary * 30) / 100;
      alert(`Your in-hand amount ${salary - tax}`);
        break;
      }
         default:
         alert("Not a valid input")
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
} else if (marks > 80 && marks < 100){
  alert("Grade A");
} else if (marks > 50 && marks < 80){
  alert("Grade B");
} else if (marks > 30 && marks < 50){
  alert("Grade C");
} else {
  alert("Grade D");
}

//switch

switch (true){
   case marks > 100  :
    alert("Marks can't be greater than 100 ");
     break;
     case marks > 80 && marks < 100  :
      alert("Grade A");
       break;
   case marks > 50 && marks < 80 :
    alert("Grade B");
     break;
   case marks > 30 && marks < 50 :
    alert("Grade C");
     break;
   default:
    alert("Grade D");
     
  
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherCondition = prompt("What is the weather like outside?");
  
switch (weatherCondition){
  case "sunny":
    alert('Wear a T-shirt');
     break;
  case "rainy":
    alert('Dont forget to take your raincoat');
     break;
  case "hot":
    alert('Get a hanky');
     break;
  case "freezing":
    alert('Get your sweeter on');
     break;
  default:
    alert('Not a valid input');
}