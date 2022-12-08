const ref= document.querySelectorAll('a');
const text= document.querySelector('#texte');

ref.forEach(element => {
    element.addEventListener('click',function(){
        if (element.id=='show')
        {
            text.style.visibility='visible';
        }
        else{
            text.style.visibility='hidden';
        }
    })
});