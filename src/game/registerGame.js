import { definePieceMovement } from "./pieceMovements";

// document.addEventListener("DOMContentLoaded", (e) => {
//   let occupiedTile = [];
//   let allTiles = [...document.getElementsByClassName("tile")];

//   allTiles.forEach((tile) => {
//     if (tile.childNodes.length !== 0) {
//       occupiedTile.push(tile);
//     }
//   });
//   // console.log("occupied", occupiedTile);
// });

const registerMoves = () => {
  let playPiece = { piece: "", pieceColor: "", fromTile: "", toTile: "" };

  document.addEventListener("click", (e) => {
    let clicked = e.target;

    if (clicked.className.includes("piece")) {
      playPiece.piece = clicked.attributes.getNamedItem("piecevalue").value;
      playPiece.pieceColor =
        clicked.attributes.getNamedItem("piececolor").value;
      playPiece.fromTile = clicked.offsetParent.classList[1];
      definePieceMovement(playPiece);
    }
    if (clicked.className.includes("tile")) {
      console.log(clicked.classList[1]);
    }
  });
};

// Get origin tile from piece
// Remove child/piece image from tile
// Append child to target tile

// Movement - check for collision with friendly/opponent pieces

registerMoves();
