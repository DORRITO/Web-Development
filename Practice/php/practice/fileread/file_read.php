<?php
    $fileHandler = fopen('read_file.txt', "w") or die("couldn't open file");
    fwrite($fileHandler, "reading this file!");
    fclose($fileHandler);

    $file = "read_file.txt";
    $fileRead = fopen($file, "r");
    $contents = fread($fileRead, filesize($file));
    fclose($fileRead);

    print "file is: " . $file . "<br />";
    print "file size: " . filesize($file) . "<br />";
    print "contents: " . $contents;
?>