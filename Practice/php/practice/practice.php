<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    This is working!
    <?php print "Hello again, <em>world</em>!"; ?>
    <?php $hi = 'hi'; echo $hi; ?>
    <?php $arr = array("ok", "good", "then");
        print $arr[0] . ' ' . $arr[2];
    ?>
    <br />
    <?php
        $arr2 = array(
            "one" => 1,
            "two" => 2,
            "three" => 3
        );
        print $arr2["one"] . ' ' . $arr2["two"];
    ?>
</body>
</html>
//