$(document).ready(function () {
	// let x = prompt("Please give a value for x");
	createGrid();
	clearGrid();
	changeColor();
	eraser();
	randomColor();
});

// let size = 16;
// let grid = size * size;
//let width = 512/size;
//let height = 512/size;

//function to create the grid
function createGrid(x) {
 //let x = promt("Give a value for x");
		for (let i = 0; i < x; i++) {
			  for (var j = 0; j < x; j++) {
				$(".container").append("<div class='box'></div>");
			  }
	}
	$(".box").css({'width': 512/x, 'height': 512/x});
}

//function to clear the grid
function clearGrid() {
	//$("box").css({'background-color': "white"});
	$("#clear").click(function() {
		$(".box").remove();
		// let gridSize = prompt("Please input a grid size");
		// createGrid(gridSize);

	//$(".box").css({'background-color': "white"});
})
}

//function to change the color in black
function changeColor() {
 $("#black").click(function() {
 	$(".box").remove();
 	let gridSize = prompt("Please input a grid size");
		createGrid(gridSize);
 	$(".box").on("mouseover", function() {
		$(this).css({'background-color': "black"});
	})})
	
}

//function to erase the grid
function eraser() {
 $("#eraser").click(function() {
 	$(".box").on("mouseover", function() {
		$(this).css({'background-color': "white"});
	})})	
	
}

// function colors() {
// 	return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
// }

function randomColor() {
	$("#random").click(function() {
 	$(".box").remove();
 	let gridSize = prompt("Please input a grid size");
		createGrid(gridSize);

	let safeColors = ['00','33','66','99','cc','ff'];
let rand = function() {
    return Math.floor(Math.random()*6);
};
let colors = function() {
    let r = safeColors[rand()];
    let g = safeColors[rand()];
    let b = safeColors[rand()];
    return "#"+r+g+b;
};
		
 	$(".box").on("mouseover", function() {
		$(this).css('background-color', colors());
	})})
}


