const disp_logout = document.querySelectorAll('.disp_logout');
const disp_login= document.querySelectorAll('.disp_login'); 

/* console.log(disp_login)
console.log(disp_logout)  */

export const loginCheck = user => {
    if(user){
        disp_logout.forEach(link => link.style.display = 'none') 
        disp_login.forEach(link => link.style.display = 'block') 
        /* window.location.href = "index.html" */
    }else{
        disp_logout.forEach(link => link.style.display = 'block') 
        disp_login.forEach(link => link.style.display = 'none') 
        
    }
}