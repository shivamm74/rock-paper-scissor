let score = JSON.parse(localStorage.getItem("score")) || { wins : 0 , lost :0 , tie :0 };

localStorage.getItem('inner-html');

document.body.addEventListener('keydown',(event) => {
    if(event.key === 'r'){
        game('rock');
    }else if (event.key === 'p'){
        game('paper');
    }else if(event.key === 's'){
        game('scissor')
    }else if(event.key === 'c'){
        clearbutton();
    }
})

function clearbutton () {
    score.wins = 0;
    score.lost = 0;
    score.tie = 0;
    localStorage.removeItem('score')
 document.querySelector('#phra2').innerHTML = `score has been reset`;
 document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;

};
document.querySelector('.js-rock').addEventListener('click',() => {
    game('rock');
})
document.querySelector('.clear3').addEventListener('click',() => {
    clearbutton();
})

document.querySelector('.js-paper').addEventListener('click',() => {
    game('paper');
})

document.querySelector('.js-scissor').addEventListener('click',() => {
    game('scissor');
})



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

function moveIcon(move) {
    const iconClass = {
        rock: 'fa-hand-back-fist',
        paper: 'fa-hand',
        scissor: 'fa-hand-scissors'
    }[move];
    return `<span class="result-move-circle"><i class="fa-solid ${iconClass}"></i><span class="result-move-label">${move}</span></span>`;
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



const movesLine = `you choose ${moveIcon(playermove)} computer choose ${moveIcon(computermove)}`;

if (result === 'win'){
    document.querySelector('#phra2').innerHTML = `<span class="result-line">${movesLine} , you won</span>` 
    document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;
} else if (result === 'lost') {
    document.querySelector('#phra2').innerHTML = `<span class="result-line">${movesLine} , you lost</span>`
    document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;
    
} else if (result === 'tie') {
    document.querySelector('#phra2').innerHTML = `<span class="result-line">${movesLine} , it's a tie !!!</span>`
    document.querySelector('#phra').innerHTML =  `win : ${score.wins} , lost : ${score.lost} , tie : ${score.tie}`;
    

} 

localStorage.setItem('inner-html', document.querySelector('#phra2').innerHTML);

localStorage.setItem("score",JSON.stringify(score));
        console.log(result);
        console.log(score);
}

document.querySelector('.autoplay').addEventListener('click',() => {
    document.querySelector('.autoplay-icon').innerHTML = `<i class="fa-solid fa-stop"></i>`

    autoplay();
})
document.body.addEventListener('keydown',(event) => {
    if(event.key === 'a'){
        autoplay();
    }
})

let intervalid;
let isautoplaying = false;

function autoplay() {
    if(!isautoplaying){
        intervalid = setInterval(function(){
            let playermove = pickcomputermove();
            game(playermove);
        },1000);
        isautoplaying = true;
    } else {
        clearInterval(intervalid);
        isautoplaying = false;
        document.querySelector('.autoplay-icon').innerHTML = `<i class = "fa-solid fa-circle-play"></i>`

    }
}

     