document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize the game board
    function initializeBoard() {
      const squares = document.querySelectorAll('#board div');
  
      // Add the 'square' class to each square
      squares.forEach(square => {
        square.classList.add('square');
      });
    }
  
    // Call the initializeBoard function when the page loads
    initializeBoard();
  });

  
  
  
  
  
  