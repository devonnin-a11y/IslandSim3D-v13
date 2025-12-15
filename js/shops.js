
window.toggleShops=()=>{
 const p=document.getElementById("shops");
 p.style.display="block";
 p.innerHTML=`<b>Village Shop</b><br>
 Coins: ${state.sim.inventory.coins}<br>
 <button onclick="buyItem()">Buy Potion (10)</button>`;
 overlay.style.display="block";
};

window.buyItem=()=>{
 if(state.sim.inventory.coins>=10){
  state.sim.inventory.coins-=10;
 }
};
