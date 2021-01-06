const navIcon=document.getElementById('nav-icon');
const showNav=document.getElementById('show-nav');
const closeNav=document.getElementById('close-nav');


const toggleNav=()=>{
    showNav.classList.toggle('visible');
   
};
const closeNavHandler=()=>{
 showNav.classList.toggle('visible');
};

navIcon.addEventListener('click',toggleNav);
closeNav.addEventListener('click',closeNavHandler);



