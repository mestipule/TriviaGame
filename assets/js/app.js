var correctCount = 0;
var incorrectCount = 0;
var whichQuestionAreOn = 0;
var totalNumberQuestion = 0;
var timerStarted  = false;
function startTimer(){
    if (!timerStarted){
    timerStarted = true;
    questionaire();
    $("#button-choices").show();
    var leftTime = 300000;
    var countDown = setInterval(function() {
    leftTime = leftTime - 1000;
    var minutes = Math.floor((leftTime %(1000*60*60))/(60*1000));
    var seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
    var displayTime = "";
    if (minutes <10){
        displayTime = "0";
    }
    displayTime += minutes + ":";
    if (seconds <10){
        displayTime += "0";
    }
    displayTime += seconds;
    document.getElementById("time").innerHTML = displayTime;
    if (leftTime < 0){

        clearInterval(countDown);
        document.getElementById("time").innerHTML = "00" + ":" + "00";
    }
}, 1000);
    }
}

    var questions = [
    {
        ask: "What is a single variable that is used to store different element?",
        answer1: "a. adoptor",
        answer2: "b. array",
        answer3: "c. bubblesort",
        answer4: "d. document",
        answerKey: "b. array"
    }, {
        ask: "A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",
        answer1: "a. Phyton",
        answer2: "b. Java",
        answer3: "c. JavaScript",
        answer4: "d. HTML",
        answerKey: "b. HTML"
    },{
        ask: "CSS stands for?",
        answer1: "a. Cascading Style Sheet",
        answer2: "b. Cascading Sheet Style",
        answer3: "c. Cascading Sorter Style",
        answer4: "d. Colliding Style Sheet",
        answerKey: "b. Cascading Style Sheet"
    },{
        ask: "What does expression produces?",
        answer1: "a. A Declaration",
        answer2: "b. A Parameter",
        answer3: "c. A Method",
        answer4: "d. A Value",
        answerKey: "b. A Value"
    },{
        ask: "A keyword to create variable.",
        answer1: "a. var",
        answer2: "b. car",
        answer3: "c. bar",
        answer4: "d. val",
        answerKey: "b. var"
    },
 ];
 
function buttonMethod(selectedButton){

    console.log($(selectedButton));
    // what needs to happen:
    //when they click the button
    //counter for correct and incorrect answer
    if (questions[whichQuestionAreOn].answerKey === selectedButton.innerText){
        correctCount += 1;
    } else {
        incorrectCount += 1;
    }
    console.log(correctCount);
    console.log(incorrectCount);
    //then we go to another question
    
    nextQuestion();
    }
    function nextQuestion(){
        $("#question-here").hide();
        $("#button-choices").hide();
        whichQuestionAreOn += 1;
        totalNumberQuestion = questions.length;
        if (whichQuestionAreOn === totalNumberQuestion){
            var result = sum_values()
            console.log(result);
        } else {
            $("#question-here".get(whichQuestionAreOn)).fadeIn();
        }   
}
    //check for answer all the question
    //display the resualt
    //if not they complete it the goes to zero, the trivia game finish
    //if not answered first question we move to the next question

    
    



function questionaire(){
    
    var displayQuestions = questions[0];
    $("#question-here").text(displayQuestions.ask);
    $("#one").text(displayQuestions.answer1);
    $("#two").text(displayQuestions.answer2);
    $("#three").text(displayQuestions.answer3);
    $("#four").text(displayQuestions.answer4);
}






// function restart(){
//     targetNumber = Math.ceil(Math.random()*101) +19;
//     var numberToBeat = document.getElementById("number-to-beat")
//     $(numberToBeat).append("Number To Beat: " + targetNumber);
// };


