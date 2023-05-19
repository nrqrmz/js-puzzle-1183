const hintButton = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');
const tiles = document.querySelectorAll('td');

hintButton.addEventListener('click', () => {
  hint.classList.toggle('active');
})

const swapTiles = (tile) => {
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerText = tile.innerText;
  tile.innerText = '';
  emptyTile.classList.remove('empty');
  tile.classList.add('empty');
}

const getCoordinates = (tile)  => {
  const xPosition = tile.cellIndex;
  const yPosition = tile.parentElement.rowIndex;
  return {x: xPosition, y: yPosition};
}

const validMove = (tile) => {
  const currentTile = getCoordinates(tile);
  const emptyTile = getCoordinates(document.querySelector('.empty'));

  const sameColumn = currentTile.x === emptyTile.x;
  const sameRow = currentTile.y === emptyTile.y;

  const xAdjacent = Math.abs(currentTile.x - emptyTile.x) === 1;
  const yAdjacent = Math.abs(currentTile.y - emptyTile.y) === 1;

  return (sameColumn && yAdjacent) || (sameRow && xAdjacent);
};

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    if (validMove(event.currentTarget)) {
      swapTiles(event.currentTarget);
    }
  })
})

// Pseudo-code
// 1. Swap Tiles
// 2. Check if they are in the same column
// 3. Check if they are in the same row
// 4. Check if they are adjacents (x)
// 5. Check if they are adjacents (y)
























// The rules for adjacency were as follows:
// -------------------------
// | x,y   x y   x y   x y |
// -------------------------
// | 0,0 | 1,0 | 2,0 | 3,0 |
// -------------------------
// | 0,1 | 1,1 | 2,1 | 3,1 |
// -------------------------
// | 0,2 | 1,2 | 2,2 | 3,2 |
// -------------------------
// | 0,3 | 1,3 | 2,3 | 3,3 |
// -------------------------
