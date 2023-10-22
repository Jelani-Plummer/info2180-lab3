const squares = document.querySelectorAll('#board div');

document.addEventListener('DOMContentLoaded', function () {
    function initializeBoard() {
      squares.forEach(square => {
        square.classList.add('square');
        square.addEventListener('click', function(){
            if (!square.classList.contains('X') && !square.classList.contains('O')){
                const player = gameState.length % 2 === 0 ? 'X' : 'O';
                square.classList.add(player);
                gameState[index] = player;
            }

        })
      });
    }
  
    initializeBoard();
  });



  
  
  
  
  
  