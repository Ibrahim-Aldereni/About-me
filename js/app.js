'use strict';

/***************** get user name and welcome message *******************/

let UserName = prompt("Provide your name please?");
alert("Welcome ( " + UserName + " ) to \"About me\" website, I hope you enjoy it");

/************************* the questions ************************/

let score = 0;

// questions #1-5 :

function answer(a,yesAns,noAns){

  let q = prompt(a,'y/n  or  yes/no');
  q = q.toLowerCase();

  while(!q || (q !== 'y' && q !== 'yes' && q !== 'n' && q !== 'no')){

    q = prompt("Please enter y/n or yes/no, Again " + a);
    q = q.toLowerCase();
  }

  if(q === 'y' || q === 'yes'){

    // console.log(yesAns);
    alert(yesAns);
    score++;

  }else if(q === 'n' || q === 'no'){

    // console.log(noAns);
    alert(noAns);
  }
  
}

answer("do you think I am an engineer?","That's right","You wrong I am an engineer");
answer("Do you think I am nerd?","That's right","You wrong I am nerd");
answer("Do you think I love reading?","That's right","You wrong I love reading");
answer("Do you think I have previous job experience?","That's right","You wrong I have");
answer("Do you think I have GPA higher than 80% in high school?","That's right","You wrong, my GPA > 80%");

// question #6 :
// declaring Q6
let Age;

function question6(){

  for(let i=0; i<4; i++){

    Age = prompt("What's my age?");
    Age = parseInt(Age);

    if(Age > 27){
      // console.log("Too High, try again");
      alert("Too High, Try again");

    }else if(Age < 27){
      // console.log("Too Low, try again");
      alert("Too Low, Try again");

    }else if(Age === 27){
      // console.log("Bullseye, That's correct");
      alert("Bullseye, That's correct");
      score++;
      break;

    }else{
      // console.log("Wrong entry!!");
      alert("Wrong entry!!");
    }
  }
  alert("Nice try, in case you failed to guess my age is 27");
}
// calling the question6 function
question6();


// question #7 :
// declaring question7 function
let color;
let list;
let correct;
function question7(){
    list = ['purple','black'];

    for(let j=0; j<6; j++){

    color = prompt("Can you guess one of my favourite colors?");
      color = color.toLowerCase();

      correct = false;

      for(let k=0; k<list.length; k++){

        if(color === list[k]){

          alert("Correct");
          score++;
          correct = true;
          break;
        }
      }

      if(correct){
        break;
      }else{
        alert("Wrong");
      }  
  }

  alert("Good try, these are my favourite colors ( "+ list[0] + " & "+ list[1] + " )");
}

//calling the question7 function
question7();
/************************* final message ************************/



//declaring feedback function

function feedBack(){
  // console.log("Your score is "+ score);
  alert("Your score is "+ score);
  alert("Good job ( " + UserName + " ) take a tour in the site to know me better");
}
//calling feedback function
feedBack();