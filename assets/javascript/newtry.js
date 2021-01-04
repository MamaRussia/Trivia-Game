let correctAnswers = 0;
const wrongAnswers = 0;
const startBtn = document.querySelector('button');
const choiceSpot = document.querySelector('#answers');
let answerChoices = document.querySelectorAll('.answerchoices');
let userGuess = '';

let notAnswered = 0;
startBtn.addEventListener('click', showQs);

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
  const index = Math.floor(questions.length - 1);
  const pick = questions[index];
  // const choiceSpot = document.querySelector('#answers');

  for (let i = 0; i < pick.choice.length; i++) {
    const choices = document.createElement('div');
    choices.classList = 'answerchoices';
    console.log(choices);
    choices.innerHTML = pick.choice[i];
    choices.setAttribute('data-guessvalue', i);
    choiceSpot.appendChild(choices);
    choices.addEventListener('mousedown', e => {
      userGuess = e.currentTarget.getAttribute('data-guessvalue');
      console.log(typeof userGuess);
      if (userGuess === pick.answer.toString()) {
        console.log('Finally joffrey');
      }
     
      

    })
    hideStart();
      playAudio();
      timer();
  }
  console.log(typeof pick.answer);
}

function handleGuessClick() {
  answerChoices.forEach(answr => {
    console.log(answr);
    // console.log(e.currentTarget);
  })

  
}



function pickAnswer() {

  answerChoices.forEach(answr => {
    console.log(answr);
   
  })

  // for (let i = 0; i < answerChoices.length; i++) {
  //   console.log(answerChoices[i]);
  //   console.log(e.currentTarget);
    
  // }

  // userGuess = parseInt(userPick);

  // if (userGuess === pick.answer) {
  //   correctAnswers++;
  //   userGuess = '';
  // }
  // console.log(answerChoices);
}

// answerChoices.addEventListener('click', pickAnswer);

// console.log(startBtn);

function hideStart() {
  const startBtn = document.querySelector('button');
  startBtn.style.display = 'none';
}

function winImg() {
  const index = Math.floor(questions.length - 1);
  const imageSelected = questions[index];
  const winArrayPics = [];
  const imageSpot = document.getElementById('answers');

  imageSpot.innerHTML = `"<img src=${imageSelected.photo}>"`;

  winArrayPics.push(imageSelected);
  console.log(winArrayPics);
}
function loseImg() {
  const index = Math.floor(questions.length - 1);
  const imageSelected = incorrectPhotos[index];
  const loseArrayPics = [];
  const imageSpot = document.getElementById('answers');

  imageSpot.innerHTML = `"<img src=${imageSelected.photo}>"`;
  loseArrayPics.push(imageSelected);
}

function decrement() {
  const time = document.querySelector('#time');
  const pick = questions;
  let timer = 10;
  time.innerHTML = `<p><b>Time to Answer: ${timer} seconds</b></p>`;
  timer--;

  // if timer reaches zero
  if (timer === 0) {
    notAnswered++;
    const choiceSpot = document.querySelector('#answers');
    choiceSpot.innerHTML = `<h2>Think faster. The correct answer is ${
      pick.choice[pick.answer]
    }</h2>`;
    winImg();
  }
}
function startTimer(duration, display) {
  let timer = duration;
  let seconds;
  setInterval(function () {
    // minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    // minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? `${seconds}` : seconds;

    display.textContent = `Time to answer:  ${seconds}`;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function timer() {
  const countdown = 10;
  const display = document.querySelector('#time');
  startTimer(countdown, display);
}
