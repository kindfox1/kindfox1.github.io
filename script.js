// script.js — small helpers
document.getElementById('year').textContent = new Date().getFullYear();
// Smooth scrolling for internal links (if present)
document.addEventListener('click', function(e){
  if(e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')){
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth'});
  }
});
