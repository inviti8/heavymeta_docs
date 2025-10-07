---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Heavymeta™"
  text: "Toolkit"
  
  actions:
    - theme: brand
      text: 'Pintheon'
      link: /Tools/Pintheon Node/Vision
      class: with-icon
    - theme: brand
      text: '▶️'
      link: https://youtu.be/4D6J1INuJcU
      class: with-icon
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
import { onMounted } from 'vue';

// Only run this code on the client side
onMounted(() => {
  // Import Three.js dynamically to avoid SSR issues
  import('three').then(THREE => {
    import('three/addons/loaders/GLTFLoader.js').then(({ GLTFLoader }) => {
      const clock = new THREE.Clock();
      let camera, scene, model, renderer;
      let mixer = undefined;
      let modelReady = false;

      // Create render function
      function render() {
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      }

      // Handle window resize
      function onWindowResize() {
        if (!renderer || !camera) return;
        
        const targetAspect = 16 / 9;
        let width, height;
        
        if (window.innerWidth / window.innerHeight > targetAspect) {
          height = window.innerHeight;
          width = height * targetAspect;
        } else {
          width = window.innerWidth;
          height = width / targetAspect;
        }
        
        renderer.setSize(width, height);
        
        // Center the canvas in the window
        renderer.domElement.style.marginLeft = `${(window.innerWidth - width) / 2}px`;
        renderer.domElement.style.marginTop = `${(window.innerHeight - height) / 2}px`;
        
        camera.aspect = targetAspect;
        camera.updateProjectionMatrix();
        render();
      }

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        if (mixer && modelReady) mixer.update(clock.getDelta());
        render();
      }

      // Initialize the scene
      function init() {
        // Use import.meta.env.BASE_URL which is automatically set by Vite
        const basePath = import.meta.env.BASE_URL || '/';

	const material = new THREE.MeshMatcapMaterial();
	const matcapTexture = new THREE.TextureLoader().load(basePath + 'matcap_logo.png');
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

  // Set up camera with a fixed aspect ratio
  const targetAspect = 16 / 9; // Standard widescreen aspect ratio
  
  // Create camera with fixed aspect ratio
  camera = new THREE.PerspectiveCamera(35, targetAspect, 0.01, 2000);
  camera.position.set(-5, 2, 20); // Fixed position that works well with the scene
  
  // Apply the same aspect ratio calculation as in onWindowResize
  const onWindowResize = () => {
    // Maintain target aspect ratio
    let width, height;
    
    if (window.innerWidth / window.innerHeight > targetAspect) {
      // Window is wider than target aspect ratio
      height = window.innerHeight;
      width = height * targetAspect;
    } else {
      // Window is taller than target aspect ratio
      width = window.innerWidth;
      height = width / targetAspect;
    }
    
    // Update renderer size
    if (renderer) {
      renderer.setSize(width, height);
      
      // Center the canvas in the window
      renderer.domElement.style.marginLeft = `${(window.innerWidth - width) / 2}px`;
      renderer.domElement.style.marginTop = `${(window.innerHeight - height) / 2}px`;
    }
    
    // Update camera and render
    camera.aspect = targetAspect;
    camera.updateProjectionMatrix();
    if (scene) render();
  };
  
  // Store the function reference for the event listener
  window._onWindowResize = onWindowResize;

	scene = new THREE.Scene();
  	const light = new THREE.AmbientLight(0xffffff); // soft light
  	scene.add(light);

   	
   	const loader = new GLTFLoader().setPath(basePath);
	
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
  
        // Create renderer after the scene is set up
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        threeContainer.appendChild(renderer.domElement);
        
        // Add window resize handler and trigger initial resize
        window.addEventListener('resize', onWindowResize);
        onWindowResize(); // Call it once on initial load
        
        // Add mousemove event listener
        document.addEventListener('mousemove', function(event) {
          if (model) {
            model.rotation.x += event.movementX * 0.00001;
            model.rotation.y += -event.movementY * 0.0001;
          }
        });
        
        // Start the animation loop
        animate();
      }

      // Start the initialization
      init();
    });
  });
});
</script>

