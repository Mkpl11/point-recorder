<?php
/**
 * User: fikriarroisi
 * Date: 20/12/16
 * Time: 18:18
 * This file content all request used by web
 */

include_once 'conx.php'; //database connection

//get database connection
function get_db_handler(){
    $conx = new Conx('localhost', 'root', 'qwe', 'gis_batu');
    $dbh = $conx->getHandler();
    return $dbh;
}

//check request
if(isset($_POST['action'])){
    switch ($_POST['action']){
        case 'retrieve':
            retrieve_marker();
            break;
        case 'save' :
            save_marker();
            break;
        case 'delete':
            delete_marker();
            break;
        default:
            return false;
    }
}

//get all saved marker
function retrieve_marker(){
    $dbh = get_db_handler();
    $query = "SELECT * FROM latlng_record";
    $st = $dbh->prepare($query);
    if(!$st->execute()){
        echo false;
    }
    $st->setFetchMode(PDO::FETCH_OBJ);
    $out_array = [];
    while ($out = $st->fetch()) {
        array_push($out_array, $out);
    }
    echo json_encode($out_array);
}

//delete marker from database
function delete_marker(){
    if(isset($_POST['latlng'])){
        $latlng = $_POST['latlng'];
        $dbh = get_db_handler();
        $query = "DELETE FROM latlng_record WHERE `latlng` = '$latlng'";
        $st = $dbh->prepare($query);
        if(!$st->execute()){
            echo false;
        }
        echo true;
    }
    echo false;
}

//save marker to database
function save_marker(){
    if(isset($_POST['latlng'])){
        $latlng = $_POST['latlng'];
        $dbh = get_db_handler();
        $query = "INSERT INTO latlng_record (latlng) VALUES ('$latlng')";
        $st = $dbh->prepare($query);
        if(!$st->execute()){
            echo false;
        }
        echo true;
    }
    echo false;
}

?>