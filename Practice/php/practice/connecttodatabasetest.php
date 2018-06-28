<?php

$server = 'localhost';
$username = 'drupaluser';
$password = '';
$database = 'drupal1';

//connect
$connection = mysql_connect($server, $username, $password);

//print out error if no connection
if (!$connection){
    die('<strong>unable to connect, </strong>' . mysql_error() . '</strong>');
};

//start query
mysql_select_db($database);

//query
$result = mysql_query("SELECT * FROM people");

?>