let pieceStartPositions = {
  pawn: {
    white: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    black: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  },
  rook: { white: ["a1", "h1"], black: ["a8", "h8"] },
  knight: { white: ["b1", "g1"], black: ["b8", "g8"] },
  bishop: { white: ["c1", "f1"], black: ["c8", "f8"] },
  queen: { white: ["d1"], black: ["d8"] },
  king: { white: ["e1"], black: ["e8"] },
};
let basicPieces = Object.keys(pieceStartPositions);

let whitePieceImagePaths = basicPieces.map((piece) => {
  return `images/gamepieces/white/wh_${piece}.svg`;
});
let blackPieceImagePaths = basicPieces.map((piece) => {
  return `images/gamepieces/black/bl_${piece}.svg`;
});

let pieceImagePaths = [[...whitePieceImagePaths], [...blackPieceImagePaths]];

const createGamePiece = (imgPath) => {
  let defineImageValue = (path) => {
    let imageValue;
    path.includes("pawn")
      ? (imageValue = "pawn")
      : path.includes("rook")
      ? (imageValue = "rook")
      : path.includes("knight")
      ? (imageValue = "knight")
      : path.includes("bishop")
      ? (imageValue = "bishop")
      : path.includes("queen")
      ? (imageValue = "queen")
      : path.includes("king")
      ? (imageValue = "king")
      : console.error("No value defined");
    return imageValue;
  };
  let pieceImg = document.createElement("img");
  pieceImg.className = `piece ${defineImageValue(imgPath)}`;
  pieceImg.src = imgPath;
  pieceImg.style.position = "absolute";
  pieceImg.style.top = 0 + "px";
  pieceImg.style.left = 0 + "px";
  pieceImg.style.width = 100 + "%";
  pieceImg.style.rotate = 180 + "deg";
  pieceImg.style.transformOrigin = "center center";
  pieceImg.style.zIndex = 100;
  pieceImg.setAttribute("pieceValue", defineImageValue(imgPath));
  pieceImg.setAttribute(
    "pieceColor",
    imgPath.includes("wh_") ? "white" : "black"
  );

  return pieceImg;
};

const createGameSet = async (gameSet) => {
  let pieceImages = [];
  for (const set of gameSet) {
    set.forEach((path) => {
      pieceImages.push(createGamePiece(path));
    });
  }
  return pieceImages;
};

const allocatePieces = (startPositionsObj, img) => {
  let tiles = [...document.getElementsByClassName("tile")];

  for (const tile of tiles) {
    let tileCoordinate = tile.classList[1];

    startPositionsObj.pawn.white.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[0].cloneNode(true))
      : startPositionsObj.pawn.black.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[6].cloneNode(true))
      : startPositionsObj.rook.white.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[1].cloneNode(true))
      : startPositionsObj.rook.black.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[7].cloneNode(true))
      : startPositionsObj.knight.white.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[2].cloneNode(true))
      : startPositionsObj.knight.black.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[8].cloneNode(true))
      : startPositionsObj.bishop.white.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[3].cloneNode(true))
      : startPositionsObj.bishop.black.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[9].cloneNode(true))
      : startPositionsObj.queen.white.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[4].cloneNode(true))
      : startPositionsObj.queen.black.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[10].cloneNode(true))
      : startPositionsObj.king.white.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[5].cloneNode(true))
      : startPositionsObj.king.black.indexOf(tileCoordinate) >= 0
      ? tile.appendChild(img[11].cloneNode(true))
      : undefined;
  }
};

const setGamePieces = async () => {
  try {
    await createGameSet(pieceImagePaths);
  } catch (error) {
    console.error(error);
  } finally {
    let pieceImgPromise = Promise.resolve(createGameSet(pieceImagePaths));
    pieceImgPromise.then((pieceImgElements) => {
      allocatePieces(pieceStartPositions, pieceImgElements);
    });
  }
};

setGamePieces();
