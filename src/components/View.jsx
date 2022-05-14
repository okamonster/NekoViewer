import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const View = () => {
  const gltf = useLoader(GLTFLoader, "/neko.gltf");
  return (
    <div className="view">
      <Canvas>
        <Suspense fallback="null">
          <OrbitControls />
          <Environment preset="sunset" background />
          <mesh></mesh>
        </Suspense>
      </Canvas>
    </div>
  );
};
