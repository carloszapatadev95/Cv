
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


</head>
<body>
    
<?php
echo "<h1>esto es php conectando a la base de datos</h1>";
$conectar = mysqli_connect("localhost", "carlos", "carlos09#", "formulario de registro web page");

if (!$conectar) {
    echo "no se puede conectar a l base de datos";
}else {
 echo "conectado a la base de datos";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['Email'];
$telefono = $_POST['telefono'];
$direccion1 = $_POST['direccion'];
$direccion2 = $_POST['casa'];
$estado = $_POST['estado'];
$ciudad = $_POST['ciudad'];
$codigo_postal =$_POST['postal'];
$terminos = $_POST['terminos'];

 $sql = "INSERT INTO registro (  nombre, apellido, correo, telefono, direccion_uno, direccion_dos, estado, ciudad, codigo_postal, terminos)  VALUES('$nombre','$apellido', '$correo', '$telefono', '$direccion1', '$direccion2', '$estado', '$ciudad', '$codigo_postal', '$terminos'   )";

  $ejecutar = mysqli_query($conectar, $sql);
  if (!$ejecutar){
    echo "no se guardaron los datos";

  }else{
    echo ""?"<br>":"<br>";
    echo "datos guardados";
   // window.location.reload(true); // Recarga desde el servidor
   
    
    header("Location: http://192.168.0.105/cv/ ");
    header("Location: http://localhost/cv/ ");
exit;

  
    
  }

}

?>
</body>
</html>

