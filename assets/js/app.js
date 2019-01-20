function startTimer(){
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
    console.log(minutes + seconds);

    if (leftTime < 0){

        clearInterval(countDown);
        document.getElementById("time").innerHTML = "00" + ":" + "00";
    }
    console.log("time");
    
}, 1000);
}

$(function(){
    
    $("question-here").each(function(index){

        
    }
 }




// var correctCount = ;
// var incorrectCount = ;



// function restart(){
//     targetNumber = Math.ceil(Math.random()*101) +19;
//     var numberToBeat = document.getElementById("number-to-beat")
//     $(numberToBeat).append("Number To Beat: " + targetNumber);
// };


