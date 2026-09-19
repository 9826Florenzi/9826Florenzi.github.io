import * as THREE from 'three';

// 1. KHỞI TẠO SCENE, CAMERA, RENDERER
const canvas = document.querySelector('#webgl-canvas');
const scene = new THREE.Scene();

// Sương mù rừng rậm (Mist / Fog) tạo chiều sâu chân thật
scene.fog = new THREE.FogExp2(0x081c10, 0.022);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 3, 16);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// 2. HỆ THỐNG ÁNH SÁNG TỰ NHIÊN
// Ánh sáng môi trường xanh rêu
const hemiLight = new THREE.HemisphereLight(0x76b886, 0x0a1a0e, 1.2);
scene.add(hemiLight);

// Luồng sáng mặt trời ấm xuyên qua tán lá
const sunLight = new THREE.DirectionalLight(0xfff3cc, 2.5);
sunLight.position.set(15, 25, 10);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.camera.near = 0.5;
sunLight.shadow.camera.far = 80;
sunLight.shadow.camera.left = -25;
sunLight.shadow.camera.right = 25;
sunLight.shadow.camera.top = 25;
sunLight.shadow.camera.bottom = -25;
scene.add(sunLight);

// Đèn điểm xanh ngọc tạo điểm nhấn ban đêm
const ambientGlow = new THREE.PointLight(0x38ef7d, 2.5, 30);
ambientGlow.position.set(0, 4, 2);
scene.add(ambientGlow);

// 3. ĐỊA HÌNH RỪNG TỰ NHIÊN (PROCEDURAL FOREST TERRAIN)
const terrainGeo = new THREE.PlaneGeometry(120, 120, 90, 90);
terrainGeo.rotateX(-Math.PI / 2);

const posAttr = terrainGeo.attributes.position;
for (let i = 0; i < posAttr.count; i++) {
  const x = posAttr.getX(i);
  const z = posAttr.getZ(i);
  const y = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2.2 +
            Math.sin(x * 0.04 + z * 0.05) * 3.5;
  posAttr.setY(i, y);
}
terrainGeo.computeVertexNormals();

const terrainMat = new THREE.MeshStandardMaterial({
  color: 0x0f2a18,
  roughness: 0.9,
  metalness: 0.05,
  flatShading: true
});
const terrain = new THREE.Mesh(terrainGeo, terrainMat);
terrain.receiveShadow = true;
scene.add(terrain);

function getTerrainHeight(x, z) {
  return Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2.2 +
         Math.sin(x * 0.04 + z * 0.05) * 3.5;
}

// 4. RỪNG CÂY THÔNG TỰ NHIÊN (PROCEDURAL PINE TREES)
const treeGroup = new THREE.Group();
const trunkMat = new THREE.MeshStandardMaterial({ color: 0x221307, roughness: 0.9 });
const leavesMat = new THREE.MeshStandardMaterial({ 
  color: 0x154326, 
  roughness: 0.7, 
  flatShading: true 
});

function createTree(x, z, scale = 1) {
  const singleTree = new THREE.Group();
  const y = getTerrainHeight(x, z);

  // Thân cây
  const trunkGeo = new THREE.CylinderGeometry(0.2 * scale, 0.35 * scale, 2.5 * scale, 6);
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = (1.25 * scale);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  singleTree.add(trunk);

  // 3 tầng tán lá thông
  const levels = 3;
  for (let i = 0; i < levels; i++) {
    const coneRadius = (1.6 - i * 0.35) * scale;
    const coneHeight = (2.2 - i * 0.3) * scale;
    const coneGeo = new THREE.ConeGeometry(coneRadius, coneHeight, 7);
    const leaves = new THREE.Mesh(coneGeo, leavesMat);
    leaves.position.y = (2.0 + i * 1.3) * scale;
    leaves.castShadow = true;
    singleTree.add(leaves);
  }

  singleTree.position.set(x, y, z);
  return singleTree;
}

// 120 cây phân bổ tự nhiên
for (let i = 0; i < 120; i++) {
  const radius = 10 + Math.random() * 45;
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const scale = 0.7 + Math.random() * 0.9;
  treeGroup.add(createTree(x, z, scale));
}
scene.add(treeGroup);

// 5. ĐÀN ĐOM ĐÓM / BÀO TỬ PHÁT SÁNG (GLOWING FIREFLIES)
const fireflyCount = 200;
const fireflyGeo = new THREE.BufferGeometry();
const fireflyPositions = new Float32Array(fireflyCount * 3);
const fireflySpeeds = [];

