// window.onload = function() {
//
// };

var menuOpen = false;

var sec0 = true;
var sec1 = false;
var sec2 = false;
var sec3 = false;
var sec4 = false;
var sec5 = false;

var onSection = 0;
// 0 - all
// 1 - painting
// 2 - photography
// 3 - technology
// 4 - illustration
// 5 - jewellery

function hideShow() {
  if (menuOpen == false){
    document.getElementById("menu").style.display = "block";
  } else if (menuOpen == true) {
    document.getElementById("menu").style.display = "none";
  }

    menuOpen = !menuOpen;
}

function sect0(){
  sec0 = !sec0;

  if (sec0 == true){
    sec1 = false;
    sec2 = false;
    sec3 = false;
    sec4 = false;
    sec5 = false;
  }

  whichSection();

  // if (sec1 == false && sec2 == false && sec3 == false && sec4 == false && sec5 == false){
  //   sec0 = true;
  // }
}

function sect1(){
  sec1 = !sec1;

  if (sec1 == true){
    sec0 = false;
    sec2 = false;
    sec3 = false;
    sec4 = false;
    sec5 = false;
  }

  whichSection();
}

function sect2(){
  sec2 = !sec2;

  if (sec2 == true){
    sec0 = false;
    sec1 = false;
    sec3 = false;
    sec4 = false;
    sec5 = false;
  }

  whichSection();
}

function sect3(){
  sec3 = !sec3;

  if (sec3 == true){
    sec0 = false;
    sec1 = false;
    sec2 = false;
    sec4 = false;
    sec5 = false;
  }

  whichSection();
}

function sect4(){
  sec4 = !sec4;

  if (sec4 == true){
    sec0 = false;
    sec1 = false;
    sec2 = false;
    sec3 = false;
    sec5 = false;
  }

  whichSection();
}

function sect5(){
  sec5 = !sec5;

  if (sec5 == true){
    sec0 = false;
    sec1 = false;
    sec2 = false;
    sec3 = false;
    sec4 = false;
  }

  whichSection();
}

function whichSection(){

  document.getElementById("button0").style.background = "white";
  document.getElementById("button0").style.color = "black";
  document.getElementById("button1").style.background = "white";
  document.getElementById("button1").style.color = "black";
  document.getElementById("button2").style.background = "white";
  document.getElementById("button2").style.color = "black";
  document.getElementById("button3").style.background = "white";
  document.getElementById("button3").style.color = "black";
  document.getElementById("button4").style.background = "white";
  document.getElementById("button4").style.color = "black";
  document.getElementById("button5").style.background = "white";
  document.getElementById("button5").style.color = "black";

  if (sec0 == true){
    document.getElementById("button0").style.background = "grey";
    document.getElementById("button0").style.color = "white";

    document.getElementById("overthinking").style.display = "block";
    document.getElementById("paper_plane_poetry").style.display = "block";
    document.getElementById("what_am_i_doing_bug").style.display = "block";
    document.getElementById("out_of_touch").style.display = "block";
    document.getElementById("expressive_heart").style.display = "block";
    document.getElementById("how_do_i_survive_moth").style.display = "block";
    document.getElementById("existential_butterfly").style.display = "block";
  } else if (sec1 == true) {
    document.getElementById("button1").style.background = "grey";
    document.getElementById("button1").style.color = "white";

    document.getElementById("overthinking").style.display = "block";

    document.getElementById("paper_plane_poetry").style.display = "none";
    document.getElementById("what_am_i_doing_bug").style.display = "none";
    document.getElementById("out_of_touch").style.display = "none";
    document.getElementById("expressive_heart").style.display = "none";
    document.getElementById("how_do_i_survive_moth").style.display = "none";
    document.getElementById("existential_butterfly").style.display = "none";
  } else if (sec2 == true) {
    document.getElementById("button2").style.background = "grey";
    document.getElementById("button2").style.color = "white";

    document.getElementById("out_of_touch").style.display = "block";

    document.getElementById("paper_plane_poetry").style.display = "none";
    document.getElementById("what_am_i_doing_bug").style.display = "none";
    document.getElementById("overthinking").style.display = "none";
    document.getElementById("expressive_heart").style.display = "none";
    document.getElementById("how_do_i_survive_moth").style.display = "none";
    document.getElementById("existential_butterfly").style.display = "none";
  } else if (sec3 == true) {
    document.getElementById("button3").style.background = "grey";
    document.getElementById("button3").style.color = "white";

    document.getElementById("paper_plane_poetry").style.display = "block";

    document.getElementById("out_of_touch").style.display = "none";
    document.getElementById("what_am_i_doing_bug").style.display = "none";
    document.getElementById("overthinking").style.display = "none";
    document.getElementById("expressive_heart").style.display = "none";
    document.getElementById("how_do_i_survive_moth").style.display = "none";
    document.getElementById("existential_butterfly").style.display = "none";
  } else if (sec4 == true) {
    document.getElementById("button4").style.background = "grey";
    document.getElementById("button4").style.color = "white";

    document.getElementById("what_am_i_doing_bug").style.display = "block";
    document.getElementById("how_do_i_survive_moth").style.display = "block";
    document.getElementById("existential_butterfly").style.display = "block";

    document.getElementById("paper_plane_poetry").style.display = "none";
    document.getElementById("out_of_touch").style.display = "none";
    document.getElementById("overthinking").style.display = "none";
    document.getElementById("expressive_heart").style.display = "none";
  } else if (sec5 == true) {
    document.getElementById("button5").style.background = "grey";
    document.getElementById("button5").style.color = "white";

    document.getElementById("expressive_heart").style.display = "block";

    document.getElementById("paper_plane_poetry").style.display = "none";
    document.getElementById("what_am_i_doing_bug").style.display = "none";
    document.getElementById("overthinking").style.display = "none";
    document.getElementById("out_of_touch").style.display = "none";
    document.getElementById("how_do_i_survive_moth").style.display = "none";
    document.getElementById("existential_butterfly").style.display = "none";
  } else {
    sec0 = true;
    document.getElementById("button0").style.background = "grey";
    document.getElementById("button0").style.color = "white";

    document.getElementById("overthinking").style.display = "block";
    document.getElementById("paper_plane_poetry").style.display = "block";
    document.getElementById("what_am_i_doing_bug").style.display = "block";
    document.getElementById("out_of_touch").style.display = "block";
    document.getElementById("expressive_heart").style.display = "block";
    document.getElementById("how_do_i_survive_moth").style.display = "block";
    document.getElementById("existential_butterfly").style.display = "block";
  }
}

// function whichSection(){
//
//   if (onSection == 0){
//     //all display is block
//   } else if (onSection == 1) {
//     //painting block
//     //everything else, none
//   } else if (onSection == 2) {
//     //painting block
//     //everything else, none
//   } else if (onSection == 3) {
//     //painting block
//     //everything else, none
//   } else if (onSection == 4) {
//     //painting block
//     //everything else, none
//   } else if (onSection == 5) {
//     //painting block
//     //everything else, none
//   } else {
//     sec0 = true;
//     //all display is block
//   }
// }
