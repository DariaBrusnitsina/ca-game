let cells = []
export let forest = []
export let mushrooms = []

const widthNum = 50
const heightNum = 50

  function generateCells(width, height){
    for(let i=0; i<width; i++){
      cells[i] = []
      for(let j=0; j<height; j++){

        if(Math.random() > 0.5){
          cells[i][j] = {
            x: i,
            y: j,
            aliveNow: true,
            aliveNext: false,
            liveNeighbours: 0
          }
        } else {
          cells[i][j] = {
            x: i,
            y: j,
            aliveNow: false,
            aliveNext: false,
            liveNeighbours: 0
          }
        }
      }
    }
  }

  function cellIsAliveNextGeneration(){
  for(let i=0; i<cells.length; i++){
    for(let j=0; j<cells[i].length; j++){
      cells[i][j].liveNeighbours = 0

        if(typeof cells[i-1] != 'undefined' && cells[i-1][j].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i+1] != 'undefined' && cells[i+1][j].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i][j-1] != 'undefined' && cells[i][j-1].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i][j+1] != 'undefined' && cells[i][j+1].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i+1] !== 'undefined' && typeof cells[i][j+1] !== 'undefined' && cells[i+1][j+1].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i-1] !== 'undefined' && typeof cells[i][j+1] !== 'undefined' && cells[i-1][j+1].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i-1] !== 'undefined' && typeof cells[i][j-1] !== 'undefined' && cells[i-1][j-1].aliveNow){
          cells[i][j].liveNeighbours++
        }
        if(typeof cells[i+1] !== 'undefined' && typeof cells[i][j-1] !== 'undefined' && cells[i+1][j-1].aliveNow){
          cells[i][j].liveNeighbours++
        }

      if(cells[i][j].liveNeighbours <= 1 || cells[i][j].liveNeighbours >= 7){
        cells[i][j].aliveNext = false
      } else {
        cells[i][j].aliveNext = true
      }

    }
  }
}

  function drawCells() {
    for(let i=0; i<cells.length; i++){
      for(let j=0; j<cells[i].length; j++){

        if(!cells[i][j].aliveNow) {
          let number = Math.floor(Math.random() * (12 - 1) + 1)
          forest.push([i, j, number])
        }

        if (cells[i][j].aliveNow){
          if (i < widthNum/2 && j < widthNum/2 && Math.random()<0.3) {
            let number = Math.floor(Math.random() * (8 - 2) + 2)
            mushrooms.push([i, j, number])
          }
        }
      }
    }
  }

  function resetGeneration() {
    for(let i=0; i<cells.length; i++){
      for(let j=0; j<cells[i].length; j++){
         cells[i][j].aliveNow = cells[i][j].aliveNext
      }
    }
  }


export function createForest() {
    generateCells(widthNum, heightNum);
    cellIsAliveNextGeneration();

    for(let i=0; i<5; i++){
      resetGeneration();
      cellIsAliveNextGeneration();
    }

    drawCells()
}
createForest()
