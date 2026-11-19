"use strict";
// Evita que otra página meta la app dentro de un marco (clickjacking)
if(window.top!==window.self){try{window.top.location=window.self.location}catch(e){document.documentElement.hidden=true}}

const WEEKS = [
 {t:"Despegue", c:"Networking Basics · Parte 1: Construye una red pequeña", m:[
  ["setup","Crea tu cuenta en netacad.com y elige idioma español","Inscríbete en Network Technician Career Path",15,[["NetAcad","https://www.netacad.com"]]],
  ["setup","Instala Cisco Packet Tracer","Se descarga desde tu cuenta de NetAcad. Ábrelo y arrastra una PC al lienzo, solo para probar.",15,[["Packet Tracer","https://www.netacad.com/courses/packet-tracer"]]],
  ["curso","Estudia la Parte 1, primera mitad","2 bloques de 25 min",25,[["NetAcad","https://www.netacad.com"]]],
  ["curso","Termina la Parte 1 y haz su quiz","No importa la calificación: importa terminar",25],
  ["reto","Espía tu propia red","En Windows abre CMD y escribe <code>ipconfig</code>. Anota tu IP, tu puerta de enlace y tu DNS.",20]]},
 {t:"Cables y Wi‑Fi", c:"Networking Basics · Parte 2: Acceso a la red", m:[
  ["curso","Estudia Ethernet y medios de red","2 bloques",25],
  ["curso","Estudia redes inalámbricas y haz el quiz","",25],
  ["reto","Detective de cables","Busca tu módem o router. ¿Qué cables tiene? ¿Fibra, coaxial o UTP (RJ45)?",20],
  ["reto","Mira la etiqueta de tu router","Encuentra la dirección MAC. Ahora ya sabes qué es.",15]]},
 {t:"El idioma de Internet", c:"Networking Basics · Parte 3: El protocolo IP", m:[
  ["curso","Estudia direcciones IPv4","2 bloques",25],
  ["curso","Estudia IPv6 y haz el quiz","",25],
  ["reto","Ninja del binario","Convierte a binario: 192, 168, 10, 255, 128, 64, 1, 0, 172 y 224. Sin calculadora.",25,[["Practica binario (Cisco)","https://learningnetwork.cisco.com/s/binary-game"]]],
  ["reto","¿IP pública o privada?","Busca \"cuál es mi IP\" en Google y compárala con la de <code>ipconfig</code>. ¿Por qué son diferentes? (Pista: NAT)",15]]},
 {t:"Entre redes", c:"Networking Basics · Partes 4 y 5: Comunicación entre redes y protocolos", m:[
  ["curso","Parte 4: routing y comunicación entre redes","",25],
  ["curso","Parte 5: DHCP, DNS, TCP y UDP","",25],
  ["reto","Rastrea un paquete","En CMD escribe <code>tracert google.com</code>. Cuenta cuántos routers (saltos) hay entre tú y Google.",20],
  ["curso","🏅 Examen final de Networking Basics","¡Primer certificado desbloqueado!",40]]},
 {t:"Arquitecto", c:"Networking Devices and Initial Configuration · Parte 1: Diseño de redes", m:[
  ["curso","Estudia características del diseño de redes","2 bloques",25],
  ["curso","Termina la Parte 1 y haz el quiz","",25],
  ["reto","Tu primera red en Packet Tracer","2 PCs + 1 switch. Dales IP (ej. 192.168.1.10 y .11) y haz <code>ping</code> entre ellas.",30,[["Packet Tracer","https://www.netacad.com/courses/packet-tracer"]]]]},
 {t:"Direcciones", c:"Networking Devices and Initial Configuration · Parte 2: Direccionamiento", m:[
  ["curso","Estudia direccionamiento de red","2 bloques",25],
  ["curso","Termina la Parte 2 y haz el quiz","",25],
  ["reto","Red de 4 PCs","En Packet Tracer conecta 4 PCs a un switch y comprueba que todas se hagan ping.",25],
  ["reto","Máscara de subred","Explica con tus palabras qué significa /24. Escríbelo en 3 líneas.",15]]},
 {t:"Hacker de consola", c:"Networking Devices and Initial Configuration · Configuración inicial", m:[
  ["curso","Estudia la línea de comandos de Cisco (IOS)","",25],
  ["reto","Configura un switch","En Packet Tracer usa <code>enable</code>, <code>configure terminal</code>, <code>hostname MiSwitch</code> y pon una contraseña.",30],
  ["curso","🏅 Examen final del curso 2","¡Segundo certificado!",40]]},
 {t:"Las capas", c:"Network Addressing and Basic Troubleshooting · Parte 1: Capas física, de enlace y de red", m:[
  ["curso","Estudia las capas física y de enlace","",25],
  ["curso","Estudia la capa de red y haz el quiz","",25],
  ["reto","Memoriza el modelo OSI","Inventa una frase para recordar las 7 capas. Gana XP si te da risa.",15],
  ["reto","Tabla ARP","En CMD escribe <code>arp -a</code>. ¿Qué dispositivos de tu casa reconoces?",15]]},
 {t:"Maestro del subnetting", c:"Network Addressing and Basic Troubleshooting · Partes 2 y 3", m:[
  ["curso","Parte 2: direccionamiento IP y subnetting","2 bloques",25],
  ["reto","10 ejercicios de subnetting","Resuelve 10 en cualquiera de estos sitios. Repite hasta que salgan rápido.",30,[["subnettingpractice.com","https://subnettingpractice.com"],["Quizzes de subnetting","https://ipcisco.com/subnetting-quizes/"]]],
  ["curso","Parte 3: dispositivos Cisco y solución de problemas","",25],
  ["curso","🏅 Examen final del curso 3","¡Tercer certificado!",40]]},
 {t:"Soporte técnico", c:"Network Support and Security · Soporte", m:[
  ["curso","Estudia la metodología para resolver problemas","",25],
  ["curso","Estudia buenas prácticas de help desk y haz el quiz","",25],
  ["reto","Rompe y arregla","En Packet Tracer cambia a propósito la IP de una PC para que falle el ping. Luego encuentra el error como técnico.",25]]},
 {t:"Escudo", c:"Network Support and Security · Seguridad", m:[
  ["curso","Estudia fundamentos de seguridad de red","",25],
  ["curso","Estudia seguridad inalámbrica y haz el quiz","",25],
  ["reto","Audita tu Wi‑Fi","¿Tu router usa WPA2 o WPA3? ¿Sigue con la contraseña de fábrica? Revísalo (con permiso de quien lo administra).",20],
  ["curso","🏅 Examen final del curso 4","¡Cuarto certificado!",40]]},
 {t:"JEFE FINAL", boss:true, c:"Examen integral + certificación CCST Networking", m:[
  ["curso","🏆 Examen integral de la ruta (70% o más)","Ganas la insignia Network Technician Career Path",60,[["Ver la insignia","https://www.credly.com/org/cisco/badge/network-technician-career-path"]]],
  ["reto","Repaso exprés","Vuelve a hacer los quizzes donde sacaste menos calificación",30],
  ["setup","Agenda el examen CCST Networking en español","En Pearson VUE: examen 100-150, en español, 50 minutos, 125 USD",30,[["Info del examen CCST","https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html"],["Pearson VUE (Cisco)","https://www.pearsonvue.com/cisco"]]],
  ["reto","👑 Aprueba el CCST Networking","Ya estás certificado en redes. Siguiente parada: CCNA.",100]]}
];
const LEVELS=[[0,"🐣","Novato"],[150,"🔌","Aprendiz de cables"],[400,"📡","Explorador de paquetes"],[700,"🧭","Domador de switches"],[1000,"🧮","Maestro del subnetting"],[1300,"🛡️","Técnico de redes"],[1500,"👑","Certificado"]];
const CHEERS=["¡Bien! Una menos 💪","¡Eso! +XP","Tu cerebro ya sabe más que ayer 🧠","¡Imparable!","Pequeños pasos, grandes redes 🌐","¡Paquete entregado! 📦","¡Ping exitoso! 0% de pérdida","Sigue así, técnico 🔧"];

