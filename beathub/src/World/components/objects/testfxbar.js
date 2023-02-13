import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh
} from 'three';

export default function createFxBar(){
    const geometry = new PlaneGeometry(2, 8)
    const material = new MeshStandardMaterial( {color: 0x530000} )
    const plane = new Mesh(geometry, material)
    // plane corodinates x  y  z  -> 
    plane.position.set(0, 8, 2)
    plane.rotation.z -= Math.PI * 0.5;

    console.log(plane.material.color)
    plane.material.color = '0x000000'
    plane.tick = (elapsedTime) => {
        // console.log(elapsedTime)
        if (5 < elapsedTime){
            let color = 'blue'
            console.log(color)
        }
    }
    return plane;
}

export { createFxBar }