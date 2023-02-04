/* eslint-disable */
import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // FOV Field of View
        1, // Aspect ratio (dummy value)
        0.1, // Near clipping plane
        100, // Far clipping plane
    );

    // Move the camera back so we can view the scene
    // x y z
    camera.position.set(0, 10, 50)
    camera.tick = (delta) => {


    };

    return camera;
}

export { createCamera };