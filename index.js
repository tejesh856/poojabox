const homedecor=document.querySelectorAll('.navbar>ul>li')[1].children[0];
const shop=document.querySelectorAll('.navbar>ul>li')[0].children[0];
const inputwrapper=document.querySelector('.input-wrapper');
const search=document.querySelector('.search');
const sidebar=document.querySelector('.sidebar');
const swrapper=document.querySelector('.shopping-cart-wrapper');
const scross=document.querySelector('.shopping-cross');
const scart=document.querySelector('.shopping-cart');
const ft1=document.querySelector('.ft-1');
const ft2=document.querySelector('.ft-2');
const ft3=document.querySelector('.ft-3');
homedecor.addEventListener('click',()=>{
    
    if(homedecor.nextElementSibling.className==='second-dp-wrapper'){
        homedecor.nextElementSibling.classList.add('sdp');
        shop.nextElementSibling.classList.remove('fdp');
    }
    else{
        homedecor.nextElementSibling.classList.remove('sdp');
    }
    
    
    
})
shop.addEventListener('click',()=>{
    
    if(shop.nextElementSibling.className==='first-dp-wrapper'){
        shop.nextElementSibling.classList.add('fdp');
        homedecor.nextElementSibling.classList.remove('sdp');
       
    }
    else{
        shop.nextElementSibling.classList.remove('fdp');
    }
    
})

window.addEventListener('click',(e)=>{
    if(e.target.className!=='shop'){
        shop.nextElementSibling.classList.remove('fdp');

    }
    if(e.target.className!=='homedecor'){
        homedecor.nextElementSibling.classList.remove('sdp');
    }
    if(e.target.parentElement.className==='search'){
        inputwrapper.style='display:block';
        e.target.parentElement.style='visibility:hidden';
    }
    
    if(e.target.className!=='input' && e.target.parentElement.className!=='search' && e.target.className!=='input-box'){
         inputwrapper.style='display:none';
         search.style='visibility:visible';
         inputwrapper.children[0].children[1].value='';
         

    }
    if(e.target.className==='input'){
        e.target.children[1].setAttribute('placeholder','SEARCH...');
    }
    else{
        document.querySelector('.input').children[1].removeAttribute('placeholder');
    }
    if(e.target.parentElement.className==='ham'){
        console.log(e.target.parentElement);
        sidebar.style='left:0%';
    }
    if(e.target.parentElement.className==='side-cross'){
        console.log(e.target.parentElement);
        sidebar.style='left:-100%';
    }
    
    
    /*else if(e.target.parentElement.parentElement.parentElement.className==='shopping-cart-wrapper hide'){
        scart.classList.add('cslide');
        swrapper.classList.add('hide');
        console.log(e.target.className);
    }
    else{
        scart.classList.remove('cslide');
        swrapper.classList.remove('hide');
        console.log(e.target.parentElement.parentElement.parentElement.className);
    }*/
    if(e.target.parentElement.className==='cart'){
        scart.classList.add('cslide');
        swrapper.classList.add('hide');
        
    }
    if(e.target.parentElement.className==='shopping-cross'){
        scart.classList.remove('cslide');
        swrapper.classList.remove('hide');
    }
    
    

    /**/
    
    
})



/*swrapper.children[0].addEventListener('click',(e)=>{
    if(e.target.className!=='shopping-cart-wrapper hide'){
        scart.classList.add('cslide');
        swrapper.classList.add('hide');
        console.log(e.target);
    }
    else{
        scart.classList.remove('cslide');
        swrapper.classList.remove('hide');
    }
    
    /*else{
        scart.classList.remove('cslide');
        swrapper.classList.remove('hide');
        console.log('not target:'+e.target);
    }
})*/
ft1.children[0].addEventListener('click',()=>{
    if(ft1.children[1].className===''){
        ft1.children[1].classList.add('expand-1');
    }
    else{
        ft1.children[1].classList.remove('expand-1');
    }
})
ft2.children[0].addEventListener('click',()=>{
    if(ft2.children[1].className===''){
        ft2.children[1].classList.add('expand-2');
    }
    else{
        ft2.children[1].classList.remove('expand-2');
    }
})
ft3.children[0].addEventListener('click',()=>{
    if(ft3.children[1].className===''){
        ft3.children[1].classList.add('expand-3');
    }
    else{
        ft3.children[1].classList.remove('expand-3');
    }
})
const sidedp=document.querySelectorAll('.opt-1');
sidedp.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if(item.nextElementSibling.className==='side-wrapper'){
            item.nextElementSibling.classList.add('show');
        }
        else{
            item.nextElementSibling.classList.remove('show');
        }
    })

})
