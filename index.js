var num=document.querySelectorAll(".song").length;
progress=document.getElementById("progress");
for(var i=0;i<num ;i++)
{
    document.querySelectorAll(".song")[i].addEventListener("click",function (){
        var audios = document.querySelectorAll('audio');
        console.log(audios);
                audios.forEach(function (audio) {
                    audio.pause();
                    audio.currentTime = 0; // Reset playback position to the start
                });
        songname=(this.getAttribute("class"));
        
        
        
        switch(songname){
            case "arctic song":
                
                var arctic = document.getElementById("audio1");
                
                arctic.play();
                
                if(song.play()){
                    setInterval(()=>{
                        progress.value=song.currentTime;
                    },500);
                }
            break;
            case "shiela song":
                 var shiela = document.getElementById("audio2");
                
                shiela.play();
            break;
            case "aaogetumkabhi song":
                 var aaoge = document.getElementById("audio3");
                
                aaoge.play();
            break;
            case "feelinggood song":
                 var good = document.getElementById("audio4");
                good.play();
            break;
            case "nightwemet song":
                 var nightwemet = document.getElementById("audio5");
                nightwemet.play();
            break;
            case "JiyeinKyu song":
                 var JiyeinKyu = document.getElementById("audio6");
                JiyeinKyu.play();
            break;
            case "Atmyworst song":
                 var worst = document.getElementById("audio7");
                worst.play();
            break;

            

        }
    
    });

}
var num=document.querySelectorAll(".song").length;
for(var i=0;i<num ;i++)
{
    document.querySelectorAll(".name")[i].addEventListener("click",function (){
        var audios = document.querySelectorAll('audio');
        console.log(audios);
                audios.forEach(function (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                });
        songname=(this.getAttribute("id"));
        
        
        
        switch(songname){
            case "1":
                var arctic = document.getElementById("audio1");
                
                arctic.play();
            break;
            case "2":
                 var shiela = document.getElementById("audio2");
                
                shiela.play();
            break;
            case "3":
                 var aaoge = document.getElementById("audio3");
                
                aaoge.play();
            break;
            case "4":
                 var good = document.getElementById("audio4");
                good.play();
            break;
            case "5":
                 var nightwemet = document.getElementById("audio5");
                nightwemet.play();
            break;
            case "6":
                 var JiyeinKyu = document.getElementById("audio6");
                JiyeinKyu.play();
            break;
            case "7":
                 var worst = document.getElementById("audio7");
                worst.play();
            break;

            

        }
    
    });

}
let arctic= new Audio("./sounds/Y2meta.app - 505 (128 kbps).mp3")
let sheila= new Audio("./sounds/_Sheila Ki Jawani_ Full Song _ Tees Maar Khan _ Katrina Kaif _ Vishal Dadlani, Sunidhi Chauhan (128).mp3");
let aaoge= new Audio("./sounds/The Local Train - Aaoge Tum Kabhi (Official) (128).mp3" );
let feelingg= new Audio("./sounds/Michael Bublé - Feeling Good [Official 4K Remastered Music Video] (192).mp3");
let nightwemet= new Audio("./sounds/Lord Huron - The Night We Met (Official Lyric Video) (192).mp3");
let JiyeinKyu= new Audio("./sounds/_Jiyein Kyun Dum Maaro Dum_  Full Video Song (HD) _ Rana Daggubati, Bipasha Basu (128).mp3");
let Atmyworst= new Audio("./sounds/Pink Sweat$ - At My Worst (Official Video) (192).mp3");

const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


let songs=[
    {ele: arctic , audioname: 'Playing-505', img:"./images/505.png"},
    {ele: sheila , audioname: 'Playing-Sheila Ki Jawani', img:"./images/shiela.png"},
    {ele: aaoge , audioname: 'Playing-Aaoge Tum Kabhi',img:"./images/aaoge.png"},
    {ele: feelingg , audioname: 'Playing-Feeling Good', img:'./images/feeling good.png'},
    {ele: nightwemet , audioname: 'Playing-The Night We Met',img:'./images/night we met.png'},
    {ele: JiyeinKyu , audioname: 'Playing-Jyein Kyu', img:'./images/jiyein kyu.png'},
    {ele: Atmyworst , audioname: 'Playing-At My Worst', img:'./images/atmyworst.png'},
];
var current=0;
let currentSong=songs[current].ele;
const Heading = document.querySelector('h2');
Heading.innerHTML = 'Playing-505';




playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  Heading.innerHTML = songs[current].audioname;
  document.getElementById("main").src=songs[current].img;

  
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}
