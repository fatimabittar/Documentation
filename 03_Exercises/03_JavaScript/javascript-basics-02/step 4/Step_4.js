
function clearInput() {
if (confirm('Do you want to reset?')){
document.getElementById('surname').value= "";
document.getElementById('name').value= "";
document.getElementById('city').value= "";
}}

document.querySelector('#button').document.addEventListener('click', clearInput());


