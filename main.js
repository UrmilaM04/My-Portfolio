// ===== main.js =====
// Active nav link on scroll
const links=[...document.querySelectorAll('#navlinks a')];
const secs=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const setActive=()=>{let i=secs.findIndex(s=>s.getBoundingClientRect().top>100);if(i===-1)i=secs.length-1;else i=Math.max(0,i-1);links.forEach(l=>l.classList.remove('active'));links[i]?.classList.add('active')};
document.addEventListener('scroll',setActive);setActive();

// Mobile menu
const menu=document.getElementById('menu');
const navul=document.getElementById('navlinks');
menu.addEventListener('click',()=>navul.classList.toggle('open'));
links.forEach(l=>l.addEventListener('click',()=>navul.classList.remove('open')));

// Tabs
const tabs=document.querySelectorAll('.tab');
const panels={experience:document.getElementById('panel-experience'),education:document.getElementById('panel-education'),skills:document.getElementById('panel-skills'),aboutme:document.getElementById('panel-aboutme')};
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(b=>b.classList.remove('active'));t.classList.add('active');Object.values(panels).forEach(p=>p.hidden=true);panels[t.dataset.tab].hidden=false;}));

// Theme toggle
const root=document.documentElement;const themeBtn=document.getElementById('theme');
const apply=(m)=>{root.classList.toggle('light',m==='light');localStorage.setItem('theme',m);themeBtn.innerHTML=m==='light'?"<i class='bx bx-sun'></i>":"<i class='bx bx-moon'></i>"};
apply(localStorage.getItem('theme')||'dark');
themeBtn.addEventListener('click',()=>apply(root.classList.contains('light')?'dark':'light'));

// Contact form client-side check (works with Formspree POST action)
const form=document.getElementById('contact-form');
form.addEventListener('submit',(e)=>{const data=new FormData(form);for(const [k,v] of data.entries()){if(!String(v).trim()){e.preventDefault();alert(`Please fill out: ${k}`);return;}}});

document.getElementById('year').textContent=new Date().getFullYear();
