 ///////////Div Background Color Change//////////

let colorBtn = document.getElementById("exOneBtn");
let mainDiv = document.getElementById("divListOne");
let multipleColor = ["gray", "yellow", "skyblue", "orange", "purple", "pink", "green", "black", "aqua", "blue"];

colorBtn.addEventListener("click", changeColor);

function changeColor(){
   let colorArray = parseInt(Math.random() * multipleColor.length);
   mainDiv.style.backgroundColor = multipleColor[colorArray];
}

///////////Button Background Color Change//////////

let btn = document.getElementById("exOneBtn");
let bgColor = ["gray", "yellow", "skyblue", "orange", "purple", "pink", "green", "black", "aqua", "blue"];

btn.addEventListener("click", changeBtnColor);

function changeBtnColor(){
   let colorIndex = parseInt(Math.random() * bgColor.length);
   btn.style.backgroundColor = bgColor[colorIndex];
}
