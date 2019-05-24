//timer controler

window.onload = function () {
  $(".show").hide()
  $("#stop").on("click", stop);
  $("#start").on("click", start);
  $("#next").on("click", showAnswer)
  $("#proceed").on("click", returnToGame)
};

function returnToGame(){
  $(".gamecontainer").show()
  $(".show").hide()

}

function showAnswer(){
  
  $("#display-answer").append("<b>"+myquest[indexOfmyquest].correctAnswer)
  $("#answerGif").attr("src",myquest[indexOfmyquest].urlImage)
  $(".gamecontainer").hide()
  $(".show").show()
}

//questions display one at a time; "click" indicates answer and moves to next question /
var myquest = [ {
  question: "1. In the Golden Age of Dutch Painting, still life imagery was:",
  answer: ["representation the actual item shown","religious allergories","political commentary"],
  correctAnswer: "religious allergories"
},
{
  question: "2. Jacob Lawrence is best known for a series of paintings about:",
  answer: ["The Great Migration","The Trail of Tears","Portraits of Abolitionists"],
  correctAnswer: "The Great Migration"
},
{
  question: "3. The Eiffel Tower scandalized Paris when it was built because:",
  answer: ["it resembled a woman spreading her skirts","it didn't match the city's existing architectural style","it was built over a Roman-era burial ground"],
  correctAnswer: "it resembled a woman spreading her skirts",
  urlImage: "https://media.giphy.com/media/4cdJGWnSOBqYo/giphy.gif"
},
{
  question: "4. The &ldquo;Mother of American Modernism&rdquo; is:",
  answer: ["Gertrude Stein","Georgia O'Keeffe","Diane Arbus"],
  correctAnswer: "Georgia O'Keeffe"
},
{
  question: "5. Sculptures looted from the Acropolis are in which museum:",
  answer: ["The British Museum, London","The Museum of Cycladic Art, Athens","The Hermitage Museum, St. Petersburg"],
  correctAnswer: "The British Museum, London"
},
{
  question: "6. During WWII, contemporary art was confiscated and destroyed, because it was classified as:",
  answer: ["angry","without monetary value","degenerate"],
  correctAnswer: "degenerate"
},
{
  question: "7. The artist, Frieda Kahlo, was married to:",
  answer: ["Leon Trotsky","Diego Rivera","Rufino Tamayo"],
  correctAnswer: "Diego Rivera"
},
{
  question: "8. Most western-European artists found their benefactors in the form of:",
  answer: ["the Catholic Church","private comissions by wealthy businessmen","the monarchy"],
  correctAnswer: "the monarchy"
},
{
  question: "9. The first comprehensive photographic documentation of the Dead Sea Scrolls was commissioned on behalf of:",
  answer: ["Claremont College","Oxford University","Harvard Divinity School"],
  correctAnswer: "Claremont College"
},
{
  question: "10. Printing in Asia is known to have existed as early as:",
  answer: ["The Goryeo Dynasty in Korea","The Han Dynasty in China","The Edo Period in Japan"],
  correctAnswer: "The Han Dynasty in China", 
  urlImage: "https://media.giphy.com/media/rHR8qP1mC5V3G/giphy.gif"
} ];

var intervalId;
var time;
var indexOfmyquest = 0;
var possibleAnswers;
var correctAnswers = 0;
var incorrectGuesses = 0;
//var playerAnswer = [];



function showquestions () {


  $("#questions").empty()
  $("#answers").empty()
  clearInterval(intervalId);
  time = 10;
  $("#time").text("00:10");
  intervalId = setInterval(count, 1000);


  if (indexOfmyquest > myquest.length - 1) {
    clearInterval(intervalId);
    showresults()
  }
  else {
    $("#questions").html(myquest[ indexOfmyquest ].question)
    for (var indexA = 0; indexA < myquest[ indexOfmyquest ].answer.length; indexA++) {
      $("#answers").append("<input class='response' type='radio' name=" + indexOfmyquest + " value=" + indexA + ">" + myquest[ indexOfmyquest ].answer[ indexA ] +"<br>")
    }


    $(".response").on("click", function () {

      var res = $("#answers").children("input:checked").val()
      //playerAnswer.push(res)
      console.log("clicked radio button: ", res)


      if (parseInt(myquest[ indexOfmyquest ].correctAnswer) === parseInt(res)) {
        console.log("c: ", (myquest[ indexOfmyquest ].correctAnswer), (parseInt(res)))
        correctAnswers++
      }
      else {
        console.log("i: ", (myquest[ indexOfmyquest ].correctAnswer), (parseInt(res)))
        incorrectGuesses++
      }

      indexOfmyquest++
      showquestions()

    })
  }
}

function showresults () {


  console.log(correctAnswers, incorrectGuesses)

  $("#questions").empty()
  $("#answers").empty()

  $("#questions").append("<h3>Your results:</h3>")

  var unanswered = myquest.length - correctAnswers - incorrectGuesses
  console.log("unanswered: ", unanswered)
  $("#questions").append("<p>Correct: <span>" + correctAnswers + "</span></p>")
  $("#questions").append("<p>Incorrect: <span>" + incorrectGuesses + "</span></p>")
  $("#questions").append("<p>Unanswered: <span>" + unanswered + "</span></p>")

}

function count () {
  time--;

  if (time === 0) {
    indexOfmyquest++
    showquestions()
  }
  var converted = timeConverter(time);
  $("#time").text(converted);
}

function timeConverter (t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


function start () {
  reset()
  showquestions()
}

// start()


function stop () {
  clearInterval(intervalId);
  showresults()
}

function reset(){
  time=10;
  indexOfmyquest = 0;
  correctAnswers = 0;
  incorrectGuesses = 0;
  var converted = timeConverter(time);
  $("#time").text(converted);
}