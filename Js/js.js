const selectOption = document.getElementById('select-option');



const selecionar = document.getElementById('selecionar');


const Novedadesdenomina = document.getElementById('Novedadesdenomina');
// const Basededatosunificada = document.getElementById('Basededatosunificada');
const Convocatoria = document.getElementById('Convocatoria');
const IncidetesMayores = document.getElementById('IncidetesMayores');

selectOption.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  
  if (selectedOption === 'Novedadesdenomina') {
    Novedadesdenomina.style.display = 'block';
    Convocatoria.style.display = 'none';
    IncidetesMayores.style.display = 'none';


  // } else if (selectedOption === 'Basededatosunificada') {
  //   Novedadesdenomina.style.display = 'none';
  //   Basededatosunificada.style.display = 'block';
  //   Convocatoria.style.display = 'none';
  //   IncidetesMayores.style.display = 'none';
  //   selecionar.style.display = 'none';
  } else if (selectedOption === 'Convocatoria') {
    Novedadesdenomina.style.display = 'none';
    Convocatoria.style.display = 'block';
    IncidetesMayores.style.display = 'none';
    selecionar.style.display = 'none';
  } else if (selectedOption === 'IncidetesMayores') {
    Novedadesdenomina.style.display = 'none';
    Convocatoria.style.display = 'none';
    IncidetesMayores.style.display = 'block';
    selecionar.style.display = 'none';
  } else if (selectedOption === 'selecionar') {
    Novedadesdenomina.style.display = 'none';
    Convocatoria.style.display = 'none';
    IncidetesMayores.style.display = 'none';
    selecionar.style.display = 'block';
  }  


});





