<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pruebas</title>
    <link rel="stylesheet" href="./scss/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.css" integrity="sha512-bR79Bg78Wmn33N5nvkEyg66hNg+xF/Q8NA8YABbj+4sBngYhv9P8eum19hdjYcY7vXk/vRkhM3v/ZndtgEXRWw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
    <?php
    echo "<h1>esto es un archivo php en el servidor para conectar con la base de datos</h1>";
    $servidorbd = 'localhost';
    $usuario = "carlos";
    $password = "carlos09#";
    $base_datos = 'formulario de registro web page';
    $conectar = mysqli_connect($servidorbd, $usuario, $password,$base_datos);
    
    if (!$conectar) {
        echo "<h2>no se puede conectar a la base de datos</h2>";
    }else{
        echo '<h2>conectado a la basa de datos</h2>';
        // con esta variable consultamos todos los datos de la tabla de la base de datos
        $valor_buscar = $_GET[''];
        $consulta_datos = "SELECT * FROM registro";
        $user = "SELECT * FROM registro  WHERE correo = '' ";
        $consulta = mysqli_query( $conectar, $consulta_datos, );
        $consulta1 = mysqli_query( $conectar, $user,);

        if(!mysqli_query( $conectar, $consulta_datos)){
            echo 'jodete';
            die('Error en la consulta: ' . $conectar->error);
        }else{
             $filas = $consulta->num_rows;   
            echo "<h3>los elementos registrados que existen en la tabla son: ".$filas." </h3>";
            
          
         }
         if (!mysqli_query($conectar, $user)) {
            echo 'jodete';
            die('Error en la consulta: ' . $conectar->error);
        } else {
            if (mysqli_num_rows($consulta1)>0) {
                echo json_encode("El correo existe " );
            } else {
                echo  "<h4>El correo no existe </h4>";
            } 
        }
    
    }
    mysqli_close($conectar);   
    ?> 
    <table class="table table-hover ">
        <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nombre</th>
              <th scope="col">apellido</th>
              <th scope="col">correo</th>
              <th scope="col">telefono</th>
            </tr>
          
        </thead>
        <tbody>
        <?php
          for ($i=0; $i <=$filas ; $i++) { 
            $fila = $consulta->fetch_object();
           echo "<tr>";
           echo "<td>".@$fila->id."</td>";   
           echo "<td>".@$fila->nombre."</td>";   
           echo "<td>".@$fila->apellido."</td>";   
           echo "<td>".@$fila->correo."</td>";    
           echo "<td>".@$fila->telefono."</td>";    
           echo "</tr>";
           }  
           mysqli_free_result($consulta);     
         ?>


     </tbody>   
    </table>   
    <?php
      $nombre = $valor_buscar;
        $edad = 30;//$consulta1->fetch_object();
        mysqli_free_result($consulta1);
     ?>

<script>
    var datos = <?php echo json_encode(["nombre" => $nombre, "edad" => $edad]); ?>;
    
    console.log(datos.nombre); // Accede al nombre
    console.log(datos.edad); // Accede a la edad
</script>
</body>
</html>