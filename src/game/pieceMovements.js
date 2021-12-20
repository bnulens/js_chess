let xCoords = [..."abcdefgh"];
let yCoords = [...Array(9).keys()].slice(1);

const pieceCollisionCheck = (pieceObj, tileArr) => {
  pieceColor !== pieceColor
    ? takePiece()
    : pieceColor === pieceColor
    ? reducePossibleTiles()
    : undefined;
};

const definePieceMovement = (pieceObj) => {
  let originCoord = pieceObj.fromTile.split("");
  let px = originCoord[0];
  let py = parseInt(originCoord[1]);

  // Find index of vertical/horizontal coordinate
  let pxIndex = xCoords.indexOf(px);
  let pyIndex = yCoords.indexOf(py);

  //
  //   Define PAWN movement
  //
  if (pieceObj.piece === "pawn") {
    let pyNextIndex = py + 1;
    let pxIndexLeft = xCoords[pxIndex - 1];
    let pxIndexRight = xCoords[pxIndex + 1];

    let nextMoveTile = px + pyNextIndex;
    let takePieceTiles = [];

    if (py === 8) {
      let nextMoveTile = null;
      let takePieceTile = null;
      pawnConvert();
    }
    const xAxisTakeTiles = (pxILeft, pxIRight, pyNI, parentArr) => {
      if (pxILeft === undefined) {
        let takeTileRight = pxIRight + pyNI;
        parentArr.push(takeTileRight);
      }
      if (pxIRight === undefined) {
        let takeTileLeft = pxILeft + pyNI;
        parentArr.push(takeTileLeft);
      }
      if (pxILeft !== undefined && pxIRight !== undefined) {
        let takeTileLeft = pxILeft + pyNI;
        let takeTileRight = pxIRight + pyNI;
        parentArr.push(takeTileLeft, takeTileRight);
      }
    };

    const pawnConvert = () => {
      console.log("convert pawn to another piece");
    };

    xAxisTakeTiles(pxIndexLeft, pxIndexRight, pyNextIndex, takePieceTiles);

    console.log("movePawnTile", nextMoveTile);
    console.log("takeTiles", takePieceTiles);
  }
  //
  //   Define ROOK movement
  //
  if (pieceObj.piece === "rook") {
    const defineAxisMove = (coordsArr, axisIndex) => {
      if (axisIndex === 0) {
        let possibleCoordinates = coordsArr.slice(axisIndex + 1);
        return possibleCoordinates;
      } else {
        let preVal = coordsArr.slice(0, axisIndex);
        let postVal = coordsArr.slice(axisIndex + 1);
        let possibleCoordinates = preVal.concat(postVal);
        return possibleCoordinates;
      }
    };

    const defineRookMoves = async () => {
      try {
        let xAxisProm = await defineAxisMove(xCoords, pxIndex);
        let yAxisProm = await defineAxisMove(yCoords, pyIndex);
        Promise.all([xAxisProm, yAxisProm]).then((axisCoordinates) => {
          let [xAxis, yAxis] = axisCoordinates;
          let xCoords = xAxis.map((xAx) => {
            return `${xAx}${py}`;
          });
          let yCoords = yAxis.map((yAx) => {
            return `${px}${yAx}`;
          });

          let rookCoords = xCoords.concat(yCoords);
          console.log("moveRookTiles", rookCoords);
          return rookCoords;
        });
      } catch (error) {
        console.error(error);
      }
    };
    defineRookMoves();
  }
  if (pieceObj.piece === "knight") {
    const defineKnightMoves = () => {
      let addpxOne = pxIndex + 1;
      let addpxTwo = pxIndex + 2;
      let subpxOne = pxIndex - 1;
      let subpxTwo = pxIndex - 2;

      let addpyOne = pyIndex + 1;
      let addpyTwo = pyIndex + 2;
      let subpyOne = pyIndex - 1;
      let subpyTwo = pyIndex - 2;

      let possiblePositions = [];

      const possibleKnightTiles = (xAxisOp, yAxisOp) => {
        if (xAxisOp >= 0 && xAxisOp < 8 && yAxisOp >= 0 && yAxisOp < 8) {
          let axisOp = `${xCoords[xAxisOp]}${yAxisOp}`;
          possiblePositions.push(axisOp);
        }
      };

      //   Positions above piece
      possibleKnightTiles(subpxTwo, addpyOne);
      possibleKnightTiles(subpxOne, addpyTwo);
      possibleKnightTiles(addpxOne, addpyTwo);
      possibleKnightTiles(addpxTwo, addpyOne);

      //   Positions below piece
      possibleKnightTiles(subpxTwo, subpyOne);
      possibleKnightTiles(subpxOne, subpyTwo);
      possibleKnightTiles(subpxTwo, subpyOne);
      possibleKnightTiles(subpxOne, subpyTwo);

      console.log("moveKnightTiles", possiblePositions);
    };

    defineKnightMoves();
  }
  if (pieceObj.piece === "bishop") {
    // NW diagonal = px - 1, py + 1
    // NE diagonal = px + 1, py + 1
    // SE diagonal = px + 1, py - 1
    // SW diagonal = px - 1, py - 1

    const defineDiagonals = () => {
      let xDistances = [];

      const distanceToIndex = (coordArr, x, y) => {
        let i, j;
        let minDist = Number.MAX_VALUE;

        for (i = 0; i < coordArr.length; i++) {
          for (j = i + 1; j < coordArr.length; j++) {
            if (
              ((x == coordArr[i] && y == coordArr[j]) ||
                (y == coordArr[i] && x == coordArr[j])) &&
              minDist > Math.abs(i - j)
            )
              minDist = Math.abs(i - j);
          }
        }
        if (minDist > coordArr.length) {
          return -1;
        }
        return minDist;
      };
      for (let i = 0; i < xCoords.length; i++) {
        xDistances.push(distanceToIndex(xCoords, px, xCoords[i]));
      }
      return xDistances;
    };

    const defineBishopMoves = () => {
      defineDiagonals();
      let xDistances = [...defineDiagonals()];

      let possibleBishopTiles = xDistances.map((xD, i) => {
        let incrYAxis = py + xD;
        let decrYAxis = py - xD;

        if (incrYAxis !== 0) {
          return `${xCoords[i]}${incrYAxis}`;
        }
      });
      console.log(possibleBishopTiles);
    };

    defineBishopMoves();
  }

  if (pieceObj.piece === "queen") {
    console.log(px, py);
  }
  if (pieceObj.piece === "king") {
    console.log(px, py);
  }
};

export { definePieceMovement };
