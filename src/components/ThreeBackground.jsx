import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const canvasRef = useRef();

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        camera.position.z = 1;

        // Starfield creation
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.04, // Increased size significantly for prominence
            opacity: 1, // Full opacity for brighter stars
            map: createStarTexture(),
            transparent: true,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
            depthWrite: false,
        });

        const starVertices = [];
        for (let i = 0; i < 30000; i++) { // Increased number of stars for higher density
            const x = (Math.random() - 0.5) * 20; // Expanded the spread of stars
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            starVertices.push(x, y, z);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        function createStarTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');
            const gradient = context.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            );
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.7, 'rgba(0,0,0,0.5)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            return new THREE.CanvasTexture(canvas);
        }

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0001;
            stars.rotation.x += 0.00005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.domElement.remove();
            starMaterial.map.dispose();
            starGeometry.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={canvasRef} className="absolute inset-0 z-0 opacity-20"></div>
    );
}