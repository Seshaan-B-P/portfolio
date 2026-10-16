import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer with Light Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 290;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting for 3D Geometry
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x6366f1, 1.2);
    dirLight.position.set(100, 150, 120);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x0284c7, 1.5, 600);
    pointLight.position.set(-120, -100, 100);
    scene.add(pointLight);

    // 3. Multi-color Particle Constellation Field
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#4f46e5'); // Electric Indigo
    const color2 = new THREE.Color('#0284c7'); // Sky Cyan
    const color3 = new THREE.Color('#10b981'); // Emerald
    const color4 = new THREE.Color('#8b5cf6'); // Violet

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 880;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 880;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 650;

      const rand = Math.random();
      const mixedColor = rand < 0.35 ? color1 : (rand < 0.65 ? color2 : (rand < 0.85 ? color3 : color4));
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.42,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 4. Floating 3D Wireframe Sculptures
    // A. Torus Knot (Sculptural center-right)
    const torusGeometry = new THREE.TorusKnotGeometry(48, 12, 100, 16);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x4f46e5,
      wireframe: true,
      transparent: true,
      opacity: 0.11,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(130, 45, -110);
    scene.add(torusKnot);

    // B. Faceted Icosahedron (Left)
    const icosaGeometry = new THREE.IcosahedronGeometry(52, 1);
    const icosaMaterial = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const icosa = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosa.position.set(-155, -45, -90);
    scene.add(icosa);

    // C. Octahedron Core (Lower center)
    const octaGeometry = new THREE.OctahedronGeometry(36, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(20, -120, -120);
    scene.add(octa);

    // 5. Interactive Cursor Tracking with Physics Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.07;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.07;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Smooth Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation toward mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(scene.position);

      // Rotate particle cloud
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.012;

      // Rotate and float 3D geometries
      torusKnot.rotation.x = elapsedTime * 0.10;
      torusKnot.rotation.y = elapsedTime * 0.14;
      torusKnot.position.y = 45 + Math.sin(elapsedTime * 0.8) * 12;

      icosa.rotation.x = elapsedTime * -0.09;
      icosa.rotation.z = elapsedTime * 0.12;
      icosa.position.y = -45 + Math.cos(elapsedTime * 0.7) * 10;

      octa.rotation.y = elapsedTime * 0.15;
      octa.rotation.x = elapsedTime * 0.08;
      octa.position.y = -120 + Math.sin(elapsedTime * 0.9) * 8;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      icosaGeometry.dispose();
      icosaMaterial.dispose();
      octaGeometry.dispose();
      octaMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
      aria-hidden="true"
    />
  );
}
