"use client";
import React from "react";
import { useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

function FirstView() {
  // 3D object
  useEffect(() => {
    const canvas = document.querySelector(".webgl");

    // scene
    const scene = new THREE.Scene();

    // setting size
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    //camera
    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      10000
    );
    camera.position.z = 85;
    camera.position.x = -10;
    scene.add(camera);

    /* geometry */
    const geometry = new THREE.TorusGeometry(10, 5, 24, 130);

    /* material */
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 1.6, // 透過率
      metalness: 0,
      roughness: 0,
      ior: 2, // 屈折率
      thickness: 5, // 厚み
      specularIntensity: 1,
      clearcoat: 1, // クリアコート効果
    });

    /* mesh */
    const torus = new THREE.Mesh(geometry, material);
    torus.rotateY(0.6);

    scene.add(torus);

    // （addLight）
    const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight.position.set(0, 2, 3);
    scene.add(directionalLight);
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    // renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,

      //　透明化して背景画像を表示させる
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // (mouseControl)

    // animation

    const clock = new THREE.Clock();

    const animate = () => {
      window.requestAnimationFrame(animate);
      renderer.render(scene, camera);

      let getDeltaTime = clock.getDelta();

      // アニメーションの追加
      torus.rotation.x += 1 * getDeltaTime;
      torus.rotation.z += 1.8 * getDeltaTime;
    };

    animate();
    // ajust resize
    const handleResize = () => {
      // リサイズ時に都度更新されるものを記載する
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      // メモリリークを防ぐためのクリーンアップ
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // fade-in animation
  useEffect(() => {
    gsap.fromTo(
      ".webgl",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      <div className="bg-dark-base">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] bg-cover h-[100vh] mix-blend-lighten opacity-[0.2] shadow"></div>
        <canvas className="webgl absolute z-3"></canvas>
        <main className="px-[5.5%] max-w-[1440px] mx-auto relative z-9">
          <div className="relative h-[100vh]">
            <div className="fixed top-[3%] left-[50%] translate-x-[-50%] w-[89%] max-w-[calc(1440px-11%)] max-auto mix-blend-exclusion">
              <nav className="flex justify-between items-center w-full text-white font-semibold">
                <a
                  href="/"
                  className="font-geologica text-base-size scramble-text"
                  data-final-text="_SK"
                >
                  _SK
                </a>
                <ul className="flex justify-between items-center w-[min(35%,150px)]">
                  <li>
                    <a
                      href=""
                      className="font-geologica text-base-size scramble-text"
                      data-final-text="WORK"
                    >
                      WORK
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="font-geologica text-base-size scramble-text"
                      data-final-text="ABOUT"
                    >
                      ABOUT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="inline-block mt-[12.5rem] title-wrap">
              <p
                className="text-white text-large-size font-geologica font-[600] tracking-tight leading-none scramble-text"
                data-final-text="DESIGN TO"
              >
                DESIGN TO
              </p>
              <p
                className="text-white text-large-size font-geologica font-[600] tracking-tight leading-none scramble-text"
                data-final-text="DEVELOPMENT"
              >
                DEVELOPMENT
              </p>
              <div>
                <p
                  className="text-white font-geologica text-medium-size tracking-tight mt-[3rem] scramble-text"
                  data-final-text="SHINNOSUKE PORTFOLIO SITE"
                >
                  SHINNOSUKE PORTFOLIO SITE
                </p>
              </div>
            </div>
            <div className="text-white font-geologica text-small-size flex justify-between items-center absolute bottom-[3%] left-0 w-full">
              <p className="scramble-text" data-final-text="DESIGN">
                DESIGN
              </p>
              <p className="scramble-text" data-final-text="AND">
                AND
              </p>
              <p className="scramble-text" data-final-text="CODING">
                CODING
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default FirstView;
