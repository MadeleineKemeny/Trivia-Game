//defining vars in functions
var intervalId;
var time;
var indexOfmyquest = 0;
var possibleAnswers;
var correctAnswers = 0;
var incorrectGuesses = 0;
var unansweredQ = 0;
var isUnAnsweredQIncrementOneAtATime=true;

//when game is opened, these features are made active
window.onload = function () {
  $(".show").hide();
  $("#stop").on("click", stop);
  $("#start").on("click", start);
  $("#next").on("click", showAnswer).hide();
  $("#proceed").on("click", returnToGame);
  $(".scorecard").hide()
};

//questions display one at a time; "click" indicates answer and moves to "function showAnswer" /
var myquest = [{
  question: "1. In the Golden Age of Dutch Painting, still life imagery was:",
  answer: ["representation the actual item shown", "religious allegories", "political commentary"],
  correctAnswer: "religious allegories",
  urlImage: "https://media.giphy.com/media/Kxqyq5Q486NVu/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "2. Jacob Lawrence is best known for a series of paintings about:",
  answer: ["The Great Migration", "The Trail of Tears", "Portraits of Abolitionists"],
  correctAnswer: "The Great Migration",
  urlImage: "https://media.giphy.com/media/l4FB5dgbc21nQPKhy/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "3. The Eiffel Tower scandalized Paris when it was built because:",
  answer: ["it resembled a woman spreading her skirts", "it didn't match the city's existing architectural style", "it was built over a Roman-era burial ground"],
  correctAnswer: "it resembled a woman spreading her skirts",
  urlImage: "https://media.giphy.com/media/4cdJGWnSOBqYo/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "4. The &ldquo;Mother of American Modernism&rdquo; is:",
  answer: ["Gertrude Stein", "Georgia O’Keeffe", "Diane Arbus"],
  correctAnswer: "Georgia O’Keeffe",
  urlImage: "https://media.giphy.com/media/3ornjHBJr0NzgqmFSo/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "5. Sculptures looted from the Acropolis are in which museum:",
  answer: ["The British Museum, London", "The Museum of Cycladic Art, Athens", "The Hermitage Museum, St. Petersburg"],
  correctAnswer: "The British Museum, London",
  urlImage: "https://media.giphy.com/media/U8DnMoBzvHSt1AxSkV/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "6. During WWII, contemporary art was confiscated and destroyed, because it was classified as:",
  answer: ["angry", "without monetary value", "degenerate"],
  correctAnswer: "degenerate",
  urlImage: "https://media.giphy.com/media/24FMod5txpeBynO2eS/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "7. The artist, Frieda Kahlo, was married to:",
  answer: ["Leon Trotsky", "Diego Rivera", "Rufino Tamayo"],
  correctAnswer: "Diego Rivera",
  urlImage: "https://media.giphy.com/media/Wxlx4kVDZ7IZsLBhDH/giphy.gif", 
  buttonText: "Proceed to next question",
},
{
  question: "8. Most western-European artists found their benefactors in the form of:",
  answer: ["the Catholic Church", "private comissions by wealthy businessmen", "the monarchy"],
  correctAnswer: "the monarchy",
  urlImage: "https://media.giphy.com/media/Bgxm9NBY96h0s/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "9. The first comprehensive photographic documentation of the Dead Sea Scrolls was commissioned on behalf of:",
  answer: ["Claremont College", "Oxford University", "Harvard Divinity School"],
  correctAnswer: "Claremont College",
  urlImage: "https://media.giphy.com/media/ieNgLZAiId0uA/giphy.gif",
  buttonText: "Proceed to next question",
},
{
  question: "10. Printing in Asia is known to have existed as early as:",
  answer: ["The Goryeo Dynasty in Korea", "The Han Dynasty in China", "The Edo Period in Japan"],
  correctAnswer: "The Han Dynasty in China",
  urlImage: "https://media.giphy.com/media/rHR8qP1mC5V3G/giphy.gif",
  buttonText: "Show my results",
}];

//button displays answer and gif for entertainment value in hidden container "show" behind "gamecontainer"
function showAnswer() {
  $("#display-answer").empty();//cleans previous answers
  $("#display-answer").append("<b>" + myquest[indexOfmyquest].correctAnswer.toUpperCase())
  $("#answerGif").attr("src", myquest[indexOfmyquest].urlImage)
  $(".gamecontainer").hide()
  $(".show").show()
  $("#proceed").html(myquest[indexOfmyquest].buttonText);

}

//after displaying correct answer and gif, hide container and return to "game container"
function returnToGame() {
  $(".gamecontainer").show()
  $(".show").hide()
  indexOfmyquest++;
  showquestions()

  //when reaching index of last item of array, show results
  if (indexOfmyquest === myquest.length) {
    clearInterval(intervalId); //stops clock
    showresults()//shows score
  }
}

