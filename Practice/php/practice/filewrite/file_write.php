<?php
    $fileHandler = fopen("write_append.txt", "w") or die("cant create that");
    fwrite($fileHandler, "Sentence 1! <br />");
    fwrite($fileHandler, "sentence 2");
    fclose($fileHandler);

    include("write_append.txt");
?>