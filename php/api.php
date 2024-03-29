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

  // echo json_encode("conectado");
   // $user_correo = $_GET['correo'];
    //$consulta_usuario_guardado = "SELECT * FROM registro WHERE telefono LIKE '%$user_correo%'";
    //variable para consultar datos en la tabla que contiene los datos      
   //$consulta_usuario_guardado = "SELECT * FROM registro";
    $consulta_usuario_guardado = "SELECT * FROM registro ORDER BY ID DESC LIMIT 1";
    //$consulta_usuario_guardado = "SELECT CURRENT_USER ();";
    //$consulta_usuario_guardado = "SELECT * FROM registro WHERE telefono LIKE '%$user_correo%'";
   //     // metodo para hacer consultas en los  elementos de la tabla de la base de datos
   
   if  (mysqli_multi_query($conexion, $consulta_usuario_guardado)){

      
if ($res = mysqli_store_result($conexion)) {
      $res1 = mysqli_fetch_assoc($res);  
      echo json_encode($res1);
      mysqli_free_result($res);
 


}

while (mysqli_next_result($conexion)&& mysqli_more_results($conexion));
}
}


mysqli_close($conexion);
?>


<?php
// if (!$conexion) {
//    die("no conectado" . mysqli_connect_error());
// } else {
//    $user_correo = $_GET['correo'];
//    $consulta_usuario_guardado = "SELECT * FROM registro WHERE telefono LIKE '%$user_correo%'";
//    $consulta_usuario_guardado_dos = mysqli_query($conexion, $consulta_usuario_guardado);
//    if (mysqli_num_rows($consulta_usuario_guardado_dos) > 0) {
//       $res = $consulta_usuario_guardado_dos->fetch_assoc();
//       echo json_encode($res);
//    } else {
//       echo json_encode(['usuario no encontrado']);
//    }
// }
// mysqli_close($conexion);
//  ?>