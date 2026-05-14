"use client";

import { useEffect, useRef } from "react";

interface AsteroidOrbProps {
  size?: number;
  className?: string;
  /** If true, rotation is driven by page scroll. Otherwise auto-rotates. */
  scrollSpin?: boolean;
  style?: React.CSSProperties;
  /** 0 = purple (default), 1 = fully white/energised */
  energyLevel?: number;
  /** Use silver/gray palette instead of purple */
  silver?: boolean;
}

function pseudoNoise(x: number, y: number, z: number): number {
  return (
    Math.sin(x * 3.1 + y * 2.7) * 0.5 +
    Math.sin(y * 2.9 + z * 3.3) * 0.3 +
    Math.sin(z * 3.7 + x * 2.1) * 0.2
  );
}

export function AsteroidOrb({
  size = 200,
  className = "",
  scrollSpin = false,
  style,
  energyLevel = 0,
  silver = false,
}: AsteroidOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const cleanupRef = useRef<(() => void) | null>(null);
  const energyRef = useRef(energyLevel);
  const silverRef = useRef(silver);

  useEffect(() => { energyRef.current = energyLevel; }, [energyLevel]);
  useEffect(() => { silverRef.current = silver; }, [silver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;

    import("three").then((THREE) => {
      if (cancelled) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.z = 2.8;

      // Rough asteroid geometry — IcosahedronGeometry detail=2 keeps visible facets
      const geo = new THREE.IcosahedronGeometry(1, 2);
      const pos = geo.attributes.position as import("three").BufferAttribute;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = pos.getZ(i);
        const n = pseudoNoise(x * 2, y * 2, z * 2);
        const scale = 1 + n * 0.28;
        pos.setXYZ(i, x * scale, y * scale, z * scale);
      }
      geo.computeVertexNormals();

      // Dark rock interior
      const mat = new THREE.MeshPhongMaterial({
        color: 0x0e0820,
        emissive: 0x2a0655,
        emissiveIntensity: 0.6,
        shininess: 18,
        specular: new THREE.Color(0x5018b0),
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Visible edge lines for that geodesic/asteroid mesh look
      const edges = new THREE.EdgesGeometry(geo);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x9050ee,
        opacity: 0.55,
        transparent: true,
      });
      const lines = new THREE.LineSegments(edges, lineMat);
      mesh.add(lines);
      scene.add(mesh);

      // Lights
      scene.add(new THREE.AmbientLight(0x1a0040, 3));

      const keyLight = new THREE.PointLight(0x9060ff, 12, 12);
      keyLight.position.set(2, 2, 3);
      scene.add(keyLight);

      const rimLight = new THREE.PointLight(0x3010a0, 5, 8);
      rimLight.position.set(-2.5, -1, -2);
      scene.add(rimLight);

      // Scroll-driven rotation state
      let scrollY = 0;
      let targetRotY = 0.0;
      let targetRotX = 0.2;
      let currentRotY = 0.0;
      let currentRotX = 0.2;
      let time = 0;

      const onScroll = () => {
        scrollY = window.scrollY;
        if (scrollSpin) {
          targetRotY = scrollY * 0.0035;
          targetRotX = 0.2 + scrollY * 0.0008;
        }
      };

      if (scrollSpin) {
        window.addEventListener("scroll", onScroll, { passive: true });
      }

      const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;

      const animate = () => {
        frameRef.current = requestAnimationFrame(animate);
        time += 0.012;

        // Lerp material colors based on energyLevel + silver mode
        const e = Math.max(0, Math.min(1, energyRef.current));
        if (silverRef.current) {
          // Gray body, near-white lines — dark slate → medium gray
          mat.color.setRGB(lerpN(0x14 / 255, 0x70 / 255, e), lerpN(0x14 / 255, 0x72 / 255, e), lerpN(0x1c / 255, 0x7e / 255, e));
          mat.emissive.setRGB(lerpN(0x20 / 255, 0x50 / 255, e), lerpN(0x20 / 255, 0x50 / 255, e), lerpN(0x28 / 255, 0x60 / 255, e));
          mat.emissiveIntensity = lerpN(0.5, 0.9, e);
          lineMat.color.setRGB(lerpN(0xaa / 255, 1, e), lerpN(0xaa / 255, 1, e), lerpN(0xbb / 255, 1, e));
          lineMat.opacity = lerpN(0.65, 0.85, e);
          keyLight.color.setRGB(1, 1, 1);
          keyLight.intensity = lerpN(8, 14, e);
        } else {
          // Purple → white
          mat.color.setRGB(lerpN(0x0e / 255, 1, e), lerpN(0x08 / 255, 1, e), lerpN(0x20 / 255, 1, e));
          mat.emissive.setRGB(lerpN(0x2a / 255, 0.9, e), lerpN(0x06 / 255, 0.9, e), lerpN(0x55 / 255, 1, e));
          mat.emissiveIntensity = lerpN(0.6, 2.2, e);
          lineMat.color.setRGB(lerpN(0x90 / 255, 1, e), lerpN(0x50 / 255, 1, e), lerpN(0xee / 255, 1, e));
          lineMat.opacity = lerpN(0.55, 1, e);
          keyLight.color.setRGB(lerpN(0x90 / 255, 1, e), lerpN(0x60 / 255, 1, e), 1);
          keyLight.intensity = lerpN(12, 22, e);
        }

        if (scrollSpin) {
          currentRotY += (targetRotY - currentRotY) * 0.06;
          currentRotX += (targetRotX - currentRotX) * 0.06;
          mesh.rotation.y = currentRotY;
          mesh.rotation.x = currentRotX;
        } else {
          mesh.rotation.y += 0.0045;
          mesh.rotation.x = 0.15 + Math.sin(time * 0.35) * 0.06;
        }

        renderer.render(scene, camera);
      };

      animate();

      cleanupRef.current = () => {
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(frameRef.current);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        edges.dispose();
        lineMat.dispose();
      };
    });

    return () => {
      cancelled = true;
      cleanupRef.current?.();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, scrollSpin]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, ...style }}
    />
  );
}
