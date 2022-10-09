import { useEffect, useRef } from "react";
import * as THREE from "three";

const Capsulemodel = () => {

    const mountRef = useRef(null);

    useEffect(() => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);


        const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
        const material = new THREE.MeshBasicMaterial({ wireframe: true });
        const capsule = new THREE.Mesh(geometry, material);
        scene.add(capsule);

        camera.position.z = 7;

        var animate = function () {
            requestAnimationFrame(animate);
            capsule.rotation.x += 0.01;
            capsule.rotation.y += 0.01;
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

export default Capsulemodel;

