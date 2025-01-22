import React, { useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useSphere } from "@react-three/cannon";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

const Atmosphere: React.FC<{ size: number; color: string }> = ({
  size,
  color,
}) => {
  const geometry = useMemo(
    () => new THREE.SphereGeometry(size * 1.2, 16, 16),
    [size]
  );
  const material = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide,
      }),
    [color]
  );

  return <mesh geometry={geometry} material={material} />;
};

const TechBubble: React.FC<{
  position: [number, number];
  cursorPosition: [number, number];
  size: number;
  boundarySize: number;
  techConfig: any;
}> = ({ position, cursorPosition, size, boundarySize, techConfig }) => {
  const [sphereRef, api] = useSphere(() => ({
    mass: 1,
    position: [...position, 0],
    args: [size],
    linearDamping: 0.95,
    angularDamping: 0.95,
  }));

  const sphereGeometry = useMemo(
    () => new THREE.SphereGeometry(size, 16, 16),
    [size]
  );
  const sphereMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: techConfig.color,
        emissive: techConfig.emissive,
        roughness: 0.3,
        metalness: 0.7,
      }),
    [techConfig]
  );

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      api.position.subscribe(([x, y]) => {
        const direction = new THREE.Vector2(
          cursorPosition[0] - x,
          cursorPosition[1] - y
        );
        const distance = direction.length();
        direction.normalize();

        const attractionStrength = Math.min(distance / 20, 0.1);
        const attractionForceX = direction.x * attractionStrength;
        const attractionForceY = direction.y * attractionStrength;

        const correctionForceX =
          x > boundarySize ? -0.1 : x < -boundarySize ? 0.1 : 0;
        const correctionForceY =
          y > boundarySize ? -0.1 : y < -boundarySize ? 0.1 : 0;

        api.applyForce(
          [
            attractionForceX + correctionForceX,
            attractionForceY + correctionForceY,
            0,
          ],
          [0, 0, 0]
        );
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [api, cursorPosition, boundarySize]);

  return (
    <group ref={sphereRef as React.RefObject<THREE.Group>}>
      {/* Sphere for the bubble */}
      <mesh geometry={sphereGeometry} material={sphereMaterial} />
      {/* Atmosphere around the bubble */}
      <Atmosphere size={size} color={techConfig.color} />
      {/* Html for the logo */}
      <Html
        position={[0, 0, 0]} // Adjust to the sphere's position
        center
        style={{
          pointerEvents: "none", // To prevent interfering with mouse events
          transform: "translate(-50%, -50%)", // Center the logo
        }}
      >
        <div className="w-12 h-12 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
          <img
            src={techConfig.logoPath}
            alt={techConfig.name}
            className="w-8 h-8 object-contain"
          />
        </div>
      </Html>
    </group>
  );
};

const Skills: React.FC = () => {
  const techConfigs = useMemo(
    () => [
      {
        name: "JavaScript",
        color: "#F7DF1E",
        emissive: "#2E2E2C",
        logoPath: "",
        size: 0.8,
      },
      {
        name: "React",
        color: "#61DAFB",
        emissive: "#124E5C",
        logoPath: "../assets/icons/react-2.svg",
        size: 0.75,
      },
      // ... rest of the tech configs
    ],
    []
  );

  const [cursorPosition, setCursorPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const boundarySize = 5;

  const handleMouseMove = useMemo(
    () =>
      throttle((event: MouseEvent) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        setCursorPosition([x * boundarySize, y * boundarySize]);
      }, 16),
    [boundarySize]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      {/* Heading above the Canvas */}
      <h2 className="relative w-fit mx-auto text-5xl group text-center animate-float">
        <span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-text transition-colors duration-300 ease-out border-2 border-accent rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-1 rounded-lg bg-accent"></span>
          <span className="relative">My Skills</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear bg-text rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </h2>
      <section
        id="skills"
        className="h-screen bg-black rounded-xl relative flex flex-col items-center justify-center text-white"
      >
        {/* Canvas below the heading */}
        <div className="w-full h-full flex items-center justify-center">
          <Canvas
            shadows={false}
            camera={{ position: [0, 0, 10], fov: 50 }}
            performance={{ min: 0.9 }}
          >
            <Stars
              radius={100}
              depth={50}
              count={3000}
              factor={4}
              saturation={0}
              fade
              speed={3}
            />
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 10]} intensity={1.5} />
            <Physics
              gravity={[0, 0, 0]}
              defaultContactMaterial={{
                friction: 0,
                restitution: 0.5,
              }}
            >
              {techConfigs.map((tech, index) => {
                const x = (Math.random() - 0.5) * boundarySize;
                const y = (Math.random() - 0.5) * boundarySize;
                return (
                  <TechBubble
                    key={index}
                    position={[x, y]}
                    cursorPosition={cursorPosition}
                    size={tech.size}
                    boundarySize={boundarySize}
                    techConfig={tech}
                  />
                );
              })}
            </Physics>
            <OrbitControls enableZoom={false} enableRotate={false} />
          </Canvas>
        </div>
      </section>
    </>
  );
};

function throttle<T extends Function>(func: T, limit: number) {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default Skills;