// Storage (seguro)
const KEY="mision-redes-v1";
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function clean(o){const r={done:{},days:[],open:null,pomo:{}};if(!o||typeof o!=="object")return r;
  const isK=k=>/^\d{1,2}-\d{1,2}$/.test(k), isD=d=>typeof d==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(d);
  if(o.done&&typeof o.done==="object")for(const k in o.done)if(isK(k)&&o.done[k]===true)r.done[k]=true;
  if(Array.isArray(o.days))r.days=o.days.filter(isD).slice(-1000);
  if(Number.isInteger(o.open)&&o.open>=-1&&o.open<50)r.open=o.open;
  if(o.pomo&&typeof o.pomo==="object")for(const k in o.pomo)if(isD(k)&&Number.isInteger(o.pomo[k])&&o.pomo[k]>=0&&o.pomo[k]<1000)r.pomo[k]=o.pomo[k];
  return r}
let S=clean(load());

const total=WEEKS.reduce((a,w)=>a+w.m.length,0);
const totalXP=WEEKS.reduce((a,w)=>a+w.m.reduce((b,m)=>b+m[3],0),0);
const today=()=>new Date().toISOString().slice(0,10);

function xp(){let x=0;WEEKS.forEach((w,i)=>w.m.forEach((m,j)=>{if(S.done[i+"-"+j])x+=m[3]}));return x}
function levelOf(x){let L=0;LEVELS.forEach((l,i)=>{if(x>=l[0])L=i});return L}
function weekDone(i){return WEEKS[i].m.every((m,j)=>S.done[i+"-"+j])}
function currentWeek(){for(let i=0;i<WEEKS.length;i++)if(!weekDone(i))return i;return WEEKS.length-1}
function streak(){const set=new Set(S.days);let d=new Date();let n=0;
  if(!set.has(today())){d.setDate(d.getDate()-1)}
  while(set.has(d.toISOString().slice(0,10))){n++;d.setDate(d.getDate()-1)}return n}

