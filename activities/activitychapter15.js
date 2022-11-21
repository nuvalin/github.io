var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
var thingToDo = document.getElementById("thingToDo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
var d = new Date();
// call the displayDate() function
displayDate();

function displayDate() {
  // todo: display the current date in the todaysdate div
  todayDate.innerHTML = d.toDateString();
}


function displayActivity() {
 /* todo: set a variable, called youShould, with a 
different string based on what day of the 
week it is. */
var dayOfWeek = d.getDay();
var youShould;
switch (dayOfWeek) {
  case 0:
    youShould = "take a walk.";
    break;
  case 1:
    youShould = "drink some tea!";
    break;
  case 2:
    youShould = "Take time to smell the roses!";
    break;
  case 3:
    youShould = "Dont forget to eat breakfast!";
    break;
  case 4:
    youShould = "Learn something new today!";
    break;
  case 5:
    youShould = "Make a list of things you like to do.";
    break;
  case 6:
    youShould = "Do one thing from your list of things  you like to do.";
    break;
  default:
    youShould = "Hmm. Something has gone wrong.";
    break;
}

// todo: output the value of youShould into the thingToDo divthingToDo.innerHTML = youShould;
thingToDo.innerHTML = youShould;
}
