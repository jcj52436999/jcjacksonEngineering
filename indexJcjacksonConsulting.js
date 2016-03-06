/**
 * @author Joe Jackson
 */

			function draw() {
				var canvas = document.getElementById('tutorialCanvas');
				if (canvas.getContext) {
					var ctx = canvas.getContext('2d');
				}
			}



function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function myFunction2() {
	document.getElementById("demo").innerHTML = "A Paragraph";
}

var createName = function(first, last) {
    nameConcat = first + " " + last;
    return nameConcat
}

var askName = function() {
    var first = window.prompt("Key your first name please.", "Your first name.");
    var last = window.prompt("Key in your last name please.", "Your last name.");
    var fullName = createName(first, last);
    // fullName = "Your name is " + fullName;
    window.alert("Your name is " + fullName);
}

// askName();

// eof