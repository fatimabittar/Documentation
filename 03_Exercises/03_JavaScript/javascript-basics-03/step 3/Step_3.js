const red=document.querySelector('.red');
const blue=document.querySelector('.blue');
const green=document.querySelector('.green');
const text=document.querySelector('#text');

red.addEventListener('click',function(){
text.style.color ='red';
})

green.addEventListener('click',function(){
text.style.color ='green';
})

blue.addEventListener('click',function(){
text.style.color ='blue';
})