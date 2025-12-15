
window.toggleHousing=()=>{
 const p=document.getElementById("housing");
 p.style.display="block";
 p.innerHTML=`<b>Your House</b><br>
 Furniture count: ${state.sim.house.furniture.length}<br>
 <button onclick="placeFurniture()">Place Chair</button>`;
 overlay.style.display="block";
};

window.placeFurniture=()=>{
 const f=new THREE.Mesh(
  new THREE.BoxGeometry(0.5,0.5,0.5),
  new THREE.MeshStandardMaterial({color:0x8d6e63})
 );
 f.position.set(state.sim.pos.x+1,0.25,state.sim.pos.z);
 THREEWORLD.scene.add(f);
 state.sim.house.furniture.push("chair");
};
