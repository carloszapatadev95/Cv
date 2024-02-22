const expres = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const app = expres();
const PORT = process.env.PORT || 80;
app.use(expres.urlencoded({ extended: true }));

app.post('/formulario', (req,res)=>{
const {datos} = req.body;
console.log("hola 1", datos );
res.send('Datos recibidos correctamente');
})

app.listen(PORT, () => {
  console.log(`Servidor creado: http://localhost:80`);
});





const conexion = mysql.createConnection({
    host: "localhost",
    database: "registro_usuario",
    user: "root",
    password: ""

});


//conexion.connect(function (error) {
//    if (error) {
//        throw error;
//    } else {
//     console.log("conexion exitosa", );   
//    }
//});
//de esta forma se insertan datos a la base de datos
//const insertar = "INSERT INTO `registro` (`idusuario`, `nombre`, `apellido`, `correo`, `telefono`, `direccion1`, `direcion2`, `estado`, `ciudad`, `codigo_postal`, `aceptar terminos`) VALUES (NULL, 'david', 'colmenares', 'carlos@gmail.co', '231213', 'hjdskdjsdpsodpsalkx', 'hksjdsjshs', 'lara', 'carora', '123', 'tue'); "
//conexion.query(insertar, function (error, rows) {
//    if (error) {
//        throw error;
//    } else {
//        rows;
//        console.log("datos insertados");
//       
//    }
//  
//});
  

const consulta = "SELECT * FROM registro";
conexion.query(consulta, function (error, lista) {
    if (error) {
        throw error;
    } else {
        console.log(lista.length);
    }
})
conexion.end();