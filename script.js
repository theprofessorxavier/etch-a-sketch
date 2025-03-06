const container = document.querySelector(".container");
//create squares
for(let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
}
//hover effect
const squares = document.querySelectorAll(".square");
squares.forEach((square)=>{
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "red";
    });
});