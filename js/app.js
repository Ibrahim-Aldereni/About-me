'use strict';

/***************** get user name and welcome message *******************/

let UserName = prompt("Provide your name please?");
alert("Welcome " + UserName + " to \"About me\" website, I hope you enjoy it");

/************************* the questions ************************/

// question #1 :

let score = 0;

function answer(a,yesAns,noAns){

  let q = prompt(a,'y/n  or  yes/no');
  q = q.toLowerCase();

  while(!q || (q !== 'y' && q !== 'yes' && q !== 'n' && q !== 'no')){

    q = prompt("Please enter y/n or yes/no, Again " + a);
    q = q.toLowerCase();
  }

  if(q === 'y' || q === 'yes'){

    // console.log(yesA);
    alert(yesAns);
    score++;

  }else if(q === 'n' || q === 'no'){

    // console.log(noA);
    alert(noAns);
  }
  
}

answer("do you think I am an engineer?","That's right","You wrong I am an engineer");
answer("Do you think I am nerd?","That's right","You wrong I am nerd");
answer("Do you think I love reading?","That's right","You wrong I love reading");
answer("Do you think I have previous job experience?","That's right","You wrong I have");
answer("Do you think I have GPA higher than 80% in high school?","That's right","You wrong, my GPA > 80%");

alert("your score is "+ score);


// // question #6 :

// // question #7 :

// /************************* final message ************************/

// alert("Good job " + UserName + " take a tour in the site to know me better")