//when showing next question in array, clear timer to allow 10 seconds for player input
function showquestions() {
  $("#questions").empty()
  $("#answers").empty()
  $("#next").on("click", showAnswer).show();
  clearInterval(intervalId);
  time = 10;
  $("#time").text("00:10");
  intervalId = setInterval(count, 1000);

  //showing where to end questions based on lenght of array
  if (indexOfmyquest > myquest.length - 1) {
    clearInterval(intervalId);
    showresults()
  }

  //registering and storing answers with radio button clicks
  else {
    $("#questions").html(myquest[indexOfmyquest].question)
    for (var indexA = 0; indexA < myquest[indexOfmyquest].answer.length; indexA++) {
      $("#answers").append("<input class='response' type='radio' name=" + indexOfmyquest + " value=" + indexA + " data-answer='" + myquest[indexOfmyquest].answer[indexA] + "'>" + myquest[indexOfmyquest].answer[indexA] + "<br>")
    }

    //instructions for radio button clicks
    $(".response").on("click", function () {
      var res = $(this).attr("data-answer")

      console.log(res);
      console.log(myquest[indexOfmyquest].correctAnswer.toLowerCase());
      
      
      showAnswer()
      $("#next").on("click", showAnswer).show();
      

      //if correct, add a point to correct answers and pause timer, show gif
      if ((myquest[indexOfmyquest].correctAnswer).toLowerCase() === (res.toLowerCase())) {
        console.log("c: ", (myquest[indexOfmyquest].correctAnswer), (parseInt(res)))
        correctAnswers++
        $("#questions").empty()
        $("#answers").empty()
        $("#next").on("click", showAnswer).show();
        clearInterval(intervalId);
        time = 10;
        $("#time").text("00:10");
        intervalId = setInterval(count, 1000);
      }
       
      //if incorrect, add a point to incorrect answers and pause timer, show gif
      else {
        console.log("i: ", (myquest[indexOfmyquest].correctAnswer), (parseInt(res)))
        incorrectGuesses++
        $("#questions").empty()
        $("#answers").empty()
        $("#next").on("click", showAnswer).show();
        clearInterval(intervalId);
        time = 10;
        $("#time").text("00:10");
        intervalId = setInterval(count, 1000);
      }
      
      //loading successive questions to be displayed at each click event
      $("#next").on("click", showAnswer).show()
    })
  }
}

//show score at end of game
function showresults() {
  console.log(correctAnswers, incorrectGuesses)

  //where to populate results
  $("#results").empty()

  //changing visibility to declare results
  $(".gamecontainer").hide()
  $(".scorecard").show()

  //total score cannot exceed number of questions
  unansweredQ=myquest.length;
  var unansweredResults=unansweredQ-correctAnswers-incorrectGuesses
  
  //html on the fly: statement to declare results
  $("#results").append("<h3>Your results:</h3>")
  $("#results").append("<p>Correct: <span>" + correctAnswers + "</span></p>")
  $("#results").append("<p>Incorrect: <span>" + incorrectGuesses + "</span></p>")
  $("#results").append("<p>Unanswered: <span>" + unansweredResults + "</span></p>")
}
//timer-related thingies
function count() {
  //timer decrementing
  time--;

  //advance to answer if time runs out
  if (time === 0) {

    showAnswer();
  unansweredQ++;
  console.log("unanswered:"+unansweredQ);

//show score after last question/answer dsiplay.
  if (indexOfmyquest === myquest.length) {
  showresults()
  }
  }
  //how to display descending timer
  var converted = timeConverter(time);
  $("#time").text(converted);
}

//defining timer format
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  //adding placeholder in "tens" column of seconds, ex: 0:00
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  //defining end of countdown as 00
  if (minutes === 0) {
    minutes = "00";
  }

  //adding placeholder in "tens" column of seconds, ex: 0:00
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  //what format to display after defining all the characteristics
  return minutes + ":" + seconds;
}

//when hitting BEGIN! button to start and/or reloading the game (and clicking BEGIN button), reset timer, scores, array of questions
function start() {
  reset()
  showquestions()
}

// when hitting STOP! button to pause and/or end the game, stop timer count and show current results
function stop() {
  clearInterval(intervalId);
  showresults()
}

//"reset" function that is part of "start" function
function reset() {
  time = 10;
  indexOfmyquest = 0;
  correctAnswers = 0;
  incorrectGuesses = 0;
  unansweredQ = 0;
  var converted = timeConverter(time);
  $("#time").text(converted)
}