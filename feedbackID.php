<?php
    require 'config.php';
    if(isset($_POST["btnsubmit"])){
        $email = $_POST["useremail"];
        $voterID = $_POST["voterid"];

        $email = stripcslashes($email);
        $voterID = stripcslashes($voterID);

        $email = mysqli_real_escape_string($con,$email);
        $voterID = mysqli_real_escape_string($con,$voterID);

        $result = mysqli_query($con, "select * from voterregister where EMAIL = '$email' and VOTER_ID = '$voterID'")
                    or die ("Fail to give feedback.!! ".mysqli_error($con));
        $row = mysqli_fetch_array($result);
        if($row['EMAIL'] == $email && $row['VOTER_ID'] == $voterID){
            echo "Feedback send!!." .$row['EMAIL'];
            $USEREMAIL = $_POST["useremail"];
            $VOTERID = $_POST["voterid"];
            $SELECT = $_POST["select"];
            $FEEDBACK = $_POST["feedback"];

            $sql="INSERT INTO myTable1(USER_EMAIL,VOTER__ID,CONT_NO,FEED_BACK)VALUES('$USEREMAIL','$VOTERID','$SELECT','$FEEDBACK')";
            if($con->query($sql)){
                echo "<br> Insert successfully";
            }
            else{
                echo "Error:". $con->error;
            }
        
            $con->close();
        }
        else{
            echo "Failed to send email or ID is incorrect";
        }
    }
?>