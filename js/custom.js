$(document).ready(function(){

//IMAGE CHANGING FUNCTION

function imgFunction(){
	var imgChange = document.getElementById("image").value;
	
	switch(imgChange){

		case "christmas":
		$("img").attr("src","assets/christmas.jpg");
				
				break;

		case "valentines":
		$("img").attr("src","assets/valentines.jpg");
				
				break;

		case "birthday":
		$("img").attr("src","assets/birthday.jpg");

	};
};


//CHANGING BACKGROUND FUNCTION


function bgFunction(){
	var bgChange = document.getElementById("background").value;
	
	switch(bgChange){

		case "celadon":
			$(".card").addClass("celadonBackground");
			$(".card").removeClass("graphiteBackground");
			$(".card").removeClass("roseBackground");
				
				break;

		case "graphite":
		$(".card").addClass("graphiteBackground");
		$(".card").removeClass("celadonBackground");
		$(".card").removeClass("roseBackground");
				
				break;

		case "rose":
		$(".card").addClass("roseBackground");
		$(".card").removeClass("celadonBackground");
		$(".card").removeClass("graphiteBackground");
				
				break;

		};
};


//CHANGE FONT FUNCTION 


function fontFunction(){
	var fontChange = document.getElementById("font").value;

	switch(fontChange){

		case "handwriting":
		$(".card h1").addClass("handwriting");
		$(".card h1").removeClass("sketch");
		$(".card h1").removeClass("print");

			break;

		case "sketch":
		$(".card h1").addClass("sketch");
		$(".card h1").removeClass("handwriting");
		$(".card h1").removeClass("print");

			break;

		case "print":
		$(".card h1").addClass("print");
		$(".card h1").removeClass("handwriting");
		$(".card h1").removeClass("sketch");
		
		};

};


//CHANGING BORDER FUNCTION 


function borderFunction(){
	var borderChange = document.getElementById("border").value;

	switch(borderChange){

		case"none":
		$("#noneborder").addClass("noBorder");
		$("#noneborder").removeClass("smallBorder");
		$("#noneborder").removeClass("bigBorder");
		$("#noneborder").removeClass("filledBorder");

			break;

		case "thin":
		$("#noneborder").addClass("smallBorder");
		$("#noneborder").removeClass("noBorder");
		$("#noneborder").removeClass("bigBorder");
		$("#noneborder").removeClass("filledBorder");


			break;

		case "thick":
		$("#noneborder").addClass("bigBorder");
		$("#noneborder").removeClass("noBorder");
		$("#noneborder").removeClass("smallBorder");
		$("#noneborder").removeClass("filledBorder");


			break;

		case "filled":
		$("#noneborder").addClass("filledBorder");
		$("#noneborder").removeClass("noBorder");
		$("#noneborder").removeClass("smallBorder");
		$("#noneborder").removeClass("bigBorder");

	};

};

//TEXT INPUT FUNCTION 

function inputFunction(){
	var inputChange = document.getElementById("message").value;
		$("h1").text(inputChange);
	};


//AUTOMATICALLY CHANGES WHEN USER CHANGES INPUT

$("#image").change(function() {
  imgFunction();
});

$("#background").change(function() {
  bgFunction();
});

$("#font").change(function() {
  fontFunction();
});

$("#border").change(function() {
  borderFunction();
});

$("#message").change(function() {
  inputFunction();
});


//PREVENT DEFAULT BUTTON CLICK EVENT

$("#openButton").click(function(event){
	event.preventDefault();
});


//OPENS CARD ON BUTTON CLICK(??)
function openFunction(){
$("#openButton").onClick(function(){
	$(".card").css(
		"-webkit-transform","rotateY(-165deg)"

		);

	});

};



}); //IFFE ENDS****

