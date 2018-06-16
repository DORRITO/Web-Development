<?php
    $fileHandler = fopen("file_delete.txt", "w");
    fwrite($fileHandler, "Deleting this file");
    fclose($fileHandler);

    print "Before: ";
    include "file_delete.txt";

    unlink("file_delete.txt");
    print "<br />After: ";
    include "file_delete.txt";
?>