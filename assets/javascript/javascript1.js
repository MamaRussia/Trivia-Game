$(document).ready(function () {
  // function to play sound
  const x = document.getElementById("myAudio");

  function playAudio() {
    x.play();
  }
  

  let winnerPhoto = {
    photo: "assets/images/winner.gif",
  };
  let loserPhoto = {
    photo: "assets/images/losegame.gif",
  };
  let noAnswerPhoto = {
    photo: "assets/images/noanswer.gif",
  };
  let incorrectPhotos = [
    {
      photo: "assets/images/incorrect1.gif",
    },
    {
      photo: "assets/images/incorrect2.gif",
    },
    {
      photo: "assets/images/incorrect3.gif",
    },
    {
      photo: "assets/images/incorrect4.gif",
    },
    {
      photo: "assets/images/incorrect5.gif",
    },
    {
      photo: "assets/images/incorrect6.gif",
    },
    {
      photo: "assets/images/incorrect7.gif",
    },
    {
      photo: "assets/images/incorrect8.gif",
    },
    {
      photo: "assets/images/incorrect9.gif",
    },
    {
      photo: "assets/images/incorrect10.gif",
    },
  ];
  let questions = [
    {
      question: "By law, what is banned in Japanese restaurants?",
      choice: ["Talking", "Smiling", "Tipping", "Farting"],
      answer: 2,
      photo: "assets/images/tipping.gif",
    },
    {
      question: "43% of women want to try S&M after smelling what?",
      choice: [
        "Rose Petals",
        "Vanilla Extract",
        "Fresh Cut Grass",
        "Brut Cologne",
      ],
      answer: 1,
      photo: "assets/images/vanilla.gif",
    },
    {
      question: "When people are frightened, their ears produce more what?",
      choice: ["Hair", "Mites", "Sweat", "Earwax"],
      answer: 3,
      photo: "assets/images/earwax.gif",
    },
    {
      question:
        "What do Krusty the Clown and Chandler in Friends have an extra one of?",
      choice: ["Nipple", "Shoe", "Scooter", "Sidekick"],
      answer: 0,
      photo: "assets/images/nipple.gif",
    },
    {
      question:
        "Men without what are more likely to get Cirrhosis of the liver?",
      choice: ["Wives", "Cars", "Animals", "Chest Hair"],
      answer: 3,
      photo: "assets/images/chesthair.gif",
    },
    {
      question:
        "98% of Americans feel better about themselves after they do what?",
      choice: [
        "Take a Shower",
        "Flush the Toilet",
        "Clean their Home",
        "Help the Poor",
      ],
      answer: 1,
      photo: "assets/images/toilet.gif",
    },
    {
      question: "What does M&M’s stand for?",
      choice: ["Mmm & Mmmm", "Mark & Maura", "Melt & Mash", "Mars & Murrie's"],
      answer: 3,
      photo: "assets/images/MM.gif",
    },
    {
      question: "What city is further west?",
      choice: [
        "Long Beach, CA",
        "Reno, NV",
        "Los Angeles, CA",
        "Riverside, CA",
      ],
      answer: 1,
      photo: "assets/images/reno.gif",
    },
    {
      question:
        "Who was selected as Glamour magazines “10 Best Dressed College Girls?”",
      choice: [
        "Serena Williams",
        "Ann Coulter",
        "Martha Stewart",
        "Kathy Gifford",
      ],
      answer: 2,
      photo: "assets/images/marthastewart.gif",
    },
    {
      question: "What Dr. Seuss book uses no more than 50 words?",
      choice: [
        "Green Eggs & Ham",
        "The Cat in the Hat",
        "If I Ran the Zoo",
        "Fox in Sox",
      ],
      answer: 0,
      photo: "assets/images/greeneggs.gif",
    },
  ];

  let correctAnswers = 0;
  let wrongAnswers = 0;
  let notAnswered = 0;
  let userGuess = "";
  let running = false;
  let newArray = [];
  let timer = 10;
  let intervalId;

  // questions.forEach(function (e) {
  //     console.log(e);
  // })

  // hides the reset button
  $("#reset").hide();
  // function for start button
  $("#start").on("click", function () {
    $("#start").hide();
    playAudio();
    displayQuestion();
    runTimer();
    // pushes random question to questionSpot
    // for (let i = 0; i < questions.length; i++) {
    //   questionSpot.push(questions[i]);
    // }
  });

  // console.log(questions);

  // display question function
  function displayQuestion() {
    console.log(questions);

    // generate random index in array
    const index = Math.floor(questions.length - 1); // console.log(questions.splice());
    pick = questions[index];
    questions.splice(index, 1);
    console.log(questions.question);
    //   if (pick === 0) {
    //       gameOver()
    //   }
    // console.log(pick);
    //iterates through answers and shows one on screen
    $("#questions").html("<h2>" + pick.question + "</h2>");

    for (let i = 0; i < pick.choice.length; i++) {
      let userPick = $("<div>");
      userPick.addClass("answerchoices");
      userPick.html(pick.choice[i]);
      // assign array position so answer can be checked
      console.log(pick.answer);
      userPick.attr("data-guessvalue", i);
      $("#answers").append(userPick);
    }
    pickAnswer();
  }

  function pickAnswer() {
    // function for when answer clicked
    $(".answerchoices").on("click", function () {
      // userPick array position
      console.log(userGuess);
      userGuess = parseInt($(this).attr("data-guessvalue"));
      // right or wrong answer scenarios
      if (userGuess === pick.answer) {
        stop();
        correctAnswers++;
        userGuess = "";
        $("#answers").html("<h2>Correct! Nice job.</h2>");
        winImg();
        // gameOver();
        // console.log(questions);
      } else {
        stop();
        wrongAnswers++;
        userGuess = "";
        $("#answers").html(
          "<h2>Incorrect. The correct answer is " +
            pick.choice[pick.answer] +
            "</h2>"
        );
        loserImg();
      }
      gameOver()
    });
  }


  function showResult() {
    $(".answerchoices").hide();

    $("#questions").show();
    $("#answers").append("<h3>Answered Correctly: " + correctAnswers + "</h3>");
    $("#answers").append("<h3>Answered Incorrectly: " + wrongAnswers + "</h3>");
    $("#answers").append("<h3>Too Lazy to Click: " + notAnswered + "</h3>");
    $("#reset").show();
    $("#time").hide();
    correctAnswers = 0;
    wrongAnswers = 0;
    notAnswered = 0;
  }

  // timer countdown
  function decrement() {
    $("#time").html("<p><b>Time to Answer: " + timer + " seconds</b></p>");
    timer--;

    // if timer reaches zero
    if (timer === 0) {
      notAnswered++;
      stop();
      $("#answers").html(
        "<h2>Think faster. The correct answer is " +
          pick.choice[pick.answer] +
          "</h2>"
      );
      winImg();
    }
  }
    // timer function
    function runTimer() {
      if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
      }
    }
  
    // stop function
    function stop() {
      running = false;
      clearInterval(intervalId);
    }
  

  function gameOver() {
    // if over 6 correct this shows

    if (correctAnswers > 6) {
      $("#questions").html("<h2>You are the Trivia Master. </h2>");
      $("#answers").append("<img src=" + winnerPhoto.photo + ">");
      showResult();
      // if over 6 wrong this shows
    } else if (wrongAnswers > 6) {
      $("#questions").html("<h2>You are not good at trivia.</h2>");
      $("#answers").append("<img src=" + loserPhoto.photo + ">");
      showResult();

      // if over 6 not answered this shows
    } else if (notAnswered > 6) {
      $("#questions").html("<h2>Is anyone even playing this game?</h2>");
      $("#answers").append("<img src=" + noAnswerPhoto.photo + ">");
      showResult();
    }
  }


  // adds image to the answer when correct
  function winImg() {
    $("#answers").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    $("#time").hide();
    byePic = setTimeout(function () {
      $("#answers").empty();
      $("#time").show();
      timer = 10;
      runTimer();
      displayQuestion();
    }, 5000);
    //
  }
  // adds image to the answer when incorrect
  function loserImg() {
    index = Math.floor(Math.random() * incorrectPhotos.length);
    loserPick = incorrectPhotos[index];
    $("#answers").append("<img src=" + loserPick.photo + ">");
    newArray.push(loserPick);
    $("#time").hide();
    byePic = setTimeout(function () {
      $("#answers").empty();
      $("#time").show();
      timer = 10;
      runTimer();
      displayQuestion();
    }, 5000);
  }

 
});
