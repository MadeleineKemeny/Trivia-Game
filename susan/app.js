$(document).ready(function() {

    //Begin by creating my variables and setting up my questions and answers.

    var correct = 0

    var wrong = 0

    var unAnswered = 0

    var index = 0;

    var questions = [{

            prompt: "Who is the creator of the Peanuts comic strip?",
            answerArray: ["A. Walt Disney", "B. Charles M. Schulz", "C. Jim Davis", "D. Cathy Guisewite"],
            rightAnswer: "B. Charles M. Schultz",
            image: "https://media.giphy.com/media/KrtoScj4fDsHK/giphy.gif"

        },

        {

            prompt: "What is the name of Charlie Brown's dog?",
            answerArray: ["A. Snoopy", "B. Goofy", "C. Lassie", "D. Sparky"],
            rightAnswer: "A. Snoopy",
            image: ""

        },

        {

            prompt: "What position did Charlie Brown play on his baseball team?",
            answerArray: ["A. Bat Boy", "B. First Base", "C. Right Field", "D. Pitcher"],
            rightAnswer: "D. Pitcher",
            image: ""

        },

        {

            prompt: "Who was Linus waiting for in the pumkin patch on Halloween Night?",
            answerArray: ["A. The Great Pumpkin", "B. Santa Claus", "C. Charlie Brown", "D. The WWI Flying Ace"],
            rightAnswer: "B. Charles M. Schultz",
            image: "https://media.giphy.com/media/5knp3kuvvvnW/giphy.gif"

        },

        {

            prompt: "The statue of what composer is on Schroeder piano?",
            answerArray: ["A. Mozart", "B. Brahams", "C. Beethoven", "SnoopDog"],
            rightAnswer: "C. Beethoven",
            image: ""

        },

        {

            prompt: "Charles Shultz's uncle game him a nickname that stuck with him throught life - what was that?",
            answerArray: ["A. Spike", "B. Snoopy", "C. Sparky", "D. Chuck"],
            rightAnswer: "C. Sparky",
            image: ""

        },

        {

            prompt: "What does Lucy tell Charlie Brown she would like for Christmas?",
            answerArray: ["A. Money", "B. Peace on Earth", "C. A dog", "D. Real Estate"],
            rightAnswer: "D. Real Estate",
            image: "https://media.giphy.com/media/gh4e2B446CvCw/giphy.gif"

        },

        {

            prompt: "How does Marcie refer to Peppermint Patty?",
            answerArray: ["A. Ma'am", "B. Ms. Peppermint", "C. P-Squared", "Sir"],
            rightAnswer: "D. Sir",
            image: ""

        },

        {

            prompt: "Who is Snoopy's (The famous WWI Flying Ace) worst enemy?",
            answerArray: ["A. The Red Barron", "B. Mickey Mouse", "C. Woodstock", "D. Lucy "],
            rightAnswer: "A. The Red Barron",
            image: ""

        },

        {

            prompt: "How much does Lucy charge for psychiatric help?",
            answerArray: ["A. Free", "B. 5 Cents", "C. 10 cents", "D. 25 cents"],
            rightAnswer: "B. 5 Cents",
            images: "https://media.giphy.com/media/BjD7keq3qEFZm/giphy.gif"

        }
    ]

    $("#start").on("click", function() {
        console.log("start clicked")
        game()
    })


    function game() {

        $("#gameboard").empty()

        $("#gameboard").append('<p id="q">' + questions[index].prompt + '</p>')
        for (i = 0; i < questions[index].answerArray.length; i++) {
            $("#gameboard").append('<p  class = "ans" value=' + i + '>' + questions[index].answerArray[i] + '</p>')


        }

        $(".ans").on("click", function() {

                console.log(this)
                var res = parseInt($(".ans").attr("value"))
                console.log(res)

                // compare questions[index].answerArray[res] with the questions[index].rightAswers
                // if ===== then corret
                // if not then incorrect 
                // show thepic adn set timeout to give time to see the 
                //index++  if the index is > length of the questions array you need to stop
                //else  game()


            })
            /* I need to set up the game with a loop-that will go thru all of the questions.
        I need an on-click event that will load the first question and set a timer that will count down the time alloted for the player to choose the answer.
        If correct - I need a log to show the wins
        If wrong - I need a log to show the losses (if else statement)
        If unanswerred - i need the correct answer to appear and log as a loss. Time Out
        I need to clear the timer and reset when moving onto the next questions
        I need the counter to show when time is up and log a loss.a
        I need the results function at end of game to show wins and losses.answerArray
*/


    }


    ///
    // start button // onclick on this button / start the game
    // show the first question / show the responses then wait(timeout)
    // the user click before the timout is out === > then (kkep the info, show th result of that question and then go to next)
    // if the timeout then do the same

    // the next before we need to clean ( html/ timer/etc)




    ///
    // // TODO: Put links to our images in this image array.
    // var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

    // Variable showImage will hold the setInterval when we start the slideshow
    // var showImage;

    // Count will keep track of the index of the currently displaying picture.
    // var count = 0;

    // TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
    // $("#start").click(startSlideshow);

    // TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
    // $("#stop").click(stopSlideshow);


    // // This function will replace display whatever image it's given
    // // in the 'src' attribute of the img tag.
    // function displayImage() {
    //     $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
    // }

    // function nextImage() {
    //     //  TODO: Increment the count by 1.
    //     count++;

    //     // TODO: Show the loading gif in the "image-holder" div.
    //     $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

    //     // TODO: Use a setTimeout to run displayImage after 1 second.
    //     setTimeout(displayImage, 1000);

    //     // TODO: If the count is the same as the length of the image array, reset the count to 0.
    //     if (count === images.length) {
    //         count = 0;
    //     }
    // }

    // function startSlideshow() {

    //     // TODO: Use showImage to hold the setInterval to run nextImage.
    //     showImage = setInterval(nextImage, 3000);

    // }

    // function stopSlideshow() {

    //     // TODO: Put our clearInterval here:
    //     clearInterval(showImage);

    // }

    // // This will run the display image function as soon as the page loads.
    // displayImage();

})