import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh
} from 'three';

export default function createFxBar(props){
    const geometry = new PlaneGeometry(2, 8)
    const material = new MeshStandardMaterial( {color: 0x530000} )
    const plane = new Mesh(geometry, material)
    // plane corodinates x  y  z  -> 
    plane.position.set(0, 8, 2)
    plane.rotation.z -= Math.PI * 0.5;

    console.log(plane.material.color)
    
    let clock = props.clock

    plane.tick = () => {
         console.log(clock.elapsedTime)  

        if (5 < clock.elapsedTime){ 
            plane.material.color = new MeshStandardMaterial({color: 0x000000})
        }
    }
    return plane;
}

export { createFxBar }