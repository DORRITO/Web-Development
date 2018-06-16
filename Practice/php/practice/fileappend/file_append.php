<?php
    //open and write
    $fileHandler = fopen('append_file.txt', "w") or die("couldnt open or write");
    fwrite($fileHandler, "this is the first half of the sentence. ");
    fclose($fileHandler);

    //append
    $fileAppend = fopen("append_file.txt", "a");
    fwrite($fileAppend, "...2nd half!");
    fclose($fileAppend);

    //read
    $file = "append_file.txt";
    $fileRead = fopen($file, "r");
    $contents = fread($fileRead, filesize($file));
    fclose($fileRead);

    print $contents;
?>