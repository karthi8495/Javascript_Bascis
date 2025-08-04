
var questions = [
    {
    question: "Hyper Text Markup Languages Stands For?",
    choices: ["JQUERY","XHTML","CSS","HTML"],
    answer: "HTML",
    },

    {
    question: "Cascading Style Sheet Stands For?",
    choices: ["HTML","JQUERY","CSS","XHTML"],
    answer: "CSS",
    },

    {
    question: "Which is Javascript Frameworks?",
    choices: ["React","laravel","Django","Sass"],
    answer: "React",
    },

    {
    question: "Which is the backend Language?",
    choices: ["PHP","HTML","React","All"],
    answer: "PHP",
    },

    {
    question: "Which is best for Artificial Intyelligence?",
    choices: ["React","Laravel","Python","Sass"],
    answer: "Python",
    },
];


var currentQuestionIndex = 0;
var score =0;

// display Questions

function displayQuestion(){
    if(currentQuestionIndex < questions.length){
        var currentQuestion = questions [currentQuestionIndex];
        document.getElementById("question").innerText = currentQuestion.question;


        for(var i=0; i<currentQuestion.choices.length; i++){
            var button = getElementById("btn" + i);
            button.innerText = currentQuestion.choices[i];
            button.onclick = function(){
                checkAnswer(currentQuestion.choices[i]);
            };
        }

        document.getElementById("progress").innerText=
        "Question" + (currentQuestionIndex + 1) + "of" + questions.length;

    } else {
       showScores();
    }
}


function showScores(){
    document.getElementById("quiz").innerHTML = 
    "<h2>Quiz Completed!</h2> <h2>Your Score: "+ score +"</h2><a href='index.html'></a>";
}


function checkAnswer(answer){
  var correctAnswer = questions[currentQuestionIndex].answer;
  if(answer == correctAnswer){
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}



// Start countdown timer

var timeleft = 60;
var countdownelement = document.getElementById("count-down");

function startCountdown() {
    var timer = setInterval(function () {
        if(timeleft <= 0){
            clearInterval(timer);
        } else{
            countdownelement.innerText = "Time Left: "+ timeleft + " Seconds"
            timeleft--;
        }

    },1000)
}

displayQuestion();
startCountdown();