console.log("welcome to spotify");

//Initialize the Variables
let songIndex=1;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('giff');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songitemplayarr = Array.from(document.getElementsByClassName('songitemplay'));

let songs = [
    {
        songName: "TUNE",filePath: "./songs/1.mp3",coverPath: "/covers/1.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/2.mp3",coverPath: "/covers/2.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/3.mp3",coverPath: "/covers/3.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/4.mp3",coverPath: "/covers/4.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/5.mp3",coverPath: "/covers/5.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/6.mp3",coverPath: "/covers/6.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/7.mp3",coverPath: "/covers/7.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/8.mp3",coverPath: "/covers/8.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/9.mp3",coverPath: "/covers/9.jpg"
    },
    {
        songName: "TUNE",filePath: "/songs/10.mp3",coverPath: "/covers/10.jpg"
    }
]

songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName").innerText=songs[i].songName;
    // console.log(element.getElementsByClassName("songName").innerText);
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        if(e.target.classList.contains("fa-circle-play")){
            makeAllplays();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            let songIndex = parseInt(e.target.id)+1;
            audioElement.src = `/songs/${songIndex}.mp3`;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
        }else{
            audioElement.pause();
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove("fa-circle-pause");
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            gif.style.opacity=0;
        }
      
    })
})

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 || masterPlay.classList.contains('fa-circle-play')){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1 ;
        makeAllplays();
        songitemplayarr[`${songIndex}`].classList.remove('fa-circle-play');
        songitemplayarr[`${songIndex}`].classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        makeAllplays();
        songitemplayarr[`${songIndex}`].classList.add('fa-circle-play');
        songitemplayarr[`${songIndex}`].classList.remove('fa-circle-pause');
    }
})


//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=1;
    }else{
        songIndex+=1;
    }
    audioElement.src = `/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    makeAllplays();
    songitemplayarr[`${songIndex}`].classList.remove('fa-circle-play');
    songitemplayarr[`${songIndex}`].classList.add('fa-circle-pause');
    console.log(songIndex);
   
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=10;
    }else{
        songIndex-=1;
    }
    audioElement.src = `/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    makeAllplays();
   songitemplayarr[`${songIndex}`].classList.remove('fa-circle-play');
   songitemplayarr[`${songIndex}`].classList.add('fa-circle-pause');
})