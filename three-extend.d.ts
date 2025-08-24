// src/types/three-extend.d.ts
import * as THREE from "three";

declare module "three" {
  export class MeshLine extends THREE.BufferGeometry {
    setGeometry(geometry: THREE.BufferGeometry): void;
  }

  export class MeshLineMaterial extends THREE.Material {
    constructor(parameters?: any);
  }
}

// Extend React Three Fiber JSX so you can use them as components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<THREE.MeshLine, typeof THREE.MeshLine>;
      meshLineMaterial: ReactThreeFiber.Object3DNode<THREE.MeshLineMaterial, typeof THREE.MeshLineMaterial>;
    }
  }
}
