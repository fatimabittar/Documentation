var images = document.querySelectorAll(".image");
//queryselectorall it is method that return an array 

for(var i=0;i<images.length; i++){
    const index=i;
    images[index].addEventListener('mouseover',function(){
        images[index].src = 'images/image'+(index+1)+'_2.jpg';
})}

