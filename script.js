let start_button = document.getElementsByClassName("start-game")[0];
let how_to_button = document.getElementsByClassName("how-to-play")[0];
let end_button = document.getElementsByClassName("end-game")[0];
start_button.addEventListener("click" , () => {
    start_game();
});

end_button.addEventListener("click" , () => {
    end_game();
})



function start_game() {
    let hide_stuff = document.getElementsByClassName("bgs")[0];
    let game_area = document.getElementsByClassName("game-canvas")[0];
    hide_stuff.setAttribute("hidden" , "hidden");
    game_area.removeAttribute("hidden");
   
}

function end_game() {
    let hide_stuff = document.getElementsByClassName("bgs")[0];
    let game_area = document.getElementsByClassName("game-canvas")[0];
    hide_stuff.removeAttribute("hidden");
    game_area.setAttribute("hidden" , "hidden");
}





function createCube() {
    let x = document.createElement("div");
    let position_left = Math.random() * 1000;
    x.style.setProperty("--my-start-left" , (position_left + "px"));
    x.style.setProperty("--my-middle-left" , (position_left + 200 + "px"));
    x.style.setProperty("--my-end-left" , (position_left + 400 + "px"));
    let game_area = document.getElementsByClassName("game-canvas")[0];
    game_area.appendChild(x);
    x.className = "cube";

}



getComputedStyle(document.documentElement)
    .getPropertyValue('--my-start-left'); // returns val


setInterval(() => {
   for(let i = 0; i < 1; i ++){
    createCube();
   }
} , 1500)


clearInterval(createCube());

let game_area = document.getElementsByClassName("game-area")[0];
let x_initial;
let y_initial;
let x_final;
let y_final;
game_area.addEventListener("mousedown" , (e) => {
    console.log(e);
    x_initial = e.screenX;
    y_initial = e.screenY;
    console.log(x_initial);
})

game_area.addEventListener("mouseup" , (e) => {
    console.log("Final" + e);
    x_final = e.screenX;
    y_final = e.screenY;
})






let cube = document.getElementsByClassName("cube");

for(let i = 0; i < cube.length; i ++){
    cube.ondragstart = function () {
        return false;
    }
}



let num = Math.random() * 4;

function startDragLine(e) {
    firstClick = [e.pageX, e.pageY];
    //start the loop
    intervalLoop = setInterval(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(firstClick[0], firstClick[1]);
        ctx.lineTo(cursorX, cursorY, 6);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
    },10);
    let audio = new Audio("./assets/sword.mp3");
    audio.play();
}
function stopDragLine(){
    clearInterval(intervalLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
    document.onmousemove = function(e){
        cursorX = e.pageX;
        cursorY = e.pageY;
    };
    canvas.addEventListener('mousedown', startDragLine, false);
    canvas.addEventListener('mouseup', stopDragLine, false);
}

var cursorX;
var cursorY;
var canvas = document.getElementById("canvas"); //canvas, context, other vars etc
var ctx = canvas.getContext("2d");
var firstClick = [0,0];
var intervalLoop = null;
init();

// Use the e.screenX and e.screenY to automatically trigger the mouseup event (i.e fire that corresponding fn.. otherwise leads to bugs)


