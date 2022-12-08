const text=document.querySelector('input');
const value=document.getElementsByName('value');

text.addEventListener('input',updatevalue);

function updatevalue(a){
    value.textContent=a.target.value;
}
