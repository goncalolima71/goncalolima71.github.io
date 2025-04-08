class Track {
    constructor() {
        this.trackLength = 1000; // Length of the track segment
        this.trackSegments = []; // Array to hold track segments
        this.generateTrack(); // Generate the initial track
    }

    generateTrack() {
        for (let i = 0; i < 10; i++) { // Generate 10 segments initially
            this.addTrackSegment(i * this.trackLength);
        }
    }

    addTrackSegment(position) {
        const segment = this.createTrackSegment(position);
        this.trackSegments.push(segment);
    }

    createTrackSegment(position) {
        // Create a new track segment (geometry, material, etc.)
        const geometry = new THREE.PlaneGeometry(100, this.trackLength);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const trackSegment = new THREE.Mesh(geometry, material);
        trackSegment.rotation.x = -Math.PI / 2; // Rotate to lay flat
        trackSegment.position.z = position; // Position the segment
        return trackSegment;
    }

    updateTrack(carPosition) {
        // Check if the car has passed a segment and add new segments
        if (carPosition.z > this.trackSegments[this.trackSegments.length - 1].position.z) {
            this.addTrackSegment(this.trackSegments[this.trackSegments.length - 1].position.z + this.trackLength);
        }
    }

    getTrackSegments() {
        return this.trackSegments;
    }
}

export default Track;