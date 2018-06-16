<?php
    $err =$_FILES['uploadedFile']['error']; 
    if($err<=0){
        $file = $_FILES['uploadedFile']['name'];
        $temp = $_FILES['uploadedFile']['tmp_name'];

        move_uploaded_file($temp, "upfolder/" . $file);

        print "file uploaded to: uploads/" . $file;
        print "<br />";
        print "file type " . $_FILES['uploadedFile']['type'];
    } else { 
        print $err;
    }
?>