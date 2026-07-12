const header=document.querySelector('.site-header');
const button=document.querySelector('.menu-button');
button?.addEventListener('click',()=>{const open=header.classList.toggle('nav-open');button.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('nav-open');button?.setAttribute('aria-expanded','false');}));
