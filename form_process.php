<?php
//linking the configuration file
require 'config.php';
if(isset($_POST["submitbtn"])){

    $usname = $_POST["name"];
    $Email = $_POST["email"];
    $MESSAGE = $_POST["message"];
    

    $sql="INSERT INTO myTable(U_NAME,Email,U_MESSAGE)VALUES('$usname','$Email','$MESSAGE')";
    if($con->query($sql)){
        echo "Insert successfully";
    }
    else{
        echo "Error:". $con->error;
    }
}
$con->close();
?>