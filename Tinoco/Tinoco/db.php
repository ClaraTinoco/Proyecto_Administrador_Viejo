<?php
//configuracion para acceder a la database

function conn(){
    $hostname = "localhost";
    $usuariodb = "root";
    $passwordb = "";
    $dbname = "";
    //conexion con el servidor
    $conectar = mysqli_connect($hostname, $usuariodb, $passwordb, $dbname);
    return 
}
?>