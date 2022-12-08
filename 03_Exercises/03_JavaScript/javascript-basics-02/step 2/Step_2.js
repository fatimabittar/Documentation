var input;
// input=document.getElementById('name');
input=document.querySelector('#name');
console.log(input)
input.addEventListener('focusout',function(){
    alert("thank you for participating!");
});
