const env=document.getElementById('envelope');
const intro=document.getElementById('intro');
const gal=document.getElementById('galaxy');
const snd=document.getElementById('openSound');
const bg=document.getElementById('bg');
const letter=document.getElementById('letter');
const h=letter.querySelector('h2');
const p=letter.querySelector('p');
env.onclick=()=>{
 snd.currentTime=0;
 snd.play();
 const delay=Math.max(1000,(snd.duration&&isFinite(snd.duration)?snd.duration*1000:3000));
 setTimeout(()=>{
   intro.classList.add('hidden');
   gal.classList.remove('hidden');
   bg.play().catch(()=>{});
 },delay);
};
const msgs=[
['Letter One','Your first message goes here.'],
['Letter Two','Your second message goes here.'],
['Final Letter','Your final heartfelt message goes here ❤️']
];
['p1','p2','p3'].forEach((id,i)=>{
 document.getElementById(id).onclick=()=>{
   h.textContent=msgs[i][0];
   p.textContent=msgs[i][1];
   letter.classList.remove('hidden');
 };
});
function closeLetter(){letter.classList.add('hidden');}
window.closeLetter=closeLetter;
