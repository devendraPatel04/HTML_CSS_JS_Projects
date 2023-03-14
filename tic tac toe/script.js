console.log("welcome to tic tac toe");
let music = new Audio('/tunes/music.mp3');
let turnsound = new Audio('/tunes/ting.mp3');
let gameover = new Audio('/tunes/gameover.mp3');
let isgameover = false;
let reset = document.getElementById("reset");
// music.play();

let  turn = "X";

//function to change the trun
const changeTurn = ()=>{
    return turn==="X"?"0":"X";
} 

//fucntion to check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,-45]
    ]
   
    wins.forEach(e =>{
        // console.log((boxtexts[e[2]]===boxtexts[e[1]]));
        // console.log((boxtexts[e[2]]+"  "+boxtexts[e[1]]));
        // // if((boxtexts[e[2]]===boxtexts[e[1]])){
        //     console.log("here");
        // }
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
            console.log("here comes");
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won"
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="30vw";
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turnsound.play();
            turn=changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            }
        }
    })
})

//add one click listener on reset
reset.addEventListener('click',()=>{
    let boxtexts = Array.from(document.getElementsByClassName("boxtext"));
    boxtexts.forEach(e=>{
        e.innerText="";
    })
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width="0vw";
})