
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
