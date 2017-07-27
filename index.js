var squares = document.querySelectorAll(".square");
var numOfColorsToPick = 6;
var colorsArr = generateRandColors(numOfColorsToPick);

var selectedColor = pickRandColor();
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.innerHTML = selectedColor;

var titleDisplay = document.getElementById("title");

var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");


easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numOfColorsToPick = 3;
	for(var i = 3; i<6;i++){
		squares[i].style.display="none";
	}
	resetGame();
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numOfColorsToPick = 6;
	for(var i = 3; i<6;i++){
		squares[i].style.display="block";
	}
	resetGame();
})

var resetButton = document.getElementById("reset"); 
drawBoard();
resetButton.addEventListener("click",function(){
	resetGame();
})

function resetGame(){
	colorsArr = generateRandColors(numOfColorsToPick);
	selectedColor = pickRandColor();
	colorDisplay.innerHTML = selectedColor;
	title.style.background="steelblue"
	messageDisplay.textContent="";
	drawBoard();
}
function drawBoard(){
	resetButton.textContent = "New Colors?"
	for(var i = 0; i<squares.length; i++){
	// gives the squares a color
	squares[i].style.background = colorsArr[i];

	//adds a click listener
	squares[i].addEventListener("click",function(){
		var guessColor = this.style.background;
		
		if(selectedColor == guessColor){
			message.textContent="Correct!";
			title.style.background=selectedColor;
			changeAllColors();
			resetButton.textContent="Play Again?"
		} else {
			this.style.background="#232323";
			message.textContent="Wrong!";
		}

	});
}
}


function changeAllColors(){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background=selectedColor;
	}
}

function pickRandColor(){
	var randNum = Math.floor(Math.random() * colorsArr.length);
	return colorsArr[randNum];
}

function generateRandColors(numOfColors){
	var colorsArray =[];
	var rgbString="rgb(";
	for(var i = 0; i<numOfColors; i++){
		for(var x = 0; x<3;x++){
			rgbString+=Math.floor(Math.random() * 256);
			if(x < 2){
				rgbString+=", ";
			} else {
				rgbString+=")";
			}
		}
		colorsArray.push(rgbString);
		rgbString ="rgb(";
	}
	return colorsArray;
}