function render(){
  const cw=currentWeek(); if(S.open===null)S.open=cw;
  const box=document.getElementById("weeks"); box.innerHTML="";
  WEEKS.forEach((w,i)=>{
    const n=w.m.filter((m,j)=>S.done[i+"-"+j]).length;
    const el=document.createElement("div");
    el.className="week"+(w.boss?" boss":"")+(weekDone(i)?" done":"")+(i===cw&&!weekDone(i)?" current":"")+(S.open===i?" open":"");
    el.innerHTML=`<div class="whead"><div class="wnum">${weekDone(i)?"✓":(w.boss?"👾":i+1)}</div>
      <div class="wtitle"><b>Semana ${i+1}: ${w.t}</b><span>${i===cw&&!weekDone(i)?"👉 Estás aquí · ":""}${w.c.split("·")[0].trim()}</span></div>
      <div class="wprog">${n}/${w.m.length}</div><div class="chev">▶</div></div>
      <div class="wbody"><p class="course">📘 ${w.c}</p>${w.m.map((m,j)=>`
        <div class="m ${S.done[i+"-"+j]?"on":""}" data-k="${i}-${j}"><div class="box"></div>
        <div class="mt"><span class="tag ${m[0]}">${m[0]==="reto"?"RETO":m[0]==="curso"?"CURSO":"PREPARA"}</span>${m[1]}${m[2]?`<small>${m[2]}</small>`:""}${m[4]?`<div class="lnks">${m[4].filter(l=>/^https:\/\//.test(l[1])).map(l=>`<a class="lnk" href="${l[1]}" target="_blank" rel="noopener noreferrer">🔗 ${l[0]}</a>`).join("")}</div>`:""}</div>
        <div class="xp">+${m[3]} XP</div></div>`).join("")}</div>`;
    el.querySelector(".whead").onclick=()=>{S.open=S.open===i?-1:i;save();render()};
    el.querySelectorAll(".m").forEach(m=>m.onclick=e=>{if(e.target.closest("a"))return;toggle(m.dataset.k)});
    box.appendChild(el);
  });
  hud();
}
function hud(){
  const x=xp(),L=levelOf(x),cur=LEVELS[L],nxt=LEVELS[L+1];
  document.getElementById("lvlIcon").textContent=cur[1];
  document.getElementById("lvlName").textContent=cur[2];
  const pct=nxt?((x-cur[0])/(nxt[0]-cur[0]))*100:100;
  document.getElementById("xpFill").style.width=Math.min(100,pct)+"%";
  document.getElementById("xpText").textContent=nxt?`${x} XP · faltan ${nxt[0]-x} para "${nxt[2]}"`:`${x} XP · ¡nivel máximo!`;
  const d=Object.values(S.done).filter(Boolean).length;
  document.getElementById("sDone").textContent=d+"/"+total;
  document.getElementById("sPct").textContent=Math.round(d/total*100)+"%";
  document.getElementById("sStreak").textContent=streak()+"🔥";
}
function toggle(k){
  const before=levelOf(xp());
  const [i]=k.split("-").map(Number);
  const wasWeek=weekDone(i);
  S.done[k]=!S.done[k];
  if(S.done[k]){ if(!S.days.includes(today()))S.days.push(today());
    confetti(18); toast(CHEERS[Math.floor(Math.random()*CHEERS.length)]);
    if(!wasWeek&&weekDone(i)){confetti(70);toast(`🎉 ¡Semana ${i+1} completada!`); if(i+1<WEEKS.length)S.open=i+1;}
  }
  save(); render();
  const after=levelOf(xp());
  if(after>before){const l=LEVELS[after];
    document.getElementById("luIcon").textContent=l[1];
    document.getElementById("luName").textContent="¡Ahora eres "+l[2]+"!";
    document.getElementById("luMsg").textContent=after===LEVELS.length-1?"Lo lograste. Eres oficialmente técnico certificado en redes.":"Subiste de nivel. Sigue con la próxima misión.";
    document.getElementById("lvlup").classList.add("show"); confetti(90);}
}
document.getElementById("luClose").onclick=()=>document.getElementById("lvlup").classList.remove("show");

