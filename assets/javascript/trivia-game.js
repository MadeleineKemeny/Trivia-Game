// questions display one at a time; "click" indicates answer and moves to next question //
var myquest = [{
                question:   "1. In the Golden Age of Dutch Painting, still life imagery was:",
                answer:     ["representation the actual item shown" + " ","religious allergories" + " ","political commentary" + " "],
                correctAnswer: 2
                },   
                {
                question:   "2. Jacob Lawrence is best known for a series of paintings about:",
                answer:     ["The Great Migration" + " ","The Trail of Tears" + " ","Portraits of Abolitionists" + " "],
                correctAnswer: 0
                },
                {
                question:   "3. The Eiffel Tower scandalized Paris when it was built because:",
                answer:     ["it resembled a woman spreading her skirts" + " ","it didn't match the city's existing architectural style" + " ","it was built over a Roman-era burial ground" + " "],
                correctAnswer: 0
                },
                {
                question:   "4. The &ldquo;Mother of American Modernism&rdquo; is:",
                answer:     ["Gertrude Stein" + " ","Georgia O'Keefe" + " ","Diane Arbus" + " "],
                correctAnswer: 1
                },
                {
                question:   "5. Sculptures looted from the Acropolis are in which museum:",
                answer:    ["The British Museum, London" + " ","The Museum of Cycladic Art, Athens" + " ","The Hermitage Museum, St. Petersburg" + " "],
                correctAnswer: 0
                },
                {
                question:   "6. During WWII, contemporary art was confiscated and destroyed, because it was classified as:",
                answer:     ["angry" + " ","without monetary value" + " ","degenerate" + " "],
                correctAnswer: 3
                },
                {
                question:   "7. The artist, Frieda Kahlo, was married to:",
                answer:     ["Leon Trotsky" + " ","Diego Rivera" + " ","Rufino Tamayo" + " "],
                correctAnswer: 1
                },
                {
                question:   "8. Most western-European artists found their benefactors in the form of:",
                answer:     ["the Catholic Church" + " ","private comissions by wealthy businessmen" + " ","the monarchy" + " "],
                correctAnswer: 0
                },
                {
                question:   "9. The first comprehensive photographic documentation of the Dead Sea Scrolls was commissioned on behalf of:",
                answer:     ["Claremont College" + " ","Oxford University" + " ","Harvard Divinity School" + " "],
                correctAnswer: 0
                },
                {
                question:   "10. Printing in Asia is known to have existed as early as:",
                answer: ["The Goryeo Dynasty in Korea" + " ","The Han Dynasty in China" + " ","The Edo Period in Japan" + " "],
                correctAnswer: 1
                }];

var currentQuestion = 0;
var possibleAnswers;
var correctAnswers=0;
var incorrectGuesses=0;
var playerAnswer = [];
var timeCounter = 60;
var timer;


function countdown(){
    timeCounter--
    $("#timeRemaining").text(timeCounter)
    if (timeCounter === 0){
        clearInterval(timer);
        showresults()
    }

}

function showquestions(){

    $("#questions").empty()
    $("#answers").empty()

    if (currentQuestion > myquest.length-1){
        showresults()
    }

    $("#questions").text(myquest[currentQuestion].question)
    for (var indexA=0; indexA < myquest[currentQuestion].answer.length; indexA++){
       $("#answers").append("<input type='radio' value=" + indexA + ">" + myquest[currentQuestion].answer[indexA])
    }
    
    $("#answers").append("<br><br><button id='next'>Next question!</>")
    
    $("#next").on("click", function(){
    
        var res = $("#answers").children("input:checked").val()
        playerAnswer.push(res)
        console.log(playerAnswer)
        currentQuestion++
        showquestions()
      
    })

}

function showresults(){

    for (var i = 0; i < playerAnswer.length; i++){
     
        if (parseInt(myquest[i].correctAnswer) === parseInt(playerAnswer)){
            correctAnswers++
        }
        else{
            incorrectGuesses++
        }
    }
    $("#questions").empty()
    $("#answers").empty()
    $("#questions").text("and the result is.......")


    $("#correct").text(correctAnswers)
    $("#incorrect").text(incorrectGuesses)
    $("#unaswered").text(myquest.length - correctAnswers - incorrectGuesses)

}

function start(){
    timer= setInterval(countdown, 1000);
    showquestions()
}

start()
