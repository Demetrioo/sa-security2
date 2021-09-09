var btn = document.querySelector('#verD');
var poemas = document.querySelector('.poemas');

btn.addEventListener('click', function(){

if(poemas.style.display === 'block'){
    poemas.style.display = 'none';
}else{
    poemas.style.display = 'block';
}


})