let tt;function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2200)}
function confetti(n){const cols=["#3df5a7","#5ab4ff","#ff5c8a","#ffd23f","#b48cff"];
  for(let i=0;i<n;i++){const c=document.createElement("div");c.className="cf";
    c.style.left=Math.random()*100+"vw";c.style.background=cols[i%cols.length];
    c.style.animationDelay=Math.random()*.4+"s";c.style.animationDuration=1.2+Math.random()*1.2+"s";
    document.body.appendChild(c);setTimeout(()=>c.remove(),3000)}}

// Pomodoro (cuenta con hora real: sigue bien aunque cambies de app)
let focus=true,left=25*60,iv=null,endAt=0;
const FOCUS_MSG=["Teléfono en modo enfoque. Solo esta misión.","Si te distraes, regresa sin culpa. Sigue.","Ya vas. No abras otra app 👀","Concéntrate en entender, no en terminar rápido."];
function tDraw(){const m=String(Math.floor(left/60)).padStart(2,"0"),s2=String(left%60).padStart(2,"0");
  document.getElementById("tTime").textContent=m+":"+s2;
  const T=document.getElementById("timer");T.classList.toggle("break",!focus);T.classList.toggle("run",!!iv&&focus);
  document.getElementById("tMode").textContent=focus?"Sesión de enfoque":"Descanso";
  document.getElementById("tStart").textContent=iv?"⏸ Pausa":"▶ Empezar";
  document.getElementById("tSwitch").textContent=focus?"☕ Descanso":"🎯 Enfoque";
  document.getElementById("tCount").textContent=S.pomo[today()]||0;}
