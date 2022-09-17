console.error("hello world");
var play=false;
var score;
var action;
var time_remaining;
var correctanswer;
document.getElementById("start_btton").onclick=
function(){

        if(play==true)
        {
            location.reload();
        }
        else{
            play=true;
            score=0; 
            document.getElementById("score-value").innerHTML=score;
            document.getElementById("timer").style.display='block';
            time_remaining=60;
            document.getElementById("start_btton").innerHTML='Reset Game';
            document.getElementById("timingvalue").innerHTML=time_remaining;
            document.getElementById("gameover").style.display='none';
            countdown();
            Questions();
        }
}

function countdown(){
            action =setInterval(function(){
                time_remaining-=1;
                document.getElementById("timingvalue").innerHTML=time_remaining;
                if(time_remaining==0){
                    console.log(time_remaining, "In If");
                    clearInterval(action);
                    document.getElementById("gameover").style.display='block';
                    document.getElementById("scoreee").innerHTML=score;
                    document.getElementById("timer").style.display='none';
                    document.getElementById("correct").style.display='none';
                    document.getElementById("wrong").style.display='none';
                    play=false;
                    document.getElementById("start_btton").innerHTML='Start Game';
        
                   }
            },1000);
            console.log(time_remaining, "decrement");
       
}
function Questions(){
             
        var x= 1+ Math.round(9*Math.random());
        var y= 1+ Math.round(9*Math.random());
         correctanswer=x*y;
        document.getElementById("QA").innerHTML=x + '*' + y;
        var currentposition=1+ Math.round(3*Math.random());
        document.getElementById("opt"+currentposition).innerHTML=correctanswer;

        for(let i=1; i<5; i++){
            if(i!=currentposition)
            {
                var wronganser=1+ Math.round(9*Math.random()) * 1+ Math.round(9*Math.random());
                document.getElementById("opt"+i).innerHTML=wronganser;
                do{
                     wronganser=1+ Math.round(9*Math.random()) * 1+ Math.round(9*Math.random());
                }while(wronganser==correctanswer);
            }
        }

}

for(let i=1; i<5; i++){
    document.getElementById("opt"+i).onclick=function(){
        if(this.innerHTML==correctanswer){
            score++;
            time_remaining+=5;
            document.getElementById("correct").style.display='block';
            Questions();
            document.getElementById("score-value").innerHTML=score;
            document.getElementById("scoreee").innerHTML=score;
            setTimeout(function(){
                document.getElementById("correct").style.display='none';
            },1000)
        }
        else{
            document.getElementById("wrong").style.display='block';
            setTimeout(function(){
                document.getElementById("wrong").style.display='none';
            },1000)
        }
    }
}