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
        console.log(cellHoveredId);
        let cellHovered = document.querySelector(cellHoveredId);
        cellHovered.style.backgroundColor = "white";
    }


});
// container.addEventListener("mouseout", function(event){
//     if(event.target.className === "cell"){
//         let cellHoveredId = "#" + event.target.id;
//         console.log(cellHoveredId);
//         let cellHovered = document.querySelector(cellHoveredId);
//         cellHovered.style.backgroundColor = "green";
//     }
// });

let button = document.querySelector("button");
button.addEventListener("click",function(){
    rows = columns = Number(prompt("Type the number of squares per size for the new grid (max 100): "));
    if(typeof(rows) !== "number" || isNaN(rows)){
        alert("The entered value is not a number")
    } else if(rows > 100){
        alert("The entered number is higher than 100");
    } else if(rows === 0){
        alert("The entered number can not be 0 (cero)");
    } else {
        // alert("You entered " + rows);
        container.innerHTML = "";
        createGrid(rows, columns);
    }

})