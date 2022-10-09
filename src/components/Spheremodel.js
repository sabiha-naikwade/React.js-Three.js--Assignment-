import { useEffect, useRef } from "react";
import * as THREE from "three";

const Spheremodel = () => {

    const mountRef = useRef(null);

    useEffect(() => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        var geometry = new THREE.SphereGeometry(10, 10, 10);
        var material = new THREE.MeshNormalMaterial({ wireframe:true });
        var sphere = new THREE.Mesh(geometry, material);
        

        scene.add(sphere);
        camera.position.z = 70;

        var animate = function () {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
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

export default Spheremodel;
