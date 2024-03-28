
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Conectando Formulario </title>
    <link rel="stylesheet" href="./scss/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.css" integrity="sha512-bR79Bg78Wmn33N5nvkEyg66hNg+xF/Q8NA8YABbj+4sBngYhv9P8eum19hdjYcY7vXk/vRkhM3v/ZndtgEXRWw==" crossorigin="anonymous" referrerpolicy="no-referrer" />


</heads>
<body>
    
<?php
echo "<h1>esto es php conectando a la base de datos</h1>";
$servidorbd = 'localhost';
$usuario = "carlos";
$password = "carlos09#";
$base_datos = 'formulario de registro web page';
$conectar = mysqli_connect($servidorbd, $usuario, $password,$base_datos);

if (!$conectar) {
    echo "<h2>no se puede conectar a la base de datos</h2>";
}else {
 echo "<h2> conectado a la base de datos </h2>";
 echo "<h5> nombre  apellido:</h5>  ". $nombre = $_POST['nombre'];
 echo   " ". $apellido = $_POST['apellido'];
 echo ""?"<br>":"<br>";
 echo  "<h5> correo:</h5>  ".  $correo = $_POST['Email'];
 echo ""?"<br>":"<br>";
 echo  "<h5> telefono: </h5> ".  $telefono = $_POST['telefono'];
 echo ""?"<br>":"<br>";
 echo "<h5> direccion 1:</h5>  ".  $direccion1 = $_POST['direccion'];
 echo ""?"<br>":"<br>";
 echo "<h5>direccion 2:</h5>   ".  $direccion2 = $_POST['casa'];
 echo ""?"<br>":"<br>";
 echo  "<h5> estado:</h5>  ".   $estado = $_POST['estado'];
 echo ""?"<br>":"<br>";
 echo  "<h5>ciudad:</h5>   ".  $ciudad = $_POST['ciudad'];
 echo ""?"<br>":"<br>";
 echo  "<h5>postal:</h5>   ".  $codigo_postal =$_POST['postal'];
 echo ""?"<br>":"<br>";
 echo  "<h5>terminos:</h5>   ".  $terminos = $_POST['terminos'];



 $sql = "INSERT INTO registro (  nombre, apellido, correo, telefono, direccion_uno, direccion_dos,  estado, ciudad,  codigo_postal,  terminos)  
         VALUES('$nombre','$apellido', '$correo','$telefono', '$direccion1', '$direccion2', '$estado', '$ciudad', '$codigo_postal',  '$terminos'   )";

  $ejecutar = mysqli_query($conectar, $sql);
  if (!$ejecutar){
    echo "no se guardaron los datos";

  }else{
    echo ""?"<br>":"<br>";
    echo "<h2>datos guardados</h2>";
    echo "<h2>".$nombre." ".$apellido."</h2>";
   //header("Content-type: aplication/json");
    
    //header("http://localhost/cv/php/api.php");
    //header("Location: http://192.168.0.105/cv/ ");
    header("Location: http://localhost/cv/ ");
    //header("Location: http://192.168.0.105/cv/ ");
     

  }
  mysqli_close($conectar);
  }
  

?>

</body>
</html>

