---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Heavymeta™"
  text: "Documentation"
  
  actions:
    - theme: brand
      text: Pintheon
      link: /Tools/Why Pintheon
    - theme: alt
      text: Developers
      link: /Tools/Pintheon Node/Developer Guide - Programmatic Access

features:
  - title: 🎨 Built by Creators for Creators
    details: Focused on protection of your digital content rights.
  - title: 🚀 Deploy with Ease
    details: Easily upload content to your Pintheon node, designed for open development.
  - title: 🔐 Secure your Creations
    details: All files are cryptographically fingerprinted and stored on ipfs, this data can easily be tokenized and stored on the Stellar Ledger.
---


<script setup>
import { ref } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const clock = new THREE.Clock();
let camera, scene, model, renderer;
let mixer = undefined;
let modelReady = false

init();

function init() {

	const material = new THREE.MeshMatcapMaterial();
	const matcapTexture = new THREE.TextureLoader().load('/matcap_logo.png');
	material.matcap = matcapTexture;
  material.color.setHex(0xdba2cc);

	var grad_mat = new THREE.ShaderMaterial({
    uniforms: {
        u_time: { value: 0.0 },
        color1: { value: new THREE.Color(0x7FD4B8) }, // #4ED8A7
        color2: { value: new THREE.Color(0xE895AA) },  // #CF5270
        worldMinY: { value: 0 },  // Will be set after model is loaded
        worldHeight: { value: 1 } // Will be set after model is loaded
    },
    vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float worldMinY;
        uniform float worldHeight;
        varying vec3 vWorldPosition;
        
        void main() {
            // Calculate normalized height in world space
            float normalizedHeight = (vWorldPosition.y - worldMinY) / worldHeight;
            // Clamp to ensure we stay within 0-1 range
            normalizedHeight = clamp(normalizedHeight, 0.0, 1.0);
            // Create gradient
            vec3 finalColor = mix(color1, color2, normalizedHeight);
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `
  });

  const hero = document.getElementsByClassName('VPHero VPHomeHero');
  const threeContainer = document.createElement('div');
  threeContainer.classList.add('three_js');

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 2000);
  camera.position.set(-5, 0, 25);

	scene = new THREE.Scene();
  	const light = new THREE.AmbientLight(0xffffff); // soft light
  	scene.add(light);

  	const loader = new GLTFLoader().setPath('/');
	
  	loader.load('bg_model.glb', async function(gltf) {

		model = gltf.scene;

    let box = new THREE.Box3().setFromObject(model);
    let worldHeight = box.max.y - box.min.y;

    // // Update the material's uniforms with the model's world dimensions
    // grad_mat.uniforms.worldMinY.value = box.min.y;
    grad_mat.uniforms.worldHeight.value = worldHeight*0.33;

		model.traverse((o) => {
			if (o.isMesh) o.material = grad_mat;
		});

		mixer = new THREE.AnimationMixer(model);
		const clips = gltf.animations;
		// Create an array to store all actions
		const actions = [];

		// Create and start an action for each clip
		clips.forEach((clip) => {
			const action = mixer.clipAction(clip);
			action.play();
			actions.push(action);
		});

		// wait until the model can be added to the scene without blocking due to shader compilation

		await renderer.compileAsync(model, camera, scene);

		scene.add(model);
		modelReady = true;

		render();
		hero[0].appendChild(threeContainer);
		actions.forEach((action) => action.play());
		animate();
			
  });
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  threeContainer.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

  	renderer.setSize(window.innerWidth, window.innerHeight);
  	//renderer.setAnimationLoop(animate);
	render();

} 

function render() {
  renderer.render(scene, camera);
}

function animate() {
	requestAnimationFrame(animate)
  if (mixer && modelReady) mixer.update(clock.getDelta());
  	const delta = clock.getDelta();
	render()
}

document.addEventListener('mousemove', function(event) {
    model.rotation.y += event.movementX * 0.0001;
    model.rotation.x += -event.movementY * 0.0005;
});
</script>

