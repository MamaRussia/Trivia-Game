let correctAnswers = 0;
let notAnswered = 0;
let userGuess = '';
const wrongAnswers = 0;
let index;
let pick;
const startBtn = document.querySelector('button');
const questionSpot = document.querySelector('#questions');
const choiceSpot = document.querySelector('#choices');
const imgSpot = document.querySelector('#img');
var choiceDiv = document.createElement('div');
const time = document.querySelector('#time');
let answrChoices = document.querySelectorAll('.answerchoices');

const winnerPhoto = {
  photo: 'assets/images/winner.gif',
};
const loserPhoto = {
  photo: 'assets/images/losegame.gif',
};
const noAnswerPhoto = {
  photo: 'assets/images/noanswer.gif',
};
const incorrectPhotos = [
  {
    photo: 'assets/images/incorrect1.gif',
  },
  {
    photo: 'assets/images/incorrect2.gif',
  },
  {
    photo: 'assets/images/incorrect3.gif',
  },
  {
    photo: 'assets/images/incorrect4.gif',
  },
  {
    photo: 'assets/images/incorrect5.gif',
  },
  {
    photo: 'assets/images/incorrect6.gif',
  },
  {
    photo: 'assets/images/incorrect7.gif',
  },
  {
    photo: 'assets/images/incorrect8.gif',
  },
  {
    photo: 'assets/images/incorrect9.gif',
  },
  {
    photo: 'assets/images/incorrect10.gif',
  },
];

const questions = [
  {
    question: 'By law, what is banned in Japanese restaurants?',
    choice: ['Talking', 'Smiling', 'Tipping', 'Farting'],
    answer: 2,
    photo: 'assets/images/tipping.gif',
  },
  {
    question: '43% of women want to try S&M after smelling what?',
    choice: [
      'Rose Petals',
      'Vanilla Extract',
      'Fresh Cut Grass',
      'Brut Cologne',
    ],
    answer: 1,
    photo: 'assets/images/vanilla.gif',
  },
  {
    question: 'When people are frightened, their ears produce more what?',
    choice: ['Hair', 'Mites', 'Sweat', 'Earwax'],
    answer: 3,
    photo: 'assets/images/earwax.gif',
  },
  {
    question:
      'What do Krusty the Clown and Chandler in Friends have an extra one of?',
    choice: ['Nipple', 'Shoe', 'Scooter', 'Sidekick'],
    answer: 0,
    photo: 'assets/images/nipple.gif',
  },
  {
    question: 'Men without what are more likely to get Cirrhosis of the liver?',
    choice: ['Wives', 'Cars', 'Animals', 'Chest Hair'],
    answer: 3,
    photo: 'assets/images/chesthair.gif',
  },
  {
    question:
      '98% of Americans feel better about themselves after they do what?',
    choice: [
      'Take a Shower',
      'Flush the Toilet',
      'Clean their Home',
      'Help the Poor',
    ],
    answer: 1,
    photo: 'assets/images/toilet.gif',
  },
  {
    question: 'What does M&M’s stand for?',
    choice: ['Mmm & Mmmm', 'Mark & Maura', 'Melt & Mash', "Mars & Murrie's"],
    answer: 3,
    photo: 'assets/images/MM.gif',
  },
  {
    question: 'What city is further west?',
    choice: ['Long Beach, CA', 'Reno, NV', 'Los Angeles, CA', 'Riverside, CA'],
    answer: 1,
    photo: 'assets/images/reno.gif',
  },
  {
    question:
      'Who was selected as Glamour magazines “10 Best Dressed College Girls?”',
    choice: [
      'Serena Williams',
      'Ann Coulter',
      'Martha Stewart',
      'Kathy Gifford',
    ],
    answer: 2,
    photo: 'assets/images/marthastewart.gif',
  },
  {
    question: 'What Dr. Seuss book uses no more than 50 words?',
    choice: [
      'Green Eggs & Ham',
      'The Cat in the Hat',
      'If I Ran the Zoo',
      'Fox in Sox',
    ],
    answer: 0,
    photo: 'assets/images/greeneggs.gif',
  },
];

function playAudio() {
  const x = document.getElementById('myAudio');
  x.play();
}



function showQs() {
  index = Math.floor(questions.length - 1);
  pick = questions[index];
  questions.splice(index, 1);
  console.log(`${pick.question}`);
  questionSpot.innerHTML = `<h2>${pick.question}</h2>`;
   for (const i of pick.choice) {
    let choiceDiv = document.createElement('div');
    choiceDiv.classList = 'answerchoices';
    choiceDiv.innerHTML = i;
    console.log(typeof i);
    choiceSpot.appendChild(choiceDiv)
    
   }
  
  let answrChoices = document.querySelectorAll('.answerchoices');
  for (let e = 0; e < answrChoices.length ; e++) {
    answrChoices[e].setAttribute('data-guessvalue', e);
  }


}

function myFunction(event) { 
  var x = event.target;
  document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
}



// function checkGuess() {
   
//     choiceDiv.addEventListener('mousedown', e => {
//     userGuess = e.currentTarget.getAttribute('data-guessvalue')
//     console.log(userGuess);
//  })
  
 
//   // ans.addEventListener('mousedown', e => {

//   //   console.log(e.currentTarget);
//   // })

//   // choiceDiv.addEventListener('mousedown', e => {
//   //   userGuess = e.currentTarget.getAttribute('data-guessvalue');
//   //   console.log(userGuess);
//   //   console.log(pick.answer);
 
//   //   // if (userGuess !== pick.answer.toString()) {
//   //   //   console.log('Finally sir');
//   //   //   // time.style.display = 'none'
//   //   //   questionSpot.innerHTML = `<h2>Incorrect. The correct answer is ${pick.choice[pick.answer]}</h2>`;
//   //   //   loseImg()
  
//   //   // } else {
//   //   //   questionSpot.innerHTML = `<h2>Correct! Nice Job</h2>`;
//   //   //   choiceSpot.innerHTML = `"<img src=${pick.photo}>"`;
//   //   //   setTimeout(showQs, 3000)
//   //   //   e.preventDefault()
//   //   //   // setTimeout(loseImg, 500);
//   //   //   // clearTimeout(loser)
//   //   //   }
//   //   })
   
// }


function hideStart() {
  startBtn.style.display = 'none';
}
startBtn.addEventListener('click', showQs);


function loseImg() {
  const index = Math.floor(Math.random() * incorrectPhotos.length);
  const imageSelected = incorrectPhotos[index];
 incorrectPhotos.splice(index, 1)
  console.log(imageSelected);
  choiceSpot.innerHTML = `"<img src=${imageSelected.photo}>"`;
  // setTimeout(showQs, 3000)
}

function winImg() {
  index = Math.floor(questions.length - 1);
  pick = questions[index];
  questions.splice(index, 2);
  console.log(pick.photo);
  // questions.splice(index, 0);
  // console.log(pick.photo);
  choiceSpot.innerHTML = `"<img src=${pick.photo}>"`;

}




// function timer() {
//   let timer = document.querySelector('#time')
//   let time = 10

//   setInterval(function() {
//     timer.innerHTML = `Time to answer:  ${time}`;
//     time--;
//   }, 1000)
// if (time === 0) {
//   notAnswered++;
//   answerSpot.innerHTML = `<h2>Think faster. The correct answer is ${
//     pick.choice[pick.answer]
//     }</h2>`;
//   timer()
// }

// }



// startBtn.addEventListener('click', showQs);



