
const consola = "hola consola"
console.log(consola);

//const formulario = document.querySelector("#formulario");

//formulario.addEventListener("submit", datos_formulario);

function datos_formulario() {
    //e.preventDefault();
    setInterval(() => {
        location.reload();
        console.log("se recargo la pagina luego de 4 segundos");
    }, 4000);
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#Email").value;
    const telefono = document.querySelector("#telefono").value;
    const direccion = document.querySelector("#direccion").value;
    const casa = document.querySelector("#casa").value;
    const estado = document.querySelector("#estado").value;
    const ciudad = document.querySelector("#ciudad").value;
    const postal = document.querySelector("#postal").value;
    const terminos = document.querySelector("#terminos").checked;



    console.log(nombre, apellido);
    console.log(email);
    console.log(telefono);
    console.log(direccion);
    console.log(casa);
    console.log(estado);
    console.log(ciudad);
    console.log(postal);
    console.log(terminos);
    console.log(" si se esta leyendo esto estamos bien ok")
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
/*pasa la fecha al documento */
const  fecha = new Date();
const año = fecha.getFullYear();
 document.querySelector("#hora").innerHTML = año;
 document.querySelector(".color").style.color="red";
// Crear el  id para ubicar la imagen
const img = document.querySelector('#img_p');

// Establecer el atributo src con la ruta de la imagen
img.src = 'img/icon_login.png';
img.alt = " imagen"
localStorage.clear()
//localStorage.clear('rutaimagen')
// Agregar la imagen al documento HTML
document.querySelector("#img_p").innerHTML = img;

//funcion como cambiar imagen en de perfil
const Mostar_imagen = (event) => {
 console.log("hola");
    const img_cambio = document.querySelector('#img_p');//selecion del contenedor por id
    const file = event.target.files[0]; //variable que captura la ruta del archivo a cambiar
    const leer_img = new FileReader();//variable que lee el archivo en la ruta
    
    leer_img.onload = function () {//funcion que carga la ruta del archivo

        img_cambio.src = leer_img.result;
        
        console.log("Nombre del archivo:", file.name);
        localStorage.setItem('rutaimagen', leer_img.result );
       
    };
    if (file) {
        leer_img.readAsDataURL(file);//asigna la nueva imagen
        
    }

   

}
  // Cargar la imagen guardada al cargar la página
window.addEventListener('load', ()=>{
    const rutaguardada = localStorage.getItem('rutaimagen');
    if (rutaguardada) {
        document.querySelector('#img_p').src = rutaguardada;
        
    }
});

   // Guardar la imagen antes de actualizar o cerrar la página
window.addEventListener('beforeunload', ()=>{
    const ruta_imagen = document.querySelector('#img_p').src; 
    localStorage.setItem('rutaimagen', ruta_imagen);
});




function llamar() {

    document.querySelector("#miinput").click();
        
}