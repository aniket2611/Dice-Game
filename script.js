document.querySelector(".dice1 .circle2").style.visibility = "hidden";
document.querySelector(".dice2 .circle2").style.visibility = "hidden";
document.querySelector(".dice1 .circle8").style.visibility = "hidden";
document.querySelector(".dice2 .circle8").style.visibility = "hidden";


var player1Count = Math.floor(Math.random()*6)+1;
var player2Count = Math.floor(Math.random()*6)+1;



if(player1Count==player2Count)
    {
       document.querySelector("h1").innerHTML="<i class='fas fa-flag'></i> Draw <i class='fas fa-flag'></i>";
    }
else if(player2Count<player1Count)
    {
        document.querySelector("h1").innerHTML="<i class='fas fa-flag'></i> Player 1 wins";
    }
else
    document.querySelector("h1").innerHTML="Player 2 wins <i class='fas fa-flag'></i>";


for(var i=0;i<9;i++){
    var select1=".dice1 .circle" + (i+1);
    var select2=".dice2 .circle" + (i+1);

    var dice1 = document.querySelector(select1);
    var dice2 = document.querySelector(select2);

    // console.log(dice1);
    if(i!=1 && i!=7){
        // console.log(i);
        dice1.style.visibility="hidden";
        dice2.style.visibility="hidden";
    }
}

for(var i = 1;i<=6;i++){
    if(i==1 && i==player1Count){
        document.querySelector(".dice1 .circle5").style.visibility="visible";
    }
    if(i==1 && i==player2Count){
        document.querySelector(".dice2 .circle5").style.visibility="visible";
    }
    if(i==2 && i==player1Count){
        document.querySelector(".dice1 .circle3").style.visibility="visible";
        document.querySelector(".dice1 .circle7").style.visibility="visible";

    }
    if(i==2 && i==player2Count){
        document.querySelector(".dice2 .circle3").style.visibility="visible";
        document.querySelector(".dice2 .circle7").style.visibility="visible";

    }
    if(i==3 && i==player1Count){
        document.querySelector(".dice1 .circle3").style.visibility="visible";
        document.querySelector(".dice1 .circle7").style.visibility="visible";
        document.querySelector(".dice1 .circle5").style.visibility="visible";

    }
    if(i==3 && i==player2Count){
        document.querySelector(".dice2 .circle3").style.visibility="visible";
        document.querySelector(".dice2 .circle7").style.visibility="visible";
        document.querySelector(".dice2 .circle5").style.visibility="visible";

    }
    if(i==4 && i==player1Count){
        document.querySelector(".dice1 .circle1").style.visibility="visible";
        document.querySelector(".dice1 .circle3").style.visibility="visible";
        document.querySelector(".dice1 .circle7").style.visibility="visible";
        document.querySelector(".dice1 .circle9").style.visibility="visible";

    }
    if(i==4 && i==player2Count){
        document.querySelector(".dice2 .circle1").style.visibility="visible";
        document.querySelector(".dice2 .circle3").style.visibility="visible";
        document.querySelector(".dice2 .circle7").style.visibility="visible";
        document.querySelector(".dice2 .circle9").style.visibility="visible";

    }
    if(i==5 && i==player1Count){
        document.querySelector(".dice1 .circle1").style.visibility="visible";
        document.querySelector(".dice1 .circle3").style.visibility="visible";
        document.querySelector(".dice1 .circle7").style.visibility="visible";
        document.querySelector(".dice1 .circle9").style.visibility="visible";
        document.querySelector(".dice1 .circle5").style.visibility="visible";

    }
    if(i==5 && i==player2Count){
        document.querySelector(".dice2 .circle1").style.visibility="visible";
        document.querySelector(".dice2 .circle3").style.visibility="visible";
        document.querySelector(".dice2 .circle7").style.visibility="visible";
        document.querySelector(".dice2 .circle9").style.visibility="visible";
        document.querySelector(".dice2 .circle5").style.visibility="visible";

    }
    if(i==6 && i==player1Count){
        document.querySelector(".dice1 .circle1").style.visibility="visible";
        document.querySelector(".dice1 .circle3").style.visibility="visible";
        document.querySelector(".dice1 .circle7").style.visibility="visible";
        document.querySelector(".dice1 .circle9").style.visibility="visible";
        document.querySelector(".dice1 .circle4").style.visibility="visible";
        document.querySelector(".dice1 .circle6").style.visibility="visible";

    }
    if(i==6 && i==player2Count){
        document.querySelector(".dice2 .circle1").style.visibility="visible";
        document.querySelector(".dice2 .circle3").style.visibility="visible";
        document.querySelector(".dice2 .circle7").style.visibility="visible";
        document.querySelector(".dice2 .circle9").style.visibility="visible";
        document.querySelector(".dice2 .circle4").style.visibility="visible";
        document.querySelector(".dice2 .circle6").style.visibility="visible";

    }
}