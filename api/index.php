<?php
//require 'config.php';
require_once '../vendor/autoload.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->get("/saludo/:name",function ($name){
    echo "Hola ".$name;
});

$app->run();