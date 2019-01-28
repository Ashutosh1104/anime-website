var hamburger = document.querySelector('.fa-bars');
var hamdiv= document.querySelector('.hamdiv')
var x=document.querySelector('.x')
hamburger.addEventListener('click',function(){
    if(x.style.visibility=='collapse'){
        x.style.visibility='visible';
        x.innerHTML=hamdiv.innerHTML        
    }
    else{
        x.style.visibility='collapse';
        x.innerHTML=''
    }
})