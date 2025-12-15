
function spawnNPC(name,x,z,role){
 const n=new THREE.Mesh(
  new THREE.BoxGeometry(0.6,1.2,0.6),
  new THREE.MeshStandardMaterial({color:0x88ccee})
 );
 n.position.set(x,0.6,z);
 n.userData={name,role,schedule:"day"};
 THREEWORLD.scene.add(n);
 state.world.npcs.push(n);
}

spawnNPC("Milo",2,2,"shop");
spawnNPC("Eda",-2,3,"quest");
