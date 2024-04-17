
  
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
 console.log("se cargo nueva imagen");
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
//funcion llamar para cambiar la imagen
function llamar() {
    document.querySelector("#miinput").click(); 
}


//variable que captura los datos del formulario atraves del id del elemento form
const formulario = document.querySelector("#formulario");
//escucha un evento sumit atraves de la funcion datos formulario.
formulario.addEventListener("submit", ValidarFormulario);
//funcion para capturar los datos del lado cliente
//y validar si un campo esta vacio
 function  ValidarFormulario(e) {
    // variable con la que se optinen todos los datos del formulario
    const elementos =  formulario.elements;
    //esta variable se recorre todos los datos del formulario,y se capturan;
    const Datos = [...elementos].map(campos =>campos);
    //imprimimos en consola del navebador todos los datos capturados
    for (let i = 0; i <= Datos.length; i++) {
        const element =  Datos[i];
        if (element.value.trim()  === '') {
            console.log(`El campo ${i + 1} (${element.name.toUpperCase()}) no puede ir vacío.`);
            alert(`El campo ${element.name.toUpperCase()} no puede ir vacío.`);
           e.preventDefault();
           return;
       }
       
    }
    window.location.reload(true); // Recarga 
    
    
};

// utilizando los metodos aysign/await que se deja como predeterminado 
//porque es menos verboso y lo entiendo mas;
//funcion que se llama desde el html atraves del boton sign up;
  const Buscar_user_Mtodo_asyn = async() => {
    //
    try {
        //optenes valor a buscar
        const usuarioABuscar = document.querySelector("#user_email").value;
        //solicitamos por medio de la api el datos a buscar
        const respuesta = await fetch(`http://localhost/cv/php/api.php?correo=${usuarioABuscar}`,
         
    );
        //optenemos la respuesta del servidor u base de datos;
        const datos = await respuesta.json();
        //se verifica si existe usuario y se maneja como error
         if(datos.error ){
            console.error('usuario no encontrado realizar registro', datos.error);
            alert("usuario no encontrado realizar registro:", datos.error);
            //window.location.reload();
            throw new Error('usuario no encontrado');
        
         }else{
            //si el usuario existe procesamo los datos
           console.log("Datos del usuario desde el servidor:", datos);
           localStorage.setItem("dato1", datos.nombre);
           localStorage.setItem("dato_nombre", datos.nombre);
           localStorage.setItem("dato_correo", datos.correo);
           localStorage.setItem("dato_direccion", datos.direccion_uno);
           localStorage.setItem("dato_telefono", datos.telefono);
           let dato_nombreguardado_user = localStorage.getItem("dato_nombre");
           let dato_nombreguardado_user_direccion = localStorage.getItem("dato_direccion");
           let dato_nombreguardado_user_telefono = localStorage.getItem("dato_telefono",);
           let dato_nombreguardado_user_correo = localStorage.getItem("dato_correo"); 
           let dato_nombreguardado = localStorage.getItem("dato1");
           document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado; 
           document.querySelector("#nombre_user").innerHTML = dato_nombreguardado_user;               
           document.querySelector("#direccion_user").innerHTML = dato_nombreguardado_user_direccion;               
           document.querySelector("#telefono_user").innerHTML = dato_nombreguardado_user_telefono;               
           document.querySelector("#correo_user").innerHTML = dato_nombreguardado_user_correo;  
           document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado_user;  
          
         }
            
  
         //window.location.reload(true); // Recarga desde el servidor
       
    } catch (error) {
        console.error("Error al buscar usuario:", error.message);
    }
};
// Escucha el evento submit para buscar el usuario

window.addEventListener('load', ()=>{
      const datoguardado = localStorage.getItem('dato1');
      if (datoguardado) {
          document.querySelector('#user_email').innerHTML = datoguardado;
          
      }
     });

//esta es otra forma de buscar usuario funciona me gusta mas el aysig/await
    // const Buscar_user = () => {
    //    const usuarioABuscar = document.querySelector("#buscar_usuario").value;
    //      if(usuarioABuscar){
    //           console.log("desde mi buscador", usuarioABuscar);
    //           fetch(`http://localhost/cv/php/api.php?correo=${usuarioABuscar}`)
    //       .then((response) => response.json())
    //       .then((data) => {
    //           if (!data) {
    //               console.error("Usuario no encontrado:", data);
    //               alert("Usuario no encontrado:", data);
    //               window.location.reload();
    //               return;
    //           } else {
    //               console.log("Datos del usuario desde el servidor:", data);
    //                   localStorage.setItem("dato1", data.nombre);
    //                   let dato_nombreguardado = localStorage.getItem("dato1");
    //                   document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado;
                     
    //           }
    //       }).catch((error) => {
    //           console.error("Error al buscar usuario:", error);
    //       });
    //     }
    // };
// ejemplo de busqueda de usuario 
 (peticion = () => {
    console.log( "opteniendo dato desde la base de datos atraves de la api");
    fetch(`http://localhost/cv/php/api.php`)
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
            console.error("Usuario no encontrado:", data.error);
        } else {
            console.log("Datos del usuario desde la api :", data);
            localStorage.setItem("dato_nombre", data.nombre);
            localStorage.setItem("dato_correo", data.correo);
            localStorage.setItem("dato_direccion", data.direccion_uno);
            localStorage.setItem("dato_telefono", data.telefono);
            let dato_nombreguardado_user = localStorage.getItem("dato_nombre");
            let dato_nombreguardado_user_direccion = localStorage.getItem("dato_direccion");
            let dato_nombreguardado_user_telefono = localStorage.getItem("dato_telefono",);
            let dato_nombreguardado_user_correo = localStorage.getItem("dato_correo");
            document.querySelector("#nombre_user").innerHTML = dato_nombreguardado_user;               
            document.querySelector("#direccion_user").innerHTML = dato_nombreguardado_user_direccion;               
            document.querySelector("#telefono_user").innerHTML = dato_nombreguardado_user_telefono;               
            document.querySelector("#correo_user").innerHTML = dato_nombreguardado_user_correo;  
            document.querySelector("#recuperar_nombre").innerHTML = dato_nombreguardado_user;              
        }
        
    }).catch((error) => {
        console.error("Error al buscar usuario:", error);
    });

})();


// // window.addEventListener('load', ()=>{
//     //   const datoguardado = localStorage.getItem('dato');
//     //   if (datoguardado) {
//     //       document.querySelector('#recuperar_nombre').innerHTML = datoguardado;
          
//     //   }
//     //  });

//ESTA ES OTRA MANERA
// function validarFormulario(e) {
//     const formulario = document.querySelector("#formulario");
//     const elementos = formulario.elements;

//     for (let i = 0; i < elementos.length; i++) {
//         const campo = elementos[i];
//         if (campo.value.trim() === '') {
//             console.log(`El campo ${i + 1} (${campo.name.toUpperCase()}) no puede ir vacío.`);
//             alert(`El campo ${campo.name.toUpperCase()} no puede ir vacío.`);
//             e.preventDefault();
//             return;
//         }
//     }

//     window.location.reload(true); // Recarga la página
// }

// Escucha el evento submit a través de la función validarFormulario
//formulario.addEventListener("submit", validarFormulario);