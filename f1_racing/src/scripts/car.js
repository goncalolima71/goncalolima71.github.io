class Car {
    constructor(model, position, speed) {
        this.model = model;
        this.position = position; // { x: 0, y: 0, z: 0 }
        this.speed = speed; // initial speed
        this.direction = 0; // angle in degrees
        this.isMoving = false;
    }

    accelerate(amount) {
        this.speed += amount;
        this.isMoving = true;
    }

    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        if (this.speed === 0) {
            this.isMoving = false;
        }
    }

    turn(angle) {
        this.direction += angle;
    }

    updatePosition(deltaTime) {
        if (this.isMoving) {
            const radians = THREE.MathUtils.degToRad(this.direction);
            this.position.x += Math.sin(radians) * this.speed * deltaTime;
            this.position.z += Math.cos(radians) * this.speed * deltaTime;
        }
    }

    checkCollision(obstacle) {
        // Simple bounding box collision detection
        const carBox = new THREE.Box3().setFromCenterAndSize(
            new THREE.Vector3(this.position.x, 0, this.position.z),
            new THREE.Vector3(1, 1, 1) // Assuming car size
        );
        const obstacleBox = new THREE.Box3().setFromCenterAndSize(
            new THREE.Vector3(obstacle.position.x, 0, obstacle.position.z),
            new THREE.Vector3(1, 1, 1) // Assuming obstacle size
        );

        return carBox.intersectsBox(obstacleBox);
    }
}

export default Car;