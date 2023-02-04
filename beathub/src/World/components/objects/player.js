import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh
} from 'three';

export default function createPlane(){
    const geometry = new PlaneGeometry(10, 10)
    const material = new MeshStandardMaterial( {color: 0xff0000} )
    const plane = new Mesh(geometry, material);
    
    // plane corodinates x  y  z  -> 
    plane.position.set(0, 8, 20)
    plane.rotation.z -= Math.PI * 0.5;

    return plane;
}

export { createPlane }
