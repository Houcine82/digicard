"use client";
import { useRef } from "react";
import { Environment, Float, useTexture, RoundedBox, Cylinder } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from 'three';
import { useMemo } from 'react';

gsap.registerPlugin(useGSAP);

const RoundedCard = ({ texture }) => {
  const geometry = useMemo(() => {
    const width = 1.5 ;
    const height = 1;
    const radius = 0.1;
    
    const shape = new THREE.Shape();
    
    // Start from bottom-left
    shape.moveTo(-width/2 + radius, -height/2);
    
    // Bottom edge
    shape.lineTo(width/2 - radius, -height/2);
    
    // Bottom-right corner
    shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
    
    // Right edge
    shape.lineTo(width/2, height/2 - radius);
    
    // Top-right corner
    shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
    
    // Top edge
    shape.lineTo(-width/2 + radius, height/2);
    
    // Top-left corner
    shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
    
    // Left edge
    shape.lineTo(-width/2, -height/2 + radius);
    
    // Bottom-left corner
    shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);

    const extrudeSettings = {
      depth: 0,
      bevelEnabled: false,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    // Rotate the geometry to match the boxGeometry orientation
    geometry.rotateX(-Math.PI / 2);
    
    return geometry;
  }, []);

  return (
    <mesh geometry={geometry} rotation={[Math.PI / 2.5, 0, 0]}>
      <meshStandardMaterial
        map={texture}
        metalness={0.8}
        roughness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

function Cards() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  // Load simple textures for both cards
  const [card1Texture, card2Texture] = useTexture([
    "/textures/card2.png",
    "/textures/card1.png",
  ]);

  card1Texture.repeat.set(0.73, 1.1);
  card1Texture.offset.set(0.5, 0.5);
  card2Texture.repeat.set(0.7, 1);
  card2Texture.offset.set(0.5, 0.5);
  

  useGSAP(() => {
    if (!card1Ref.current || !card2Ref.current) return;

    // Set initial positions for the cards
    card1Ref.current.position.set(-2.25, -3, 0);
    card2Ref.current.position.set(2.25, 3, 0);

    const cardsIntroTl = gsap.timeline();

    cardsIntroTl
      .to(
        card1Ref.current.position,
        {
          y: -0,
          duration: 1.5,
          ease: "back.out(1.4)",
        },
        0
      )
      .to(
        card2Ref.current.position,
        {
          y: 0,
          duration: 1.5,
          ease: "back.out(1.4)",
        },
        0
      );
  });

  return (
    <group>
      <group ref={card1Ref}>
        <Float speed={2.5}>
          <RoundedCard texture={card1Texture} />
        </Float>
      </group>
      <group ref={card2Ref}>
        <Float speed={2.5}>
          <RoundedCard texture={card2Texture} />
        </Float>
      </group>
    </group>
  );
}

export default function ViewCanvas({ ...props }) {
  return (
    <Canvas
      {...props}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      camera={{
        fov: 40,
      }}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <Cards />
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={2} />
    </Canvas>
  );
}

