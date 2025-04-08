class GameManager {
    constructor() {
        this.score = 0;
        this.difficulty = 1;
        this.isGameOver = false;
    }

    startGame() {
        this.score = 0;
        this.isGameOver = false;
        this.difficulty = 1;
        this.updateGame();
    }

    updateGame() {
        if (!this.isGameOver) {
            this.score += this.difficulty;
            this.checkDifficulty();
            requestAnimationFrame(this.updateGame.bind(this));
        }
    }

    checkDifficulty() {
        if (this.score % 100 === 0) {
            this.difficulty += 1;
        }
    }

    endGame() {
        this.isGameOver = true;
        console.log("Game Over! Your score: " + this.score);
    }

    resetGame() {
        this.startGame();
    }
}

export default GameManager;