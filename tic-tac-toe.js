document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    const gameState = ['.','.','.','.','.','.','.','.','.'];
    var turn = 0;
    function initializeBoard() {
        var squareNumber = -1;
        squares.forEach(square => {
            squareNumber = squareNumber + 1;
            square.setAttribute('square-number', squareNumber);
            square.classList.add('square');

            square.addEventListener('click', function(){
                if (!square.classList.contains('X') && !square.classList.contains('O')){
                    const player = turn % 2 == 0 ? 'X' : 'O';
                    turn++;
                    square.classList.add(player);
                    square.textContent = player;
                    gameState[square.getAttribute('square-number')] = player;
                    hasWon();
                    console.log(gameState);
                }
            })
            square.addEventListener('mouseover', function(){
                square.classList.add('hover');
            });
            square.addEventListener('mouseout', function(){
                square.classList.remove('hover');
            });
        });
    }

    function hasWon(){
        const Lines = [];
        for (let i = 0; i < gameState.length; i += 3) {
            Lines.push(gameState.slice(i, i + 3));
          }
        const diagonalLine1 = [gameState[0],gameState[4],gameState[8]];
        const diagonalLine2 = [gameState[2],gameState[4],gameState[6]];
        Lines.push(diagonalLine1);
        Lines.push(diagonalLine2);
        Lines.forEach(line =>{
            if(line[0] != '.' && line[0] === line [1] && line[1] === line[2])
            {
                const winner = line[0];
                const status = document.getElementById('status');
                status.textContent = `Congratulations! ${winner} is the Winner!`;
            }
        });
    }
    
    initializeBoard();
  });






  
  
  
  
  
  