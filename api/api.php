<?php
require_once "../vendor/autoload.php";

$app = new \Slim\Slim();

$connect = array("hostname"=>"localhost",
                "username"=>"admin",
                "password"=>"",
                "bd"=>"gt");
$db = mysqli_connect($connect['hostname'], $connect['username'], $connect['password'], $connect['bd']);

$app -> get("/productos", function() use ($db,$app){
    $query = $db->query("SELECT * FROM productos;");
    $productos = array();
    while($fila = $query->fetch_assoc()){
        $productos[] = $fila;
    }
    echo '{"status":"success","message":null,"data":'.json_encode($productos).'}';
});

$app ->post("/productos", function () use ($db, $app) {
    $insert = $db->query("INSERT INTO productos VALUES (null, "
                                                        .$app->request->post("name").", "
                                                        .$app->request->post("description").", "
                                                        .$app->request->post("price").");");
    if($insert){
        echo '{"status":"success","message":"Producto creado exitosamente","data":"[]"}';
    }else{
        echo '{"status":"failed","message":"Ocurrio un error en la solicitud, vuelve a intentar...","data":"[]"}';
    }
});

$app -> run();
