const conf =document.querySelector('#confirmation');
const pass =document.querySelector('#password');
const but =document.querySelector('button');

but.addEventListener('click', function(){
    if(conf.value!=pass.value){
        conf.style.border='1px solid red';
        pass.style.border='1px solid red';
    }
    else {
        conf.style.border='1px solid black';
        pass.style.border=' 1px solid black';
    }
})
