/* eslint-disable */
import {
    PlaneGeometry,
    MeshStandardMaterial,
    Mesh,
    TextureLoader,
} from 'three';

export default function createTerrain(props) {
    const loader = new TextureLoader();

    const height = loader.load("displacement_map.png");
    
    const material = new MeshStandardMaterial({
        color: props.color,
        flatShading: true,
        displacementMap: height,
        displacementScale: 5,
    })

    const geometry = new PlaneGeometry(150, 150, 64, 64);

    const plane = new Mesh(geometry, material);
    plane.position.set(0,0,0);
    plane.rotation.x -= Math.PI * 0.5;
        // Storing our original vertices position on a new attribute
    plane.geometry.attributes.position.originalPosition = 
        plane.geometry.attributes.position.array;
        // Utilizing our random numberr array
    const { array } = plane.geometry.attributes.position;
    for (let i = 0; i < array.length; i++) {
        props.randVertexArr.push(Math.random())
    }

    plane.geometry.attributes.position.randomValues = props.randVertexArr;
    let frame = 0;
    plane.tick = (delta) => {
        frame += 0.1;
        // Destructuring of the random values, the original position and the current vertex position
        const { array, originalPosition, randomValues } = 
            plane.geometry.attributes.position;
        // Animation for loop
        // 3 coordinates x y z
        // animate z only
        // thus omit x y from loop i+=3
        for (let i = 0; i < array.length; i += 3) {
            // Accessing the z coord
            array[i + 2] =
                // Try switching these numbers up, or using sine instead of cosine, see how the animation changes.
                originalPosition[i + 2] + Math.cos(frame + randomValues[i + 1]) * 0.1;
        }
        plane.geometry.attributes.position.needsUpdate = true;
    };

    return plane;
}

export { createTerrain }