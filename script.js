var wins = 0;

var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var startButton = document.getElementById("start");
var question = document.getElementById("question");
var displaywins = document.getElementById("wins");
var displayloss = document.getElementById("losses");
var timerEl = document.getElementById("timer");
Answer1 = "1";
var display_corrAnswer = document.getElementById("correct-answer");
var display_wrongAnswer = document.getElementById("wrong-answer");
corrAnswer = 0;
wrongAnswer = 0;
var correct;

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
//var options =document.querySelectorAll("options");
var optionss = document.getElementById("options");

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
    var i = 0;

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


    question.textContent = Questions[i].question;

    option1.textContent = Questions[i].choice1;
    option2.textContent = Questions[i].choice2;
    option3.textContent = Questions[i].choice3;
    option4.textContent = Questions[i].choice4;

    option1.value = Questions[i].choice1;
    option2.value = Questions[i].choice2;
    option3.value = Questions[i].choice3;
    option4.value = Questions[i].choice4;
    correct = Questions[i].Answer;
    

    optionss.addEventListener("click", function (event) {
        console.log(event.target.value);
        checkAnswer(event.target.value);
        i++;





        option1.textContent = Questions[i].choice1;
        option2.textContent = Questions[i].choice2;
        option3.textContent = Questions[i].choice3;
        option4.textContent = Questions[i].choice4;

        option1.value = Questions[i].choice1;
        option2.value = Questions[i].choice2;
        option3.value = Questions[i].choice3;
        option4.value = Questions[i].choice4;
        correct = Questions[i].Answer;


        checkAnswer(event.target.value);


        




        
    });

    function checkAnswer(answer) {
        


        if (answer === correct ) {
            corrAnswer++;
            display_corrAnswer.textContent = corrAnswer;
           

        } else  {

            wrongAnswer++;
            display_wrongAnswer.textContent = wrongAnswer;



        }

    }
});



