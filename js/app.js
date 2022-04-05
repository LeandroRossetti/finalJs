import { getDolar } from "./dolar.js";
import { returnProducts } from "./menuListing.js";



let valueDolarDiv=document.getElementById("valueDolar");

async function dolarInNav(){

    let value=await getDolar()
    if (value!=undefined){
    valueDolarDiv.innerHTML=value;
}
}


dolarInNav();





const arrayProducts=returnProducts();


let menuIndex=document.getElementById("divRowMenu");

for (const iterator of arrayProducts) {
    
    setTimeout(() => {
        menuIndex.innerHTML+=iterator.getCard()
        
    }, 900);
    
    
}

let a = document.body;

const fnVerifiLogin = () => {
    let usr = sessionStorage.getItem('usrlogged');
    let usrGuest = sessionStorage.getItem('usrloggedGuest');
    if ( usr || usrGuest ){
            console.log('Bienvenido Nuevamente');
            a.style.display='block'
            a.className = 'animate__animated animate__fadeIn animate__delay-0s'
    }else{
        location.href = "./login.html";
    }
}
fnVerifiLogin();


let btnLogOut = document.getElementById('btnLogOut');
btnLogOut.onclick = () =>{
    sessionStorage.clear();
    fnVerifiLogin();

}
    


let carritoInput = document.getElementById("numberCarrito")






a.addEventListener("click", (e) => {

    let b = e.target;
    
    if ( b.tagName === 'A' && b.className.includes('btn')){

        change()
    }

})


function change(){
    
    let actualValue = Number(carritoInput.value);
    let newValue = actualValue + 1;
    carritoInput.value=newValue;

}


