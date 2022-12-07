var image;
//we need to take the image, so if we used querySelector then it will directly target any id or class or tag ...in the html
image=document.querySelector('#image1');
// eventlistener it's a method that listens or wait for an event to happen, there are many types of events one of them is the onmouseover
image.addEventListener('mouseover',function(){
    image.src="images/image1_2.jpg";
});

