let score = JSON.parse(localStorage.getItem("score")) || { wins : 0 , lost :0 , tie :0 };

localStorage.getItem('inner-html');

function clearbutton () {
    score.wins = 0,
    score.lost = 0,
    score.tie = 0,
    localStorage.removeItem('score')
 document.querySelector('#phra2').innerHTML = `score has been reset`;
 document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;

};


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



if (result === 'win'){
    document.querySelector('#phra2').innerHTML = `you  won , you choose ${playermove} computer choose ${computermove}` 
    document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;
} else if (result === 'lost') {
    document.querySelector('#phra2').innerHTML = `you lost , you choose ${playermove} computer choose ${computermove}`
    document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;
    
} else if (result === 'tie') {
    document.querySelector('#phra2').innerHTML = `it's a tie !!! , you choose ${playermove} computer choose ${computermove}`
    document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;
    

} 

localStorage.setItem('inner-html', document.querySelector('#phra2').innerHTML);

localStorage.setItem("score",JSON.stringify(score));
        console.log(result);
        console.log(score);
}


function autoplay(){
    setInterval(function(){
            const playermove = pickcomputermove();
            game(playermove);
        },1000 );
}


     