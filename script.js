let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let score_comp = document.querySelector("#comp-score")
let score_user = document.querySelector("#user-score")
let playermove = "rock"
let choice = ["rock","paper","scissors"]
let compMove = "paper"
let userScore = 0;
let compScore = 0;
rock.addEventListener("click",()=>{
    playermove="rock"
    const randIdx = Math.floor(Math.random() * 3);
    compMove = choice[randIdx]
    if(compMove===playermove){
        alert("It's a draw")
    }else if(compMove==="paper"){
        compScore++;
        score_comp.innerText = compScore
        alert("comp wins")
    }else{
        userScore++;
        score_user.innerText=userScore        
        alert("You win")
    }
})
paper.addEventListener("click",()=>{
    playermove="paper"
    const randIdx = Math.floor(Math.random() * 3);
    compMove = choice[randIdx]
    if(compMove===playermove){
        alert("It's a draw")
    }else if(compMove==="scissors"){
        compScore++;
        score_comp.innerText = compScore
        alert("comp wins")
    }else{
        userScore++;
        score_user.innerText=userScore
        alert("You win")
    }
})
scissors.addEventListener("click",()=>{
    playermove="scissors"
    const randIdx = Math.floor(Math.random() * 3);
    compMove = choice[randIdx]
    if(compMove===playermove){
        alert("It's a draw")
    }else if(compMove==="rock"){
        compScore++;
        score_comp.innerText = compScore
        alert("comp wins")
    }else{
        userScore++;
        score_user.innerText=userScore
        alert("You win")
    }
})


