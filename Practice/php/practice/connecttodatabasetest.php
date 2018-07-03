<?php

function OpenCon(){
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'drupaluser';

//connect
$connection = mysqli_connect($server, $username, $password, $database) or die("connect failed");

return $connection;
}


//start query
mysql_select_db($database);

function CloseCon($connection){
    $connection -> close();
}

//query
// $result = mysql_query("SELECT * FROM hi");

// $output = '';
// while($row = mysql_fetch_array($result)){
//     foreach($row as $key => $val){
//         $output .= $key . ' = ' . $val . '<br />';
//     }
//     $output .= '<br />';
// }

// print $output;

?>