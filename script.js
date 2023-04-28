//initialize variables 
var wins = 0;
var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var startButton = document.getElementById("start");
var question = document.getElementById("question");
var displaywins = document.getElementById("wins");
var displayloss = document.getElementById("losses");
var timerEl = document.getElementById("timer");
var display_corrAnswer = document.getElementById("correct-answer");
var display_wrongAnswer = document.getElementById("wrong-answer");
var corrAnswer = 0;
var wrongAnswer = 0;
var correct;

var scoreCount=0;
var displayScore=document.getElementById("score");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
//var options =document.querySelectorAll("options");
var optionss = document.getElementById("options");

//used to style the quiz intructions
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 300;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//function to render questions
var renderQuestion = function (questionNum) {
    console.log("render question: " + questionNum);
    option1.textContent = Questions[questionNum].choice1;
    option2.textContent = Questions[questionNum].choice2;
    option3.textContent = Questions[questionNum].choice3;
    option4.textContent = Questions[questionNum].choice4;

    option1.value = Questions[questionNum].choice1;
    option2.value = Questions[questionNum].choice2;
    option3.value = Questions[questionNum].choice3;
    option4.value = Questions[questionNum].choice4;
    correct = Questions[questionNum].Answer;
}

//object that stores all set of questions and options and correct answer to each question
var Questions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choice1: "As many as you want",
    choice2: "3",
    choice3: "1",
    choice4: "128",
    Answer: "3"
},
{
    question: "What does DOM stand for?",
    choice1: "Document Object Model",
    choice2: "Display Object Management",
    choice3: "Digital Ordinance Model",
    choice4: "Desktop Oriented Mode",
    Answer: "Document Object Model"
},
{
    question: "What is used primarily to add styling to a web page?",
    choice1: "HTML",
    choice2: "CSS",
    choice3: "Python",
    choice4: "React.js",
    Answer: "CSS"
},
    {
    question: "When is localStorage data cleared?",
    choice1: "No expiration time",
    choice2: "On page reload",
    choice3: "On browser close",
    choice4: "On computer restart",
    Answer: "No expiration time"
},
{
    question: "What does WWW stand for?",
    choice1: "Web World Workings",
    choice2: "Weak Winter Wind",
    choice3: "World Wide Web",
    choice4: "Wendy Wants Waffles",
    Answer: "World Wide Web"
},
];

//event listener to start game when click start button
startButton.addEventListener("click", function (event) {

   
    console.log(event);
    let losscount = 0;
    // timer 
    let timeRemaining = 60;
    const timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            // console.log(timeRemaining);
            timerEl.textContent = timeRemaining;
        }
        else {
            timerEl.textContent = "Time Is Over!!!!!";
            losscount++;
            displayloss.textContent = losscount;
            //console.log("Timer Ended!")
            clearInterval(timer);
        }

    }, 1000);

    // render first question
    renderQuestion(0);

    var i = 1;
    //event listener for when user user chooses option
    optionss.addEventListener("click", function (event) {
        //sends user input and checks if answer is correct
        checkAnswer(event.target.value);

        console.log(event.target.value);



        console.log("the value of i is: " + i)
        //checks if all questions have been asked
        if (i === (Questions.length)) {
            endGame();
        }
        else {
            renderQuestion(i);
        }
        i++;

    });
    //function to check if chosen option is corrent answer or not
    function checkAnswer(answer) {


        if (answer === correct) {
            corrAnswer++;
            scoreCount=scoreCount+10;
            displayScore.textContent=scoreCount;
            display_corrAnswer.textContent = corrAnswer;
            console.log(" this is correct count: " + corrAnswer);

        } else {

            wrongAnswer++;
            timeRemaining = timeRemaining - 10;
            display_wrongAnswer.textContent = wrongAnswer;
            console.log(" this is worng count: " + wrongAnswer);



        }

    }

   //function ends the game and sends user to endgame page
    function endGame() {
        
       
       localStorage.setItem('mostRecentScore', scoreCount);
        return window.location.assign("./endgame.html");
    }
    

});




