$(document).ready(function () {
    // How can I add images that show when answer is not correct
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
    // function to play sound
    var x = document.getElementById("myAudio"); 

    function playAudio() { 
      x.play(); 
    } 
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var notAnswered = 0;
    var userGuess = "";
    var running = false;
    var qCount = questions.length;
    let pick;
    let index;
    var newArray = [];
    var questionSpot = [];
    var timer = 10;
    var intervalId;
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
    // hides the reset button
    $("#reset").hide();
    // function for start button
    $("#start").on("click", function () {
        $("#start").hide();
        playAudio();
        displayQuestion();
        runTimer();

    })
    // display question function
    function displayQuestion() {

      index = Math.floor(questions.length - 1);
      pick = questions[index];
      questions.splice(index, 1);
      console.log(`${pick.question}`);
      $("#questions").html(`<h2>${pick.question}</h2>`);
        
      for (const i of pick.choice) {
        console.log(typeof i);

        let choiceDiv = $('<div>');
         choiceDiv.addClass('answerchoices')
        choiceDiv.attr('data-guessvalue', i)
        $(choiceDiv).html(i)
        $('#choices').append(choiceDiv)
         }
        
    }
  
     // function for when answer clicked
     $(".answerchoices").on("click", function () {
      // userPick array position
      userGuess = parseInt($(this).attr("data-guessvalue"));
      // right or wrong answer scenarios
      if (userGuess === pick.answer) {
          stop();
          correctAnswers++;
          userGuess = "";
          $("#answers").html("<h2>Correct! Nice job.</h2>");
          hidePicture();
      } else {
          stop();
          wrongAnswers++;
          userGuess = "";
          $("#answers").html("<h2>Incorrect. The correct answer is " + pick.choice[pick.answer] + "</h2>");
          // loserImg();
          hidePicture();
      }
  })
  
  
    // timer function
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    // timer countdown
    function decrement() {
        $("#time").html("<p><b>Time to Answer: " + timer + " seconds</b></p>");
        timer--;

        // if timer reaches zero
        if (timer === 0) {
            notAnswered++;
            stop();
            $("#answers").html("<h2>Think faster. The correct answer is " + pick.choice[pick.answer] + "</h2>");
            hidePicture();
        }
    }
    // stop function
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    // adds and hide image to question
    function hidePicture() {
        // adds image to the answer
        $("#answers").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        questions.splice(index, 1);
        $("#time").hide();
        byePic = setTimeout(function () {
            $("#answers").empty();
            $("#time").show();
            timer = 10;
            // if over 6 correct this shows
            if ((questions === undefined || questions.length == 0 && correctAnswers > 6)) {
                $("#questions").empty();
                $("#questions").html("<h2>You are the Trivia Master. </h2>");
                $("#answers").append("<h3>Answered Correctly: " + correctAnswers + "</h43>");
                $("#answers").append("<h3>Answered Incorrectly: " + wrongAnswers + "</h3>");
                $("#answers").append("<h3>Too Lazy to Click: " + notAnswered + "</h3>");
                $("#answers").append("<img src=" + winnerPhoto.photo + ">");
                $("#reset").show();
                $("#time").hide();
                correctAnswers = 0;
                wrongAnswers = 0;
                notAnswered = 0;
                // if over 6 wrong this shows
            } else if ((wrongAnswers + correctAnswers + notAnswered) === qCount && wrongAnswers > 6) {
                $("#questions").empty();
                $("#questions").html("<h2>You are not good at trivia.</h2>");
                $("#answers").append("<h4>Answered Correctly: " + correctAnswers + "</h4>");
                $("#answers").append("<h4>Answered Incorrectly: " + wrongAnswers + "</h4>");
                $("#answers").append("<h4>Too Lazy to Click: " + notAnswered + "</h4>");
                $("#answers").append("<img src=" + loserPhoto.photo + ">");
                $("#reset").show();
                $("#time").hide();
                correctAnswers = 0;
                wrongAnswers = 0;
                notAnswered = 0;
                // if over 6 not answered this shows
            } else if ((wrongAnswers + correctAnswers + notAnswered) === qCount && notAnswered > 6) {
                $("#questions").empty();
                $("#questions").html("<h2>Is anyone even playing this game?</h2>");
                $("#answers").append("<h4>Answered Correctly: " + correctAnswers + "</h4>");
                $("#answers").append("<h4>Answered Incorrectly: " + wrongAnswers + "</h4>");
                $("#answers").append("<h4>Too Lazy to Click: " + notAnswered + "</h4>");
                $("#answers").append("<img src=" + noAnswerPhoto.photo + ">");
                $("#reset").show();
                $("#time").hide();
                correctAnswers = 0;
                wrongAnswers = 0;
                notAnswered = 0;
            } else {
                runTimer();
                displayQuestion();
            }
        }, 5000);
    }

    // I need this working correctly!!!!!!!!!!!!!!!!!!!!!!
    // // // loser pic function
    // function loserImg() {
    //     index = Math.floor(Math.random() * incorrectPhotos.length);
    //     loserPick = incorrectPhotos[index];


    //     $("#answers").append("<img src=" + loserPick.photo + ">");
    //     newArray.push(loserPick);
    //     incorrectPhotos.splice(index, 1);
    //     $("#time").hide();
    //     byePic = setTimeout(function () {
    //         $("#answers").empty();
    //         $("#time").show();
    //         timer = 10;
    //         // if over 6 correct this shows
    //         if ((wrongAnswers + correctAnswers + notAnswered) === qCount && correctAnswers > 6) {
    //             $("#questions").empty();
    //             $("#questions").html("<h2>You are the Trivia Master. </h2>");
    //             $("#answers").append("<h4>Answered Correctly: " + correctAnswers + "</h4>");
    //             $("#answers").append("<h4>Answered Incorrectly: " + wrongAnswers + "</h4>");
    //             $("#answers").append("<h4>Too Lazy to Click: " + notAnswered + "</h4>");
    //             $("#answers").append("<img src=" + winnerPhoto.photo + ">");
    //             $("#reset").show();
    //             $("#time").hide();
    //             correctAnswers = 0;
    //             wrongAnswers = 0;
    //             notAnswered = 0;
    //             // if over 6 wrong this shows
    //         } else if ((wrongAnswers + correctAnswers + notAnswered) === qCount && wrongAnswers > 6) {
    //             $("#questions").empty();
    //             $("#questions").html("<h2>You are not good at trivia.</h2>");
    //             $("#answers").append("<h4>Answered Correctly: " + correctAnswers + "</h4>");
    //             $("#answers").append("<h4>Answered Incorrectly: " + wrongAnswers + "</h4>");
    //             $("#answers").append("<h4>Too Lazy to Click: " + notAnswered + "</h4>");
    //             $("#answers").append("<img src=" + loserPhoto.photo + ">");
    //             $("#reset").show();
    //             $("#time").hide();
    //             correctAnswers = 0;
    //             wrongAnswers = 0;
    //             notAnswered = 0;
    //             // if over 6 not answered this shows
    //         } else if ((wrongAnswers + correctAnswers + notAnswered) === qCount && notAnswered > 6) {
    //             $("#questions").empty();
    //             $("#questions").html("<h2>Is anyone even playing this game?</h2>");
    //             $("#answers").append("<h4>Answered Correctly: " + correctAnswers + "</h4>");
    //             $("#answers").append("<h4>Answered Incorrectly: " + wrongAnswers + "</h4>");
    //             $("#answers").append("<h4>Too Lazy to Click: " + notAnswered + "</h4>");
    //             $("#answers").append("<img src=" + noAnswerPhoto.photo + ">");
    //             $("#reset").show();
    //             $("#time").hide();
    //             correctAnswers = 0;
    //             wrongAnswers = 0;
    //             notAnswered = 0;
    //         } else {
    //             runTimer();
    //             displayQuestion();
    //         }
    //     }, 5000);
    // }

    // reset the game
    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#time").show();
        $("#answers").empty();
        $("#questions").empty();
        for (var i = 0; i < questionSpot.length; i++) {
            questions.push(questionSpot[i]);
        }
        runTimer();
        displayQuestion();
    })
})