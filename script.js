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
