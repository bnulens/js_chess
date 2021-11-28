let xCoords = [..."abcdefgh"];
let yCoords = [...Array(9).keys()].slice(1);

const collisionCheck = (pieceObj, tileArr) => {
  pieceColor !== pieceColor
    ? takePiece()
    : pieceColor === pieceColor
    ? reducePossibleTiles()
    : undefined;
};

const pieceMovement = (pieceObj) => {
  let originCoord = pieceObj.fromTile.split("");
  let px = originCoord[0];
  let py = parseInt(originCoord[1]);
  //   console.log(px, py);

  // Find index of vertical/horizontal coordinate
  let pxIndex = xCoords.indexOf(px);
  let pyIndex = yCoords.indexOf(py);

  //   Define PAWN movement
  if (pieceObj.piece === "pawn") {
    let pyIndex = py + 1;

    let takePieceTiles = [
      xCoords[pxIndex - 1] + pyIndex,
      xCoords[pxIndex + 1] + pyIndex,
    ];
    let moveTiles = [px + (py + 1)];

    console.log("moveTiles", moveTiles);
    console.log("takeTiles", takePieceTiles);
  }
  //   Define ROOK movement
  if (pieceObj.piece === "rook") {
    const defineAxisMove = (coordsArr, axisIndex) => {
      if (axisIndex === 0) {
        let possibleCoordinates = coordsArr.slice(axisIndex + 1);
        return possibleCoordinates;
      } else {
        let postVal = coordsArr.slice(axisIndex + 1);
        let preVal = coordsArr.slice(0, axisIndex);
        let possibleCoordinates = preVal.concat(postVal);
        return possibleCoordinates;
      }
    };

    const defineRookMoves = async () => {
      try {
        let xAxisProm = await defineAxisMove(xCoords, pxIndex);
        let yAxisProm = await defineAxisMove(yCoords, pyIndex);
        Promise.all([xAxisProm, yAxisProm]).then((axisCoordinates) => {
          let xAxis = axisCoordinates[0];
          let yAxis = axisCoordinates[1];
          let xCoords = xAxis.map((xAx) => {
            return `${xAx}${py}`;
          });
          let yCoords = yAxis.map((yAx) => {
            return `${px}${yAx}`;
          });

          let rookCoords = xCoords.concat(yCoords);
          console.log("moveTiles", rookCoords);
          return rookCoords;
        });
      } catch (error) {
        console.error(error);
      }
    };
    defineRookMoves();
  }
  if (pieceObj.piece === "knight") {
  }
  if (pieceObj.piece === "bishop") {
  }
  if (pieceObj.piece === "queen") {
  }
  if (pieceObj.piece === "king") {
  }
};

export { pieceMovement };
