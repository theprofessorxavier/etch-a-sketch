//adjust number of squares
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let row = prompt("Row: ");
    let column = prompt("Column: ");
    row = (parseInt(row)>100 || parseInt(row)<0) ? 0 : parseInt(row);
    column = (parseInt(column)>100 || parseInt(column)<0) ? 0 : parseInt(column);
    let currentContainer = document.querySelector(".container");
    createCanvas(row, column, createContainer(currentContainer));
});

function createContainer(currentContainer){
    let newContainer = document.createElement("div");
    newContainer.setAttribute("class","container");
    document.body.appendChild(newContainer);
    document.body.removeChild(currentContainer);
    return newContainer;
}

function createCanvas(row, column, newContainer){
    let numberOfSquares = row * column;
    let squareHeight = 800/row, 
        squareWidth = 800/column;

    for(let i = 0; i < numberOfSquares; i++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        newContainer.appendChild(square);
    }

    // adjust square height and hover effect
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.style.cssText = `height: ${squareHeight}px;
                                width: ${squareWidth}px;`;
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor = "red";
        });
    });
}