function beep(){try{const a=new (window.AudioContext||window.webkitAudioContext)();[0,.25,.5].forEach(d=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=880;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.15,a.currentTime+d);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+d+.2);o.start(a.currentTime+d);o.stop(a.currentTime+d+.2)})}catch(e){}
  try{navigator.vibrate&&navigator.vibrate([300,150,300,150,300])}catch(e){}}
async function notify(title,body){
  try{if(!("Notification" in window)||Notification.permission!=="granted")return;
    const reg=navigator.serviceWorker&&await navigator.serviceWorker.getRegistration();
    if(reg)reg.showNotification(title,{body,icon:"icon-192.png",badge:"icon-192.png",vibrate:[300,150,300],tag:"pomodoro"});
    else new Notification(title,{body,icon:"icon-192.png"});}catch(e){}}
function setMode(f){focus=f;left=(f?25:5)*60;tDraw()}
function finish(){clearInterval(iv);iv=null;beep();
  if(focus){S.pomo[today()]=(S.pomo[today()]||0)+1;save();confetti(40);toast("⏰ ¡Bloque terminado! Marca tu misión y descansa 5 min");
    notify("⏰ ¡Bloque terminado!","Marca tu misión y toma 5 minutos de descanso.");
    document.getElementById("tMsg").textContent="¡Bien hecho! Levántate, toma agua, estírate.";setMode(false)}
  else{toast("🎯 Descanso terminado. ¿Otro bloque?");notify("🎯 Se acabó el descanso","¿Listo para la siguiente misión?");
    document.getElementById("tMsg").textContent="¿Listo para la siguiente misión?";setMode(true)}}
function tick(){left=Math.max(0,Math.round((endAt-Date.now())/1000));if(left<=0){finish();return}tDraw()}
document.getElementById("tStart").onclick=()=>{
  if(iv){clearInterval(iv);iv=null;tDraw();return}
  try{if("Notification" in window&&Notification.permission==="default")Notification.requestPermission()}catch(e){}
  if(focus)document.getElementById("tMsg").textContent=FOCUS_MSG[Math.floor(Math.random()*FOCUS_MSG.length)];
  endAt=Date.now()+left*1000;iv=setInterval(tick,500);tDraw()};
document.addEventListener("visibilitychange",()=>{if(iv&&!document.hidden)tick()});
document.getElementById("tReset").onclick=()=>{clearInterval(iv);iv=null;setMode(focus)};
document.getElementById("tSwitch").onclick=()=>{clearInterval(iv);iv=null;setMode(!focus)};

// Instalación como app
let deferred=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;document.getElementById("installBox").hidden=false});
document.getElementById("installBtn").onclick=async()=>{if(!deferred)return;deferred.prompt();await deferred.userChoice;deferred=null;document.getElementById("installBox").hidden=true};
window.addEventListener("appinstalled",()=>{document.getElementById("installBox").hidden=true;toast("📲 ¡App instalada!")});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}

// Reset con confirmación en dos toques (sin confirm())
let armed=false;document.getElementById("resetAll").onclick=e=>{
  if(!armed){armed=true;e.target.textContent="¿Seguro? Toca otra vez para borrar todo";setTimeout(()=>{armed=false;e.target.textContent="Borrar mi progreso"},3000);return}
  S={done:{},days:[],open:null,pomo:{}};save();render();e.target.textContent="Borrar mi progreso";armed=false;toast("Progreso borrado")};

render();tDraw();
