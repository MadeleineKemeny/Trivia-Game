//defining vars in functions
var intervalId;
var time;
var indexOfmyquest = 0;
var possibleAnswers;
var correctAnswers = 0;
var incorrectGuesses = 0;


//when game is opened, these buttons are made active
window.onload = function () {
  $(".show").hide();
  $("#stop").on("click", stop);
  $("#start").on("click", start);
  $("#next").on("click", showAnswer).hide();
  $("#proceed").on("click", returnToGame);
};

//questions display one at a time; "click" indicates answer and moves to "function showAnswer" /
var myquest = [ {
  question: "1. In the Golden Age of Dutch Painting, still life imagery was:",
  answer: ["representation the actual item shown","religious allergories","political commentary"],
  correctAnswer: " " + "religious allergories",
  urlImage: "https://media.giphy.com/media/Kxqyq5Q486NVu/giphy.gif"
},
{
  question: "2. Jacob Lawrence is best known for a series of paintings about:",
  answer: ["The Great Migration","The Trail of Tears","Portraits of Abolitionists"],
  correctAnswer: " " + "The Great Migration",
  urlImage: "https://media.giphy.com/media/l4FB5dgbc21nQPKhy/giphy.gif"
},
{
  question: "3. The Eiffel Tower scandalized Paris when it was built because:",
  answer: ["it resembled a woman spreading her skirts","it didn't match the city's existing architectural style","it was built over a Roman-era burial ground"],
  correctAnswer: " " + "it resembled a woman spreading her skirts",
  urlImage: "https://media.giphy.com/media/4cdJGWnSOBqYo/giphy.gif"
},
{
  question: "4. The &ldquo;Mother of American Modernism&rdquo; is:",
  answer: ["Gertrude Stein","Georgia O'Keeffe","Diane Arbus"],
  correctAnswer: " " + "Georgia O'Keeffe",
  urlImage: "https://media.giphy.com/media/3ornjHBJr0NzgqmFSo/giphy.gif"
},
{
  question: "5. Sculptures looted from the Acropolis are in which museum:",
  answer: ["The British Museum, London","The Museum of Cycladic Art, Athens","The Hermitage Museum, St. Petersburg"],
  correctAnswer: "The British Museum, London",
  urlImage: " " + "https://media.giphy.com/media/U8DnMoBzvHSt1AxSkV/giphy.gif"
},
{
  question: "6. During WWII, contemporary art was confiscated and destroyed, because it was classified as:",
  answer: ["angry","without monetary value","degenerate"],
  correctAnswer: "degenerate",
  urlImage: " " + "https://media.giphy.com/media/24FMod5txpeBynO2eS/giphy.gif"
},
{
  question: "7. The artist, Frieda Kahlo, was married to:",
  answer: ["Leon Trotsky","Diego Rivera","Rufino Tamayo"],
  correctAnswer: "Diego Rivera",
  urlImage: " " + "https://media.giphy.com/media/Wxlx4kVDZ7IZsLBhDH/giphy.gif"
},
{
  question: "8. Most western-European artists found their benefactors in the form of:",
  answer: ["the Catholic Church","private comissions by wealthy businessmen","the monarchy"],
  correctAnswer: "the monarchy",
  urlImage: " " + "https://media.giphy.com/media/Bgxm9NBY96h0s/giphy.gif"
},
{
  question: "9. The first comprehensive photographic documentation of the Dead Sea Scrolls was commissioned on behalf of:",
  answer: ["Claremont College","Oxford University","Harvard Divinity School"],
  correctAnswer: "Claremont College",
  urlImage: " " + "https://media.giphy.com/media/ieNgLZAiId0uA/giphy.gif"
},
{
  question: "10. Printing in Asia is known to have existed as early as:",
  answer: ["The Goryeo Dynasty in Korea","The Han Dynasty in China","The Edo Period in Japan"],
  correctAnswer: "The Han Dynasty in China", 
  urlImage: " " + "https://media.giphy.com/media/rHR8qP1mC5V3G/giphy.gif"
} ];

//button displays answer and gif for entertainment value in hidden container "show" behind "gamecontainer"
function showAnswer(){
  $("#display-answer").empty();
  $("#display-answer").append("<b>"+myquest[indexOfmyquest].correctAnswer.toUpperCase())
  $("#answerGif").attr("src",myquest[indexOfmyquest].urlImage)
  $(".gamecontainer").hide()
  $(".show").show()
}

//after displaying correct answer and gif, hide container and return to "game container"
function returnToGame(){
  $(".gamecontainer").show()
  $(".show").hide()

}

//when showing next question in array, clear timer to allow 10 seconds for player input
function showquestions () {
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
    $("#questions").html(myquest[ indexOfmyquest ].question)
    for (var indexA = 0; indexA < myquest[ indexOfmyquest ].answer.length; indexA++) {
      $("#answers").append("<input class='response' type='radio' name=" + indexOfmyquest + " value=" + indexA + ">" + myquest[ indexOfmyquest ].answer[ indexA ] +"<br>")
    }

    //what do do when a radio button is clicked
    $(".response").on("click", function () {
      var res = $("#answers").children("input:checked").val()
      //playerAnswer.push(res)
      console.log("clicked radio button: ", res)
      showAnswer()
      $("#next").on("click", showAnswer).show();

      //if correct, add a point to correct answers
      if (parseInt(myquest[ indexOfmyquest ].correctAnswer) === parseInt(res)) {
        console.log("c: ", (myquest[ indexOfmyquest ].correctAnswer), (parseInt(res)))
        correctAnswers++
      }
      //if incorrect, add a point to incorrect answers
      else {
        console.log("i: ", (myquest[ indexOfmyquest ].correctAnswer), (parseInt(res)))
        incorrectGuesses++
      }

      //loading successive questions to be displayed at each click event
      indexOfmyquest++
      showquestions()
      $("#next").on("click", showAnswer).show()
    })
  }
}

//show score at end of game
function showresults () {
  console.log(correctAnswers, incorrectGuesses)

  //where to find data to populate results
  $("#questions").empty()
  $("#answers").empty()

  //html on the fly: statement to declare results
  $("#questions").append("<h3>Your results:</h3>")

  var unanswered = myquest.length - correctAnswers - incorrectGuesses
  console.log("unanswered: ", unanswered)
  $("#questions").append("<p>Correct: <span>" + correctAnswers + "</span></p>")
  $("#questions").append("<p>Incorrect: <span>" + incorrectGuesses + "</span></p>")
  $("#questions").append("<p>Unanswered: <span>" + unanswered + "</span></p>")
  $("#next").on("click", showAnswer).hide();
  

}
//timer thingies
function count () {
  //timer decrementing
  time--;

  //advance to next quetion if time runs out
  if (time === 0) {
    indexOfmyquest++
    showquestions()
  }
  //how to display descending timer
  var converted = timeConverter(time);
  $("#time").text(converted);

  //wait for "PROCEED" click to begin countdown again: clearInterval to reset with each new question
}

//defining timer format
function timeConverter (t) {
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
function start () {
  reset()
  showquestions()
}

// when hitting STOP! button to pause and/or end the game, stop timer count and show current results
function stop () {
  clearInterval(intervalId);
  showresults()
}

//"reset" function that is part of "start" function
function reset(){
  time=10;
  indexOfmyquest = 0;
  correctAnswers = 0;
  incorrectGuesses = 0;
  var converted = timeConverter(time);
  $("#time").text(converted)
}