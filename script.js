const container = document.createElement("div");
container.setAttribute("class","container");
document.body.appendChild(container);
for(let i=0;i<16;i++){
    const row = document.createElement("div");
    row.setAttribute("class","row");
    container.appendChild(row);
    for(let j=0;j<16;i++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        row.appendChild(square);
    }
}
