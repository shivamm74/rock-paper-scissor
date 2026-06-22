let score = JSON.parse(localStorage.getItem("score")) || { wins : 0 , lost :0 , ties :0 };




function pickcomputermove() {
    var randomnumber = Math.random()

    let computermove = '';

if (randomnumber >= 0 && randomnumber <= 1/3){
    computermove = 'rock';
}else if ( randomnumber > 1/3 && randomnumber <= 2/3){
    computermove = 'paper';
}else  {
    computermove = 'scissor';
}
return computermove;
} 

function game(playermove){
    let computermove = pickcomputermove();
    let result = '';
    
    if (playermove === 'rock' ) {
    
    if(computermove === 'rock') {
        result = 'tie';
    }else if(computermove === 'paper'){
        result = 'lost';
    }else{
        result = 'win'; 
    }
       
    }
        
        
 else if ( playermove === 'paper') {

    if(computermove === 'rock') {
        result = 'win';
    }else if(computermove === 'paper'){
        result = 'tie';
    
    }else {
        result = 'lost'; 
    }

}


else {
  
if(computermove === 'rock') {
    result = 'lost';
}else if(computermove === 'paper'){
    result = 'win';

}else {
    result = 'tie'; 
    }
    
}

if (result === 'win') {
    score.wins = score.wins + 1 ;
    
} else if  ( result === 'lost') {
    score.lost = score.lost + 1;
} else {
    score.tie = score.tie + 1;
}


localStorage.setItem("score",JSON.stringify(score));







alert(`you picked ${playermove} ,computer picked ${computermove} .you  ${result}
    win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`);
        console.log(result);
        console.log(score);
}
     