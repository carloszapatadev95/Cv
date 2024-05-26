


<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

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

     //echo json_encode("conectado");
     //variables para consultar datos en la tabla que contiene los datos 
     
     //consulta 1  
    $user_correo = $_GET['correo'];
    $consulta_correo = "SELECT * FROM registro WHERE correo LIKE '%$user_correo%'";
    $respuesta_correo = mysqli_query($conexion, $consulta_correo);
    //$consulta_usuario_guardado ="SELECT * FROM registro";  
 
    //consulta 2
     //esta es una forma de buscar un usuario;
    //$id_user= 20;
     //$consulta_usuario_guardado_uno = "SELECT * FROM registro WHERE ID = $id_user";
     //esta es otra manera de buscar un usuario;
    //  $consulta_ultimo_registro = "SELECT * FROM registro ORDER BY ID DESC LIMIT 1";
    //  $respuesta_ultimo_registro = mysqli_query($conexion, $consulta_ultimo_registro);
   if(mysqli_num_rows($respuesta_correo)>0) {
          $datos_correo = $respuesta_correo->fetch_assoc();
          // se exportan los datos pero no en forma de array u objetos
          echo json_encode($datos_correo);
          mysqli_free_result($respuesta_correo);
  }else {
    echo json_encode(['correo no encontrado']);
    mysqli_free_result($respuesta_correo);
  }
  // else if (mysqli_num_rows($respuesta_ultimo_registro)>0) {
  //         $datos_registro = $respuesta_ultimo_registro->fetch_assoc();
  //         echo json_encode($datos_registro);
  //         mysqli_free_result($respuesta_ultimo_registro);
  //         }
             
} 
mysqli_close($conexion)
?>