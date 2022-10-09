import { useEffect, useRef } from "react";
import * as THREE from "three";

const Cone = () => {

    const mountRef = useRef(null);

    useEffect(() => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);


        const geometry = new THREE.ConeGeometry(5, 20, 32);
        const material = new THREE.MeshBasicMaterial({ wireframe: true });
        const cone = new THREE.Mesh(geometry, material);
        scene.add(cone);

        camera.position.z = 17;

        var animate = function () {
            requestAnimationFrame(animate);
            cone.rotation.x += 0.01;
            cone.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", onWindowResize, false);

        animate();

        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <div ref={mountRef}>

        </div>
    );
}

export default Cone;
