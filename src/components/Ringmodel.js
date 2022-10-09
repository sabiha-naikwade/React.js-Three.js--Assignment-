import { useEffect, useRef } from "react";
import * as THREE from "three";

const Ringmodel = () => {

  const mountRef = useRef(null);

  useEffect(() => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 34;

    var animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
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

export default Ringmodel;

