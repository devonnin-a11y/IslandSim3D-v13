
window.questState={main:0};

window.toggleQuests=()=>{
 const p=document.getElementById("quests");
 p.style.display="block";
 p.innerHTML=questState.main===0
  ? '<button onclick="advanceQuest()">Talk to Eda</button>'
  : 'Quest Complete!';
 overlay.style.display="block";
};

window.advanceQuest=()=>{
 questState.main=1;
};