for (let i = 0; i < fireflyCount; i++) {
  fireflyPositions[i * 3] = (Math.random() - 0.5) * 50;
  fireflyPositions[i * 3 + 1] = 1 + Math.random() * 8;
  fireflyPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

  fireflySpeeds.push({
    x: (Math.random() - 0.5) * 0.02,
    y: (Math.random() - 0.5) * 0.015,
    z: (Math.random() - 0.5) * 0.02,
    phase: Math.random() * Math.PI * 2
  });
}
fireflyGeo.setAttribute('position', new THREE.BufferAttribute(fireflyPositions, 3));

const canvasTexture = document.createElement('canvas');
canvasTexture.width = 32;
canvasTexture.height = 32;
const ctx = canvasTexture.getContext('2d');
const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
gradient.addColorStop(0, '#ffe066');
gradient.addColorStop(0.4, 'rgba(56, 239, 125, 0.8)');
gradient.addColorStop(1, 'rgba(0,0,0,0)');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 32, 32);

const fireflyTexture = new THREE.CanvasTexture(canvasTexture);

const fireflyMat = new THREE.PointsMaterial({
  size: 0.6,
  map: fireflyTexture,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const fireflies = new THREE.Points(fireflyGeo, fireflyMat);
scene.add(fireflies);

// 6. CAMERA & SCROLLYTELLING
let scrollPercent = 0;
const scrollProgressBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  scrollPercent = Math.max(0, Math.min(1, window.scrollY / (maxScroll || 1)));
  if (scrollProgressBar) {
    scrollProgressBar.style.width = `${scrollPercent * 100}%`;
  }
});

const waypoints = [
  { x: 0,   y: 3.5, z: 16,  lookX: 0,   lookY: 2,   lookZ: 0 },  // Hero
  { x: 8,   y: 5.5, z: 8,   lookX: 2,   lookY: 1,   lookZ: -5 }, // Skills
  { x: -9,  y: 4.8, z: -2,  lookX: 0,   lookY: 2,   lookZ: -12 },// Services
  { x: 0,   y: 6.5, z: -14, lookX: 0,   lookY: 1.5, lookZ: -24 } // Contact
];

let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// 7. RENDER LOOP
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();

  // Đom đóm bay
  const positions = fireflies.geometry.attributes.position.array;
  for (let i = 0; i < fireflyCount; i++) {
    const spd = fireflySpeeds[i];
    positions[i * 3]     += Math.sin(elapsedTime + spd.phase) * spd.x;
    positions[i * 3 + 1] += Math.cos(elapsedTime + spd.phase) * spd.y;
    positions[i * 3 + 2] += Math.sin(elapsedTime * 0.5 + spd.phase) * spd.z;
  }
  fireflies.geometry.attributes.position.needsUpdate = true;

  // Rừng thông đu đưa
  treeGroup.children.forEach((tree, idx) => {
    tree.rotation.z = Math.sin(elapsedTime * 1.5 + idx) * 0.015;
  });

  // Camera nội suy
  const pointIndex = scrollPercent * (waypoints.length - 1);
  const currentIndex = Math.floor(pointIndex);
  const nextIndex = Math.min(currentIndex + 1, waypoints.length - 1);
  const factor = pointIndex - currentIndex;

  const currentWp = waypoints[currentIndex];
  const nextWp = waypoints[nextIndex];

  const targetCamX = THREE.MathUtils.lerp(currentWp.x, nextWp.x, factor) + mouseX * 0.6;
  const targetCamY = THREE.MathUtils.lerp(currentWp.y, nextWp.y, factor) - mouseY * 0.4;
  const targetCamZ = THREE.MathUtils.lerp(currentWp.z, nextWp.z, factor);

  const targetLookX = THREE.MathUtils.lerp(currentWp.lookX, nextWp.lookX, factor);
  const targetLookY = THREE.MathUtils.lerp(currentWp.lookY, nextWp.lookY, factor);
  const targetLookZ = THREE.MathUtils.lerp(currentWp.lookZ, nextWp.lookZ, factor);

  camera.position.lerp(new THREE.Vector3(targetCamX, targetCamY, targetCamZ), 0.05);
  camera.lookAt(targetLookX, targetLookY, targetLookZ);

  renderer.render(scene, camera);
}

animate();

// 8. RESPONSIVE
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
