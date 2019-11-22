let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

function main(){
	setupModeButtons();
	setupSquares();
	reset();
}
main();

function setupModeButtons(){
	for(let i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(let i = 0; i < squares.length; i++){
	// menambah "click" listener pada .square
		squares[i].addEventListener("click", function(){
			// mengambil warna .square yang dipilih
			let clickedColor = this.style.background;
			// membandingkan warna yg terpilih dengan warna yg diinginkan
			if (clickedColor.includes(pickedColor)) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	// memilih warna acak yg baru dari larik
	pickedColor = pickColor();
	// mengganti .colorDisplay supaya serasi
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// mengganti warna pada .square
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(let i = 0; i < squares.length; i++){
		// mengganti tiap warna sesuai dengan warna yg diinginkan
		squares[i].style.background = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	let arr = []
	for(let i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	// merah dari 0 - 255
	let r = Math.floor(Math.random() * 256);
	// hijau dari 0 - 255
	let g = Math.floor(Math.random() * 256);
	// biru dari 0 - 255
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

