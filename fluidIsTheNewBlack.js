/**
 * @author Joe Jackson
 */


function myFunction() {
  document.getElementById("demo").innerHTML = "Demo paragraph changed.";
}

function myFunction2() {
	document.getElementById("demo").innerHTML = "Demo paragraph changed back.";
}


function draw() {
  var canvas = document.getElementById('tutorialCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}
