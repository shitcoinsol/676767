// Copy CA
const copyBtn = document.getElementById('copyCA');
const caText = document.getElementById('caText');
copyBtn?.addEventListener('click', async () => {
  const ca = caText?.dataset?.ca || caText?.textContent?.replace('CA:','').trim();
  try{
    await navigator.clipboard.writeText(ca);
    copyBtn.textContent = 'COPIED';
    setTimeout(()=>copyBtn.textContent='COPY', 1200);
  }catch(e){
    alert('Copy failed. Contract: ' + ca);
  }
});

// Intro bumper removal (safety)
setTimeout(()=>{
  const i = document.getElementById('intro');
  if(i) i.style.display='none';
}, 4300);

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('revealed');
      io.unobserve(e.target);
    }
  });
},{threshold:.18});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Simple parallax on hero art
const art = document.querySelector('.parallax');
window.addEventListener('mousemove', (e)=>{
  const x = (e.clientX / window.innerWidth - .5) * 10;
  const y = (e.clientY / window.innerHeight - .5) * 10;
  if(art) art.style.transform = `translateY(${y}px) translateX(${x}px)`;
});
