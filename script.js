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

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
//var options =document.querySelectorAll("options");
var optionss = document.getElementById("options");

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
}
];

startButton.addEventListener("click", function (event) {


    console.log(event);
    let losscount = 0;
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


    renderQuestion(0);
    
    var i = 1;

    optionss.addEventListener("click", function (event) {
        
        checkAnswer(event.target.value);

        console.log(event.target.value);

        
        
        console.log("the value of i is: "+ i)
        if (i === (Questions.length)) {
            
            endGame();
        }
        else{
            renderQuestion(i);
        }
        i++;

    });

    function checkAnswer(answer) {


        if (answer === correct) {
            corrAnswer++;
            display_corrAnswer.textContent = corrAnswer;
            console.log(" this is correct count: " + corrAnswer);

        } else {

            wrongAnswer++;
            display_wrongAnswer.textContent = wrongAnswer;
            console.log(" this is worng count: " + wrongAnswer);



        }

    }

    function endGame() {
        console.log("GAME OVER!");
    }
});



