document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board div');
    const gameState = [];
    function initializeBoard() {
      squares.forEach(square => {
        square.classList.add('square');
        square.addEventListener('click', function(){
            if (!square.classList.contains('X') && !square.classList.contains('O')){
                const player = gameState.length % 2 == 0 ? 'X' : 'O';
                square.classList.add(player);
                square.textContent = player;
                gameState[gameState.length] = player;
            }
        })
      });
    }
  
    initializeBoard();
  });




  
  
  
  
  
  