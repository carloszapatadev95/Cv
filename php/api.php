
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

    if(!$conexion){
        die("no conectado".mysqli_connect_error());
    }else {
        //$user_correo = $_GET['usuarioABuscar'];
        $nombre_busqueda = $_GET['correo'];
          //variable para consultar datos en la tabla que contiene los datos      
        //$consulta_datos_bd = "SELECT * FROM registro WHERE correo =  $user_correo";
       // $consulta_datos_bd = "SELECT * FROM registro WHERE correo = '$user_correo'";
        $consulta_datos_bd = "SELECT * FROM registro WHERE correo LIKE '%$nombre_busqueda%'";
        // metodo para hacer consultas en los  elementos de la tabla de la base de datos
        $sql_consulta = mysqli_query($conexion, $consulta_datos_bd);
     
        if(mysqli_num_rows($sql_consulta)>0){
            $elementos = $sql_consulta->fetch_object();
            echo json_encode($elementos); 
        }else{
            echo json_encode(["error"=> "usuario no encontrado"]);

    } 
   
    
   
    }
    mysqli_close( $conexion );
?>


