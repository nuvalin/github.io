//document.getElementById("lefteye").style.backgroundColor =
//"purple";
//document.getElementById("head").style.transform =
//"rotate(15deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
//document.getElementById("body").style.border = "2px black solid";
// Round the corners of his mouth.
//document.getElementById("mouth").style.borderRadius = "4px";
//document.getElementById("righteye").style.border =
//"4px yellow dotted";
//document.getElementById("leftarm").style.backgroundColor =
//"#FF00FF";
//document.getElementById("body").style.color = "#FF0000";
///document.//getElementById("head").style.borderTop =
//"5px black solid"

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;
  var animation = setInterval(frame, 10); // draw every 10ms
  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(animation);
    }
  }
}

var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;
  var animation = setInterval(frame, 10); // draw evey 10ms
  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(animation);
    }
  }
}

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;
  var animation = setInterval(frame, 10); // draw evey 10ms
  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70) {
      clearInterval(animation);
    }
  }
}
