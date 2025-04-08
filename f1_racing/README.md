# F1 Racing Game

## Overview
This project is a 3D infinite Formula 1 racing game built using Three.js. Players can experience the thrill of racing on an endless track, navigating through obstacles and collecting items to enhance their gameplay.

## Features
- **Infinite Track Generation**: The game generates an endless racing track, providing a continuous racing experience.
- **Car Physics**: Realistic car movement and physics, including acceleration, braking, and collision detection.
- **Obstacles**: Various obstacles on the track that players must avoid to maintain speed and progress.
- **Collectibles**: Players can collect items such as coins and boosts to enhance their performance.
- **Sound Effects**: Immersive audio experience with engine sounds and other sound effects.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd f1-racing-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Game
To start the game, run the following command:
```
npm start
```
This will launch the game in your default web browser.

## Project Structure
- `src/index.html`: Main HTML document for the game.
- `src/main.js`: Entry point of the application.
- `src/styles/style.css`: CSS styles for the game.
- `src/assets/models`: Directory for 3D models.
- `src/assets/textures`: Directory for texture files.
- `src/assets/sounds`: Directory for audio files.
- `src/scripts/car.js`: Class handling car properties and methods.
- `src/scripts/track.js`: Class managing infinite track generation.
- `src/scripts/obstacles.js`: Class defining obstacle behavior.
- `src/scripts/gameManager.js`: Class overseeing game state and scoring.
- `src/scripts/utils.js`: Utility functions for the game.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.