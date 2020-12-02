const correctAnswers = 0;
const wrongAnswers = 0;
let notAnswered = 0;

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
  const questionSelected = questions[index];
  const questionSpot = document.getElementById('questions');
  questions.splice(index, 1);
  questionSpot.innerHTML = `<h2>${questionSelected.question}</h2>`;
  console.log(questionSelected);
  console.log(questionSpot);

  //   for (let i = 0; i < questionSelected.choice.length; i++) {
  //     const userPick = `<div>`;
  //     userPick.addClass('answerchoices');
  //     userPick.html(questionSelected.choice[i]);
  //     // assign array position so answer can be checked
  //     console.log(questionSelected.answer);
  //     userPick.attr('data-guessvalue', i);
  //     $('#answers').append(userPick);
  //   }

  playAudio();
}

function showAnswers() {
  const index = Math.floor(questions.length - 1);
  const answerFromQuestionSelected = questions[index];
  const answerSpot = document.getElementById('answers');
  questions.splice(index, 1);
  answerSpot.innerHTML = `<h2>${answerFromQuestionSelected.answer}</h2>`;
  console.log(answerFromQuestionSelected);
  console.log(answerSpot);

  //   if (questionSelected === -1) {
  //     stop();
  //   } else {
  //     showQs();
  //   }

  playAudio();
}

function winImg() {
  const index = Math.floor(questions.length - 1);
  const imageSelected = questions[index];
  const newArray = [];
  const imageSpot = document.getElementById('answers');

  imageSpot.append(`<img src=${imageSelected.photo}>`);
  newArray.push(imageSelected);
  //   $('#time').hide();
  //   byePic = setTimeout(function () {
  //     $('#answers').empty();
  //     $('#time').show();
  //     timer = 10;
  //     runTimer();
  //     displayQuestion();
  //   }, 5000);
  //
}

function loseImg() {
  const index = Math.floor(questions.length - 1);
  const imageSelected = incorrectPhotos[index];
  const newArray = [];
  const imageSpot = document.getElementById('answers');

  imageSpot.append(`<img src=${imageSelected.photo}>`);
  newArray.push(imageSelected);
  //   $('#time').hide();
  //   byePic = setTimeout(function () {
  //     $('#answers').empty();
  //     $('#time').show();
  //     timer = 10;
  //     runTimer();
  //     displayQuestion();
  //   }, 5000);
  //
}

function runTimer() {
  let running;
  let intervalId;
  let timer = 10;

  if (!running) {
    intervalId = setInterval(runTimer, 1000);
    running = true;
    timer--;
  }

  if (timer === 0) {
    notAnswered++;
    stop();
  }
}

function stop() {
  let running;
  let intervalId;
  running = false;
  clearInterval(intervalId);
}
