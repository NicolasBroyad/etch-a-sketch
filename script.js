let rowContainer;
let cell;
let container = document.querySelector(".container");

let rows = columns = 16;

function createGrid(rows, columns){
    for(i=1; i<=rows; i++){
        rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";
        rowContainer.style.justifyContent = "center";
        rowContainer.style.flex = "1";
        container.appendChild(rowContainer);
        for(j=1; j<=columns; j++){
            cell = document.createElement("div");
            cell.style.backgroundColor = "green";
            cell.style.flex = "1";
            // cell.style.height = "40px"
            // cell.style.width = "40px"
            let cellNumber = columns*i+j;
            cell.id = `cell${cellNumber}`;
            cell.classList.add("cell");
            rowContainer.appendChild(cell);
        }
    }
}

createGrid(rows,columns);

container.addEventListener("mouseover", function(event){
    if(event.target.className === "cell"){
        let cellHoveredId = "#" + event.target.id;
        let cellHovered = document.querySelector(cellHoveredId);
        cellHovered.style.backgroundColor = "white";
    }


});

let gridSizeButton = document.querySelector("#grid-size-button");
gridSizeButton.addEventListener("click",function(){
    let userInput = Number(prompt("Type the number of squares per size for the new grid (max 100): "));
    if(typeof(userInput) !== "number" || isNaN(userInput)){
        alert("The entered value is not a number")
    } else if(userInput > 100){
        alert("The entered number is higher than 100");
    } else if(userInput === 0){
        alert("The entered number can not be 0 (cero)");
    } else {
        container.innerHTML = "";
        rows = columns = userInput;
        createGrid(rows, columns);
    }
})

let restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click",function(){
    container.innerHTML = "";
    createGrid(rows, columns);
})