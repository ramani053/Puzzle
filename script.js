var rows=3;
var columns=3;

var currTile;
var otherTile;

var turns=0;

var imgOrder = ["4","2","8","5","1","6","7","9","3"];

window.onload = function(){
    for (let i= 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let tile = document.createElement("img");
          tile.id = i.toString() +"-" + j.toString();
          tile.src= imgOrder.shift() + ".jpg";
          
          tile.addEventListener("dragstart",dragStart);
          tile.addEventListener("dragover",dragOver);
          tile.addEventListener("dragenter",dragEnter);
          tile.addEventListener("dragleave",dragLeave);
          tile.addEventListener("drop",dragDrop);
          tile.addEventListener("dragend",dragEnd);
          
          document.getElementById("board").append(tile);
        } 
    }
}

function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}
function dragDrop() {
    otherTile = this; 
}
function dragEnd(){
    if(!otherTile.src.includes("3.jpg")){
        return;
    }

    let currCoords = currTile.id.split("-");
    let r= parseInt(currCoords[0]);
    let c= parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2= parseInt(otherCoords[0]);
    let c2= parseInt(otherCoords[1]);

    

    let moveRight = r ==r2 && c2 == c+1;
    let moveLeft = r ==r2 && c2 == c-1;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;
    
    let isAvaliable = moveRight || moveLeft || moveUp || moveDown ;

    if(isAvaliable){
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }



}
