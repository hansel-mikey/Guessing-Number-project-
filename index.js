// using strict mode to find erros easly it helps us to find bad syntax

//topic
// Dom manipulation
// what is dom ? ---- dom means document object model which allows  js to acces html elment and styles changes text and css styles  to manuplate them for ex :- changing the text or changing the color etc
// the dom is a prarent elment of the html and head body emlents are also a child a of dom
// dom and dom methods are not a part of js so dom works becuase it is a part of web apis
// web apis are libaries these are automatically availabe to use which we dont have to import

'use strict';
// READ-ME
// the query secletor is used to select the class so the syntax for the query selector is '.element';
// soo first the query selector selects and element then it slect what has to be done for example given below it has selected .textcontent which will change the text of that selected elemnet

// topic
// here we learn about the changing the content using dom manipulation
// Important
// this will log the data inside the class
// console.log(document.querySelector('.message').textContent);
// READ-ME
// the first elment is to read the element and the seocnd part is to change the elemnt
// document.querySelector('.message').textContent = '🎉 Correct Number !';
//Explaination
// so the first query selctor over here  selects  the box wich will display the number so we change it from '?' to '10'
// document.querySelector('.box-color').textContent = 10;

// topic
// here we learn about the vlaue property using how to get and set and value for it using dom manipulation
// Explaination
// so the second query selctor selects the Score which will change the content from '2' to '15'
// document.querySelector('.display-socre').textContent = 15;
// READ-ME
// to get and vlaue we use .vlaue property
// document.querySelector('.input-style').value = 0;
// Important
// now we as we assgin a value to the 'input-style' we will get the vlaue down in the console.log beacuse the vlaue is now stored
// console.log(document.querySelector('.input-style').value);

// topic
// now here we will learn about the handling the click events

// READ-ME
// now here we will use the eventlistner
// and event is something that happens on a page a mouse moving a mouse click etc
// and eventlistner wait tills the event then react to it for exmample when the mouse click will happen it will automatically react to it
// addEventlistner is and method  of the dom
// topic
// creating a secretnumber
// READ-ME
// here we are defing the serect Number
// so here we used the Math.trunc to round of the random Numbers becuase it gives decmial number
// second we have used a Math.random to genreat random number between 0 t0 20 bt we have used +1 that is beacuse it will only give till 19 bt we want to include 20 thats is y we use +1
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// topic
// creating a score
let score = 20;
let highscore = 0;

// READ-ME
// First we selected the Element using the class name and used a method addEvent listner to catch the click on the check btn then we created a function coz when the click happens the function will excute that will log the vlaue in the input box
// Important now here as we have created a function bt we havent called it bt it will be auotmatically called when the click is done that is the event
// rember the fucntion is a vlaue so it can be used as a value
document.querySelector('.check-button').addEventListener('click', function () {
  // test-case
  // this was aslo used to see if this is really saving the when the check is clicked
  //   console.log(document.querySelector('.input-style').value);
  //   test-case
  //   this was juz to change the content when check btn was clicked
  //   document.querySelector('.message').textContent = '🎉 Correct Number !';
  const guess = Number(document.querySelector('.input-style').value);
  console.log(typeof guess);
  //   now starting with the game implemination
  // first we will check if there is inputed any value or not
  // Important
  // This conditon is used when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number ! ';
  }
  // Important
  // this conditon is used if the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !';
    // READ-ME
    // here we are changing the  form the '?' to the data saved in the 'Number' Variable'
    document.querySelector('.box-color').textContent = secretNumber;
    // topic
    // now learning about css styles
    // synatx is same just we use the .style.propertyname which we want to change ='';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.box-color').style.width = '400px';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.high').textContent = highscore;
    }
  }
  // Important
  // this condition is used if the player inputs a higher Number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High !';
      score--;
      document.querySelector('.display-score').textContent = score;
    }
    // Important
    // this conditon over here is used if the players runs out of points
    else {
      document.querySelector('.message').textContent = '🥹 You Loose ';
      document.querySelector('.display-score').textContent = 0;
    }
  }
  // Important
  // this conditon is used if the players input less number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low !';
      score--;
      document.querySelector('.display-score').textContent = score;
    }
    // Important
    // this conditon over here is used if the players runs out of points
    else {
      document.querySelector('.message').textContent = '🥹 You Loose ';
      document.querySelector('.display-score').textContent = 0;
    }
  }
});

// topic
// impelmenting the agian button functionality
document.querySelector('.btn-again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.box-color').style.width = '200px';
  document.querySelector('.box-color').textContent = '?';
  document.querySelector('.message').textContent = '🎉 Start Gussesing...';
  document.querySelector('.display-score').textContent = '20';
  document.querySelector('.input-style').value = '';
});
