import * as THREE from 'three';
import { Car } from './scripts/car.js';
import { Track } from './scripts/track.js';
import { GameManager } from './scripts/gameManager.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, car, track, gameManager;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Luz básica
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 10);
    scene.add(light);

    // Carrega o modelo 3D
    const loader = new GLTFLoader();
    loader.load(
        './assets/mclaren_mp45__formula_1.glb',
        (gltf) => {
            const carModel = gltf.scene;
            carModel.scale.set(0.5, 0.5, 0.5);
            carModel.position.set(0, 0.25, 0);
            scene.add(carModel);
        },
        undefined,
        (error) => {
            console.error('Erro ao carregar o modelo:', error);
        }
    );

    car = new Car();
    track = new Track();
    gameManager = new GameManager();

    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    car.update();
    track.update();
    gameManager.update();
    renderer.render(scene, camera);
}

init();
animate();
