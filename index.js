

const consola = "hola consola "
console.log(consola);

//const formulario = document.querySelector("#formulario");

//formulario.addEventListener("submit", datos_formulario);

function datos_formulario(e) {
    //e.preventDefault();
   
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
    console.log(" si se esta leyendo esto estamos bien ok");
   
    window.location.href = 'index.js';
}
//const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
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
  // Cargar la imagen guardada al recargar la página
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


//probando fetch
//solicitando los datos a la base de datos

// const ppp = () => {
      
//       //const url = 'http://localhost/Api_php/api.php';
//       const url = 'http://localhost/cv/php/api.php';
//       console.log('hola soy fetch conetando a la api php', url);
   
//     fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log('hola soy el metodo fetch respondiendo la solicitud de datos');
//     localStorage.setItem("dato", data.nombre);
//     let dato_nombreguardado = localStorage.getItem("dato");
//     console.log('dato del lado del servidor:::',data, "  /dato del lado del cliente ->", dato_nombreguardado);
//     document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado;
   
    
  
//   })
//   .catch(error => console.error('Error al cargar datos desde PHP:', error));
// }
//   ppp();
    // Cargar el dato guardado al recargar la página

//    // Guardar la imagen antes de actualizar o cerrar la página
//    window.addEventListener('beforeunload', ()=>{
//     const ruta_imagen = document.querySelector('#recuperar_nombre').innerHTML; 
//     localStorage.setItem('dato1', ruta_imagen);
// });




// ejemplo de busqueda de usuario 

const peticion = () => {
    const usuarioABuscar = document.querySelector("#buscar_usuario").value;
   const usuarioABuscar1 = document.querySelector("#Email").value;
    
   
    if(usuarioABuscar){
        console.log("desde mi buscador", usuarioABuscar);
        fetch(`http://localhost/cv/php/api.php?correo=${usuarioABuscar}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
            console.error("Usuario no encontrado:", data.error);
        } else {
            console.log("Datos del usuario:", data);
                localStorage.setItem("dato", data.nombre);
                let dato_nombreguardado = localStorage.getItem("dato");
                document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado;
               
        }
    }).catch((error) => {
        console.error("Error al buscar usuario:", error);
    });
} else {
    console.log( "desde el formulario", usuarioABuscar1);
    fetch(`http://localhost/cv/php/api.php`)
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
            console.error("Usuario no encontrado:", data.error);
        } else {
            console.log("Datos del usuario:", data);
                localStorage.setItem("dato", data.nombre);
                let dato_nombreguardado = localStorage.getItem("dato");
                document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado;
               
        }
    }).catch((error) => {
        console.error("Error al buscar usuario:", error);
    });

}
};
  peticion();
// window.addEventListener('load', ()=>{
    //   const datoguardado = localStorage.getItem('dato');
    //   if (datoguardado) {
    //       document.querySelector('#recuperar_nombre').innerHTML = datoguardado;
          
    //   }
    //  });