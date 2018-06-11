<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   <?php 
     $str = "hello i am geno";
     $arr = array("hello", "i", "am", "booster");
     $sentence = explode(' ', $str);
     print "Mario!" . $sentence;
     print "<br />";
     print "imploding " . implode(" ",$arr)
   ?>
</body>
</html>