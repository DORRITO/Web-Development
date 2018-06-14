<?php
    setcookie("HI", "Baking some cookies", time()+60);

    print $_COOKIE['HI'] ? $_COOKIE['HI'] : 'not set yet';

    // setcookie("HI", "", time()- 60*60*24);

    $tellMe = $_COOKIE['HI'] ? "no" : "yes";
    

    print "<br/>Is the cookie gone, " . $tellMe;
?>

