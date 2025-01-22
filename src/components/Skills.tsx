import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useSphere } from "@react-three/cannon";

const SkillBubble: React.FC<{
  skill: string;
  position: [number, number];
  cursorPosition: [number, number];
  size: number;
  attractionMultiplier: number;
  index: number;
}> = ({ skill, position, cursorPosition, size, attractionMultiplier, index }) => {
  const [sphereRef, api] = useSphere(() => ({
    mass: 1,
    position: [...position, 0],
    args: [size],
    linearDamping: 0.95,
    angularDamping: 0.9,
    restitution: 0.7,
    velocity: [0, 0, 0],
  }));

  useEffect(() => {
    let intervalId: number;

    const animate = () => {
      const time = Date.now() * 0.001;
      const offset = index * 0.5; // Different phase for each bubble
      const waveX = Math.sin(time + offset) * 1;
      const waveY = Math.cos(time * 0.8 + offset) * 0.5;

      // Cursor attraction
      const direction = new THREE.Vector2(
        cursorPosition[0] - position[0],
        cursorPosition[1] - position[1]
      );

      const distance = direction.length();
      direction.normalize();

      // Smooth attraction force with multiplier
      const attractionStrength = Math.min(distance / 10, 1) * attractionMultiplier;
      const attractionForceX = direction.x * attractionStrength;
      const attractionForceY = direction.y * attractionStrength;

      // Combine wave motion with cursor attraction
      const totalForceX = waveX + attractionForceX;
      const totalForceY = waveY + attractionForceY;

      // Apply combined forces
      api.velocity.set(totalForceX, totalForceY, 0);

      // Limit velocity for smoother behavior
      api.velocity.subscribe((vel) => {
        const maxVel = 2;
        if (Math.abs(vel[0]) > maxVel || Math.abs(vel[1]) > maxVel) {
          api.velocity.set(
            Math.sign(vel[0]) * maxVel,
            Math.sign(vel[1]) * maxVel,
            0
          );
        }
      });

      intervalId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(intervalId);
  }, [api, position, cursorPosition, index, attractionMultiplier]);

  return (
    <group>
      <mesh ref={sphereRef as React.RefObject<THREE.Mesh>}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color="#61dafb" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

const BoundaryPlane: React.FC<{ position: [number, number]; rotation: [number, number, number] }> = ({ position, rotation }) => {
  return (
    <mesh position={[...position, 0]} rotation={rotation}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial visible={false} />
    </mesh>
  );
};

const Skills: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<[number, number]>([0, 0]);

  const skills = [
    { name: "JavaScript", size: 5.5, attractionMultiplier: 2 },
    { name: "React", size: 6, attractionMultiplier: 1.5 },
    { name: "Tailwind CSS", size: 4, attractionMultiplier: 1 },
    { name: "Node.js", size: 4.5, attractionMultiplier: 1 },
    { name: "Mongoose", size: 1.5, attractionMultiplier: 1 },
    { name: "TypeScript", size: 6.5, attractionMultiplier: 1.5 },
    { name: "Git", size: 1.5, attractionMultiplier: 1 },
    { name: "HTML & CSS", size: 3.5, attractionMultiplier: 1 },
    { name: "Three JS", size: 2.5, attractionMultiplier: 1 },
    { name: "Mongo DB", size: 1, attractionMultiplier: 1 },
    { name: "Express", size: 1.5, attractionMultiplier: 1 },
    { name: "Next.js", size: 2.5, attractionMultiplier: 1.5 },
    { name: "Figma", size: 1.5, attractionMultiplier: 1 },
    { name: "VS code", size: 3.5, attractionMultiplier: 1 },
  ];

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setCursorPosition([x * 100, y * 100]); // Scale cursor influence
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="skills" className="h-screen bg-secondary py-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-text">
        My Skills
      </h2>

      <Canvas shadows camera={{ position: [0, 0, 50], fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Physics gravity={[0, 0, 0]}>
          <BoundaryPlane position={[0, -20]} rotation={[-Math.PI / 2, 0, 0]} />
          <BoundaryPlane position={[0, 20]} rotation={[Math.PI / 2, 0, 0]} />
          <BoundaryPlane position={[-30, 0]} rotation={[0, Math.PI / 2, 0]} />
          <BoundaryPlane position={[30, 0]} rotation={[0, -Math.PI / 2, 0]} />

          {skills.map((skill, index) => {
            const x = (Math.random() - 0.5) * 14;
            const y = (Math.random() - 0.5) * 14;
            return (
              <SkillBubble
                key={index}
                skill={skill.name}
                position={[x, y]}
                cursorPosition={cursorPosition}
                size={skill.size}
                attractionMultiplier={skill.attractionMultiplier}
                index={index}
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
