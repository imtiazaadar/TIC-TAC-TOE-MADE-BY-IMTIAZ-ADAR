// IMTIAZ ADAR
// TIC TAC TOE PROJECT
// LANGUAGE USED : HTML, CSS, JAVASCRIPT
// DATE : 19 / 11 / 21

console.log("Welcome to TIC TAC TOE Game By Imtiaz Adar");

// Music
let music = new Audio("ting.mp3");
let winsound = new Audio("win1.mp3");
let drawsound = new Audio("draw.mp3");
let resetsound = new Audio("reset.mp3");

// Variables
let move = "X";
let gameOver = false;
let firstbox, secondbox, thirdbox, count = 0;
let winner = false;
let demo = false;

// Changing Players
const changePlayer = ()=>{
    return move === "X"? "O" : "X";
}

// Checking Who Is The Winner
const checkWinner = ()=>{
    let box_ele = document.getElementsByClassName("boxele");
    count++;
    let win_ways = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ]
    win_ways.forEach(e =>{
        if((box_ele[e[0]].innerText === box_ele[e[1]].innerText) && (box_ele[e[1]].innerText === box_ele[e[2]].innerText) && (box_ele[e[0]].innerText !== '') && (count <= 9)){
            document.querySelector(".info").innerText = "'" + box_ele[e[0]].innerText + "'" + " Has Won";
            gameOver = true;
            demo = true;
            winsound.play();
            firstbox = e[0], secondbox = e[1], thirdbox = e[2];
            document.querySelector('.image-info').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelectorAll('.box')[firstbox].style.backgroundColor = "#41C483";
            document.querySelectorAll('.box')[secondbox].style.backgroundColor = "#41C483";
            document.querySelectorAll('.box')[thirdbox].style.backgroundColor = "#41C483";
            winner = true;
        }
        else if(count === 9){
            if(!(demo)){
                gameOver = true;
                document.querySelector(".info").innerText = "Match Has Drawn";
                winner = true;
                drawsound.play();
            }
        }
    })
}

// Place Properly
// Main Logic
resetsound.play();
let box_ = document.getElementsByClassName("box");
Array.from(box_).forEach(elements =>{
    let box_element = elements.querySelector(".boxele");
    elements.addEventListener('click', ()=>{
        if(!winner){
            if(box_element.innerText === ""){
                box_element.innerText = move;
                move = changePlayer();
                music.play();
                checkWinner();
                if(!gameOver){
                    document.getElementsByClassName("info")[0].innerText = move + "'s Turn";
                }
            }
        }
    });
})

// NEW GAME
let new_game = document.querySelector(".reset");
new_game.addEventListener('click', ()=>{
    box_element = document.querySelectorAll(".boxele");
    box_element.forEach(elements =>{
        elements.innerText = "";
    });
    gameOver = false;
    winner = false;
    demo = false;
    move = "X";
    count = 0;
    resetsound.play();
    document.getElementsByClassName("info")[0].innerText = move + "'s Turn";
    document.querySelector('.image-info').getElementsByTagName('img')[0].style.width= "0vw";
    document.querySelectorAll('.box')[0].style.backgroundColor = "";
    document.querySelectorAll('.box')[1].style.backgroundColor = "";
    document.querySelectorAll('.box')[2].style.backgroundColor = "";
    document.querySelectorAll('.box')[3].style.backgroundColor = "";
    document.querySelectorAll('.box')[4].style.backgroundColor = "";
    document.querySelectorAll('.box')[5].style.backgroundColor = "";
    document.querySelectorAll('.box')[6].style.backgroundColor = "";
    document.querySelectorAll('.box')[7].style.backgroundColor = "";
    document.querySelectorAll('.box')[8].style.backgroundColor = "";
})