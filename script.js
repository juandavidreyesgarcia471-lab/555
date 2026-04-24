alert("¡Bienvenido a mi portafolio!");

const btnocultar = document.getElementById('btnocultar');
const btnregresar = document.getElementById('btnregresar');
const sobremi = document.getElementById('sobremi');

btnocultar.addEventListener('click', function(){
     sobremi.style.display = 'none';
     btnocultar.style.display = 'none';
     btnregresar.style.display = 'inline-block';

});

btnregresar .addEventListener('click', function(){
    sobremi.style.display = 'block';
    btnocultar.style.display = 'inline-block';
    btnregresar.style.display = 'none';

});


