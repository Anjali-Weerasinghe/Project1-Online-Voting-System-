<?php
//linking the configuration file
require 'config.php';
if(isset($_POST["btnsubmit"])){

    $USEREMAIL = $_POST["useremail"];
    $VOTERID = $_POST["voterid"];
    $SELECT = $_POST["select"];
    $FEEDBACK = $_POST["feedback"];

    $sql="INSERT INTO myTable1(USER_EMAIL,VOTER__ID,CONT_NO,FEED_BACK)VALUES('$USEREMAIL','$VOTERID','$SELECT','$FEEDBACK')";
    if($con->query($sql)){
        echo "Insert successfully";
    }
    else{
        echo "Error:". $con->error;
    }
}
$con->close();
?>