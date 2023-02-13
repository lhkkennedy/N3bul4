/* eslint-disable */
import { createCamera } from "./components/camera.js"
import { createLights } from "./components/lights.js"
import { createScene } from "./components/scene.js"
import { createRenderer } from "./systems/renderer.js"
import { createTerrain } from "./components/objects/terrain.js"
import { createPlane } from "./components/objects/player.js"
import { createControls } from "./systems/controls.js"
import { Loop } from "./systems/Loop.js"
import { Resizer } from "./systems/Resizer.js"
import * as THREE from 'three';


// These variables are module-scoped: we cannot access them
// from outside the module.
let camera;
let controls;
let renderer;
let scene;
let loop;
let sound;
let listener;
let audioLoader;

class World {
    constructor(container) {
        //Instances of camera, scene, and renderer
        camera = createCamera();
        scene = createScene("blue");
        renderer = createRenderer();
        controls = createControls(camera, container);
        listener = new THREE.AudioListener();
        camera.add( listener );
        sound = new THREE.Audio( listener )
        audioLoader = new THREE.AudioLoader();
        audioLoader.load('audio.mp3')
        // Initialize Loop
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);


        // Random values for terrain vertices
        const randomVals = [];

        for (let i = 0; i < 12675; i++) {
            randomVals.push(Math.random() - 0.5)
        }

        // Terrain Instance
        let terrain = createTerrain({
            color: "green",
            randVertexArr: randomVals,
        })

        let plane = createPlane();

        // Light Instance, with optional light helper
        const { light } = createLights("white");

        loop.updatables.push(light);
        loop.updatables.push(terrain);
        scene.add(light, terrain, plane);

        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
            this.render();
        };

    }
    render() {
        // Draw a single frame
        renderer.render(scene, camera)
    }
        // Animation handlers
        start() {
            loop.start();
        }
        stop() {
            loop.stop();
        }
}

export { World, sound };