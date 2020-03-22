<?php

$enroll = $_GET['enroll'];


if (!empty($enroll)){ 
include 'config.php';

  $sql=" delete the details where enroll=$enroll";
  if($conn->query($sql)){
    header("location:details.php");
  }
  else
  {
    echo "data deletion failed";
  }
}
 else {
 echo "enroll didn't reach";
}
