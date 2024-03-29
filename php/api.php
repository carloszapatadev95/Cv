<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-type: aplication/json");
// variables para conectarse a la base de datos
$host = "localhost";
$usuario = "carlos";
$password = "carlos09#";
$BD = "formulario de registro web page";

// metodo para conectarse a la base de datos
$conexion = mysqli_connect($host, $usuario, $password, $BD);
// valido la conexion

if (!$conexion) {
    die("no conectado" . mysqli_connect_error());
} else {


    //variable para consultar datos en la tabla que contiene los datos      
    //$consulta_datos_bd = "SELECT * FROM registro WHERE correo =  $user_correo";
    $consulta_usuario_guardado = "SELECT * FROM registro ORDER BY id DESC LIMIT 1";
   // $consulta_datos_bd = "SELECT * FROM registro WHERE telefono LIKE '%$nombre_busqueda%'";
 
    // metodo para hacer consultas en los  elementos de la tabla de la base de datos
    $sql_consulta = mysqli_query($conexion, $consulta_usuario_guardado);
   //$consulta_usuario_guardado_dos = mysqli_query($conexion, $consulta_datos_bd);


    if (mysqli_num_rows($sql_consulta) > 0) {
        $elementos = $sql_consulta->fetch_assoc();
        echo json_encode($elementos);
     }else  {
        $nombre_busqueda = $_GET['correo'];
         $consulta_datos_bd = "SELECT * FROM registro WHERE telefono LIKE '%$nombre_busqueda%'";
        // $consulta_usuario_guardado = "SELECT * FROM registro ORDER BY id DESC LIMIT 1";
        // $sql_consulta = mysqli_query($conexion, $consulta_usuario_guardado);
         $consulta_usuario_guardado_dos = mysqli_query($conexion, $consulta_datos_bd);
         if ($consulta_usuario_guardado_dos) {
            $res = $consulta_usuario_guardado_dos->fetch_assoc();
            echo json_encode($res);
         }else{
            echo json_encode(["error" => "usuario no encontrado"]);
         }
     }
    
    
}
mysqli_close($conexion);
?>


<?php
// if (!$conexion) {
//     die("no conectado" . mysqli_connect_error());
// } else {
//     //$user_correo = $_GET['correo_uno'];
//     //$consulta_usuario_guardado = "SELECT * FROM registro WHERE telefono LIKE '%$user_correo%'";
//     $consulta_usuario_guardado = "SELECT * FROM registro ORDER BY id DESC LIMIT 1";
//     //$consulta_usuario_guardado = "SELECT MAX(id) AS ultimo_registro FROM registro";
//     $consulta_usuario_guardado_dos = mysqli_query($conexion, $consulta_usuario_guardado);
//     if (mysqli_num_rows($consulta_usuario_guardado_dos) > 0) {
//         //  $res = $consulta_usuario_guardado_dos("SELECT LAST_INSERT_ID()")->Fetch_column();
//         $res = $consulta_usuario_guardado_dos->fetch_assoc();
//         echo json_encode($res);
//     } else {
//         echo json_encode('usuario no encontrado');
//     }
// }
// mysqli_close($conexion);
?>