import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export const View = () => {
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
