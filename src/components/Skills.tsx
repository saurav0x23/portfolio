import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useSphere, useBox } from "@react-three/cannon";
import { Stars, Text } from "@react-three/drei";
import * as THREE from "three";

const techConfigs = [
  { name: "JavaScript", color: "#F7DF1E", size: 1.8 },
  { name: "TypeScript", color: "#3178C6", size: 1.6 },
  { name: "Node.js", color: "#68A063", size: 1.4 },
  { name: "React", color: "#61DAFB", size: 2.0 },
  { name: "Next.js", color: "#000000", size: 1.8 },
  { name: "Three.js", color: "#049EF4", size: 1.3 },
  { name: "GitHub", color: "#181717", size: 0.9 },
  { name: "Git", color: "#F05032", size: 1.1 },
  { name: "Tailwind", color: "#38B2AC", size: 1.3 },
  { name: "VSCode", color: "#007ACC", size: 1.0 },
  { name: "Framer", color: "#0055FF", size: 1.0 },
];

const CENTER_FORCE = 1.2;
const REPEL_FORCE = 120;
const REPEL_RADIUS = 9;
const DAMPING = 0.85;

interface BubbleProps {
  position: [number, number, number];
  tech: (typeof techConfigs)[number];
  cursor: React.MutableRefObject<THREE.Vector2>;
}

const Bubble = ({ position, tech, cursor }: BubbleProps) => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [tech.size],
    material: { restitution: 0.75 },
    linearDamping: DAMPING,
  }));

  useFrame(({ clock }) => {
    if (!ref.current) return;

    // Pulsing animation
    const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.1;
    ref.current.scale.set(scale, scale, scale);

    const pos = new THREE.Vector3();
    ref.current.getWorldPosition(pos);

    // Center attraction
    const toCenter = new THREE.Vector3().sub(pos).multiplyScalar(CENTER_FORCE);

    // Cursor repulsion
    const cursorPos = new THREE.Vector3(cursor.current.x, cursor.current.y, 0);
    const toCursor = pos.clone().sub(cursorPos);
    const distance = toCursor.length();

    if (distance < REPEL_RADIUS) {
      const strength = (1 - distance / REPEL_RADIUS) * REPEL_FORCE;
      const repelForce = toCursor.normalize().multiplyScalar(strength);
      api.applyForce(repelForce.toArray(), [0, 0, 0]);
    }

    api.applyForce(toCenter.toArray(), [0, 0, 0]);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[tech.size, 32, 32]} />
      <meshStandardMaterial
        color={tech.color}
        metalness={0.4}
        roughness={0.15}
        emissive={tech.color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.95}
      />
      <Text
        position={[0, 0, tech.size + 0.3]}
        fontSize={0.5}
        color="white"
        outlineColor="black"
        outlineWidth={0.02}
        anchorX="center"
        anchorY="middle"
      >
        {tech.name}
      </Text>
    </mesh>
  );
};

const Skills = () => {
  const cursor = useRef(new THREE.Vector2(0, 0));

  const bubbles = useMemo(() => {
    const radius = 10;
    const angleStep = (Math.PI * 2) / techConfigs.length;
    return techConfigs.map((tech, i) => ({
      tech,
      position: [
        Math.cos(angleStep * i) * radius,
        Math.sin(angleStep * i) * radius,
        0,
      ] as [number, number, number],
    }));
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = -(e.clientY / window.innerHeight - 0.5) * 30;
      cursor.current.set(x, y);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="backdrop-blur-lg bg-sky-900/20 rounded-xl p-6 border border-sky-400/20 shadow-xl">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="relative h-screen w-full bg-gradient-to-b from-sky-900 to-purple-900 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 35], fov: 45 }}>
          <ambientLight intensity={0.75} color="#4f46e5" />
          <pointLight
            position={[10, 10, 10]}
            intensity={2.5}
            color="#818cf8"
            castShadow
          />
          <spotLight
            position={[0, 0, 50]}
            angle={0.3}
            penumbra={1}
            intensity={3}
            color="#60a5fa"
            castShadow
          />

          <Physics gravity={[0, 0, 0]} iterations={25}>
            <BoxBoundary position={[0, 25, 0]} args={[50, 2, 50]} />
            <BoxBoundary position={[0, -25, 0]} args={[50, 2, 50]} />
            <BoxBoundary position={[25, 0, 0]} args={[2, 50, 50]} />
            <BoxBoundary position={[-25, 0, 0]} args={[2, 50, 50]} />

            {bubbles.map((bubble) => (
              <Bubble
                key={bubble.tech.name}
                position={bubble.position}
                tech={bubble.tech}
                cursor={cursor}
              />
            ))}
          </Physics>

          <Stars
            radius={300}
            depth={100}
            count={3000}
            factor={6}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
    </div>
  );
};

const BoxBoundary = ({ position, args }: any) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    args,
    material: { restitution: 0.85 },
  }));
  return <mesh ref={ref} visible={false} />;
};

export default Skills;
