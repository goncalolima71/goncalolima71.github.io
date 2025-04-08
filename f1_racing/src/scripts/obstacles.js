class Obstacles {
    constructor() {
        this.obstacles = [];
        this.spawnRate = 2000; // Time in milliseconds to spawn a new obstacle
        this.init();
    }

    init() {
        setInterval(() => {
            this.spawnObstacle();
        }, this.spawnRate);
    }

    spawnObstacle() {
        const obstacle = this.createObstacle();
        this.obstacles.push(obstacle);
        // Add the obstacle to the scene (assuming a reference to the scene exists)
        // scene.add(obstacle);
    }

    createObstacle() {
        // Create a new obstacle object (e.g., a 3D model or a simple geometry)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const obstacle = new THREE.Mesh(geometry, material);
        
        // Set the position of the obstacle
        obstacle.position.set(Math.random() * 10 - 5, 0, -50); // Random x position, z position behind the camera
        return obstacle;
    }

    updateObstacles() {
        // Update the position of obstacles and handle collision detection
        this.obstacles.forEach((obstacle, index) => {
            obstacle.position.z += 0.1; // Move obstacle forward
            
            // Remove obstacle if it goes out of view
            if (obstacle.position.z > 50) {
                this.removeObstacle(index);
            }
        });
    }

    removeObstacle(index) {
        // Remove obstacle from the scene and the array
        // scene.remove(this.obstacles[index]);
        this.obstacles.splice(index, 1);
    }
}

export default Obstacles;