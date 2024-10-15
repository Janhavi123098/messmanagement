<?php
$con = mysqli_connect("127.0.0.1", "root", "", "craftogram");

if(mysqli_connect_error()) 
{
    echo"<script>alert('cannot connect to database')</script>";
    exit();
}

?>  