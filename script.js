let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    lost:0,
    ties:0
}


console.log(score);
localStorage.setItem('score',JSON.stringify(score));
updatescore();

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      play('rock');
    } else if (event.key === 'p') {
        play('paper');
    } else if (event.key === 's') {
        play('scissors');
    }
  });



function play(move){
    let compMove='';
    let randNumber=Math.random();

    if(randNumber<1/3){
        compMove='paper';
    }

    else if(randNumber>2/3){
        compMove="scissors";
    }

    else{
        compMove='rock';
    }
    
    let result=calculateScore(move,compMove);
    
    if(result=='You win.'){
        score.wins++;
    }

    else if(result=='You lose.'){
        score.lost++;
    }
    else{
        score.ties++;
    }
    document.querySelector('.result').innerHTML=result;
      document.querySelector('.moves-container').innerHTML=`<p class="js-my-move moves">You</p>
      <img src="images/${move}-emoji.png" alt="" class="result-icon js-my-icon">   
      <p class="js-com-move moves">You</p>
      <img src="images/${compMove}-emoji.png" alt="" class="result-icon js-com-icon">  `
      
    updatescore();

}

function calculateScore(move,compMove){
    let result='';
    if (move === 'scissors') {
        if (compMove === 'rock') {
          result = 'You lose.';
        } else if (compMove === 'paper') {
          result = 'You win.';
        } else if (compMove === 'scissors') {
          result = 'Tie.';
        }
    
      } else if (move === 'paper') {
        if (compMove === 'rock') {
          result = 'You win.';
        } else if (compMove === 'paper') {
          result = 'Tie.';
        } else if (compMove === 'scissors') {
          result = 'You lose.';
        }
        
      } else if (move === 'rock') {
        if (compMove === 'rock') {
          result = 'Tie.';
        } else if (compMove === 'paper') {
          result = 'You lose.';
        } else if (compMove === 'scissors') {
          result = 'You win.';
        }
      }
      
      return result;

}


function updatescore(){
    let msg=`Wins: ${score.wins} Lost: ${score.lost} Ties: ${score.ties}`;
    document.querySelector('.scorecard').innerHTML=msg;
    localStorage.setItem('score',JSON.stringify(score));

}

function reset(){
    score.wins=0;
    score.lost=0;
    score.ties=0;
    updatescore();
    document.querySelector('.result').innerHTML='Lets Play!';

}
