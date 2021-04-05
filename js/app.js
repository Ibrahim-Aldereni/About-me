'use strict';

/* get user name and welcome message  */

let UserName = prompt("Provide your name please?");
alert("Welcome " + UserName + " to \"About me\" website, I hope you enjoy it ");

/* the questions*/

function answer(q){
  switch(q){
    case 'y':
    case 'yes':
    case 'yeah':
      // console.log("Correct answer"); 
      alert("Correct answer");
      break;
      
    case 'no':
    case 'n':
    case 'nope':
      // console.log("Incorrect answer"); 
      alert("Incorrect answer");
      break;

    default:
      // console.log("Wrong entry");
      alert("Wrong entry, you should enter y/n");
      break;
  }
}

let q1 = prompt("Do you think I am an engineer?",'y/n  or  yes/no  or  yeah/nope');
q1 = q1.toLowerCase();
answer(q1);

let q2 = prompt("Do you think I am nerd?",'y/n  or  yes/no  or  yeah/nope');
q2 = q2.toLowerCase();
answer(q2);

let q3 = prompt("Do you think I love reading?",'y/n  or  yes/no  or  yeah/nope');
q3 = q3.toLowerCase();
answer(q3);

let q4 = prompt("Do you think I have previous job experience?",'y/n  or  yes/no  or  yeah/nope');
q4 = q4.toLowerCase();
answer(q4);

let q5 = prompt("Do you think I have GPA higher than 80% in high school?",'y/n  or  yes/no  or  yeah/nope');
q5 = q5.toLowerCase();
answer(q5);


/* final message*/

alert("Good job " + UserName + " take a tour in the site to know me better")