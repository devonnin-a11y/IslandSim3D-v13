
window.togglePhone=()=>{
 phone.style.display="flex";
 overlay.style.display="block";
};
window.closeAllPanels=()=>{
 ["phone","inventory","housing","shops","quests"].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.style.display="none";
 });
 overlay.style.display="none";
};
window.toggleInventory=()=>{
 inventory.style.display="block";
 inventory.innerHTML=JSON.stringify(state.sim.inventory,null,2);
 overlay.style.display="block";
};
