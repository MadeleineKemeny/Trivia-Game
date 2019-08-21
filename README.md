# Trivia-Game

I started with the class exercise of creating a functioning timer and reverse engineered it to decrement. I pseudo coded the remainder of the project: the purpose of the game, the choice of answers, actions that affected the timer, counting scores in different categories, etc. Creating the index of questions and answeres was pretty straight-forward--I started with them as static HTML and moved them over to JS. Then I started to connect the pieces and parts to each other: telling wihich buttons to control timer actions; show and hide various layers depending on what to display; connecting gifs to answers; storing the categories of player responses: correct, incorrect, unanswered; etc. THe last thing was to figure out what was missing in terms of UI/UX.

There is one problem with scoring I have yet to figure out: it doesn't want to register the Georgia O'Keeffe answer as correct, but I'll chalk that up to snobbery. 


## **UPDATE**

I figured it out by using keystrokes to simulate an apostrophe; it was reading it as the end of the string per TA Dave Shilander's suggestion of the problem. Also, I updated the "proceed" button that follows gifs to "show score" at last question by adding it as an element of the array of objects.


## Tech Details

HTML, CSS, Javascript, and JQuery



## Appreciation

Isabel Arcones helped me translate much of my pseudo code into working Jquery. Phil Loy worked very hard on getting the mathematic funtion to behave. There was some kind of wonky incrementing going on which is why we added the line that the score couldn't exceed the length of the array index. W3 Schools helped with that sticky banner. Thank you to all of the folks with enough time on their hands to create the gifs that make it silly. And grateful to the universe for https://www.lifewire.com/typing-quotes-apostrophes-and-primes-1074104
