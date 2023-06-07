
// --------------------------navegation--------

const nav_list = document.querySelector('.nav_list');
const header_btn_access = document.querySelector('.header_btn_access');
const btn_humbg = document.querySelector('.btn_humbg');
const btn_creator = document.querySelector('.btn_creator');
const logout = document.querySelector('.logout');


    

btn_humbg.addEventListener('click',()=>{
    nav_list.classList.toggle('activo');
    header_btn_access.classList.toggle('activo');
    header_btn_idea.classList.toggle('activo');
    btn_creator.classList.toggle('activo');
    logout.classList.toggle('activo');
});
