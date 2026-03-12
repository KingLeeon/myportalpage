(function () {
    'use strict';
    
    const cells = document.querySelectorAll('.cell');
    const xScore = document.querySelector('#x-score');
    const oScore = document.querySelector('#o-score');
    const drawScore = document.querySelector('#draw-score');
    const message = document.querySelector('#message');
    const resetButton = document.querySelector('#reset');

    // This object stores all of the game information
    const gameData = {
        // This array is the game board
        // Each spot matches one box in tic tac toe
        board: ['', '', '', '', '', '', '', '', ''],

        // This keeps track of whose turn it is
        currentPlayer: 'X',

        // This tells us if the game is still going
        gameActive: true,

        // These keep track of the score
        scores: {
            x: 0,
            o: 0,
            draw: 0
        },

        // These are all the ways someone can win
        winningPatterns: [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal
            [2, 4, 6]  // other diagonal
        ]
    };

    // This shows the starting message on the page
    message.innerHTML = `<p>Player ${gameData.currentPlayer}'s turn</p>`;

    // This adds a click to every cell
    cells.forEach(function (cell) {
        cell.addEventListener('click', handleCellClick);
    });

    // This makes the reset button work
    resetButton.addEventListener('click', resetGame);

    // This runs when a player clicks a cell
    function handleCellClick(event) {
        // This is the exact box that was clicked
        const cell = event.target;

        // This gets the cell number from the HTML
        const index = cell.dataset.index;

        // Stop if the box is already used
        // Or stop if the game is already over
        if (gameData.board[index] !== '' || !gameData.gameActive) {
            return;
        }

        // Save X or O into the board array
        gameData.board[index] = gameData.currentPlayer;

        // Show X or O on the screen
        cell.innerHTML = gameData.currentPlayer;

        // Give X and O different colors
        if (gameData.currentPlayer === 'X') {
            cell.style.color = '#e85b4f';
        } else {
            cell.style.color = '#4a90e2';
        }

        // Check if the current player won
        if (checkWinner()) {
            message.innerHTML = `<p>Player ${gameData.currentPlayer} wins!</p>`;
            gameData.gameActive = false;

            // Add 1 to the correct player's score
            if (gameData.currentPlayer === 'X') {
                gameData.scores.x++;
                xScore.innerHTML = gameData.scores.x;
            } else {
                gameData.scores.o++;
                oScore.innerHTML = gameData.scores.o;
            }
        }

        // If there are no empty spots left, it is a draw
        else if (!gameData.board.includes('')) {
            message.innerHTML = `<p>It's a draw!</p>`;
            gameData.gameActive = false;
            gameData.scores.draw++;
            drawScore.innerHTML = gameData.scores.draw;
        }

        // If nobody won and it is not a draw, switch turns
        else {
            switchPlayer();
        }
    }

    // This checks all winning patterns
    function checkWinner() {
        // Loop through every possible winning pattern
        for (let i = 0; i < gameData.winningPatterns.length; i++) {
            const pattern = gameData.winningPatterns[i];

            // Grab the 3 board spots from that pattern
            const a = gameData.board[pattern[0]];
            const b = gameData.board[pattern[1]];
            const c = gameData.board[pattern[2]];

            // If all 3 match and are not empty, someone won
            if (a !== '' && a === b && b === c) {
                return true;
            }
        }

        // If no pattern matched, nobody won
        return false;
    }

    // This changes the turn from X to O or O to X
    function switchPlayer() {
        if (gameData.currentPlayer === 'X') {
            gameData.currentPlayer = 'O';
        } else {
            gameData.currentPlayer = 'X';
        }

        // Update the message on the page
        message.innerHTML = `<p>Player ${gameData.currentPlayer}'s turn</p>`;
    }

    // This clears the board and starts the game over
    function resetGame() {
        // Make the board empty again
        gameData.board = ['', '', '', '', '', '', '', '', ''];

        // Start back with player X
        gameData.currentPlayer = 'X';

        // Let the game run again
        gameData.gameActive = true;

        // Clear every box on the screen
        cells.forEach(function (cell) {
            cell.innerHTML = '';
        });

        // Show the starting message again
        message.innerHTML = `<p>Player ${gameData.currentPlayer}'s turn</p>`;
    }
})();