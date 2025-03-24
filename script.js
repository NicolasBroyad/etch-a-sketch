let rowContainer;
let cell;
let container = document.querySelector(".container");

for(i=1; i<=16; i++){
    rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    rowContainer.style.justifyContent = "center";
    container.appendChild(rowContainer);
    for(j=1; j<=16; j++){
        cell = document.createElement("div");
        cell.style.backgroundColor = "green";
        cell.style.height = "40px"
        cell.style.width = "40px"
        let cellNumber = 16*i+j;
        cell.id = `cell${cellNumber}`;
        cell.classList.add("cell");
        rowContainer.appendChild(cell);
    }
}

container.addEventListener("mouseover", function(event){
    if(event.target.className === "cell"){
        let cellHoveredId = "#" + event.target.id;
        console.log(cellHoveredId);
        let cellHovered = document.querySelector(cellHoveredId);
        cellHovered.style.backgroundColor = "red";
    }


});
container.addEventListener("mouseout", function(event){
    if(event.target.className === "cell"){
        let cellHoveredId = "#" + event.target.id;
        console.log(cellHoveredId);
        let cellHovered = document.querySelector(cellHoveredId);
        cellHovered.style.backgroundColor = "green";
    }
});