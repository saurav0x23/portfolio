import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const SkillBubble: React.FC<{
  position: [number, number];
  cursorPosition: [number, number];
  size: number;
  boundarySize: number;
}> = ({ position, cursorPosition, size, boundarySize }) => {
  const [sphereRef, api] = useSphere(() => ({
    mass: 1,
    position: [...position, 0],
    args: [size],
    linearDamping: 0.95, // Slow down over time for smooth movement
    angularDamping: 0.95,
  }));

  useEffect(() => {
    const animate = () => {
      api.position.subscribe(([x, y]) => {
        // Random movement logic
        const randomForceX = (Math.random() - 0.5) * 0.01;
        const randomForceY = (Math.random() - 0.5) * 0.01;

        // Minimal cursor attraction
        const direction = new THREE.Vector2(
          cursorPosition[0] - x,
          cursorPosition[1] - y
        );
        const distance = direction.length();
        direction.normalize();

        const attractionStrength = Math.min(distance / 20, 0.1); // Very subtle
        const attractionForceX = direction.x * attractionStrength;
        const attractionForceY = direction.y * attractionStrength;

        // Keep within boundary logic
        const correctionForceX =
          x > boundarySize ? -0.1 : x < -boundarySize ? 0.1 : 0;
        const correctionForceY =
          y > boundarySize ? -0.1 : y < -boundarySize ? 0.1 : 0;

        // Apply combined forces
        api.applyForce(
          [
            randomForceX + attractionForceX + correctionForceX,
            randomForceY + attractionForceY + correctionForceY,
            0,
          ],
          [0, 0, 0]
        );
      });
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, [api, cursorPosition, boundarySize]);

  return (
    <mesh ref={sphereRef as React.RefObject<THREE.Mesh>}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="#61dafb" transparent opacity={0.9} />
    </mesh>
  );
};

const Skills: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const boundarySize = 5; // Keep bubbles centered

  const skills = [
    { size: 1 },
    { size: 1.2 },
    { size: 1.4 },
    { size: 0.8 },
    { size: 1.1 },
  ];

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setCursorPosition([x * boundarySize, y * boundarySize]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="skills" className="h-screen bg-secondary py-6">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={["#1e293b"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Physics gravity={[0, 0, 0]}>
          {skills.map((skill, index) => {
            const x = (Math.random() - 0.5) * boundarySize;
            const y = (Math.random() - 0.5) * boundarySize;
            return (
              <SkillBubble
                key={index}
                position={[x, y]}
                cursorPosition={cursorPosition}
                size={skill.size}
                boundarySize={boundarySize}
              />
            );
          })}
        </Physics>
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </section>
  );
};

export default Skills;
