<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>switch</title>
</head>
<body>
    <?php
        $mallow = 'cloud';
        switch($mallow){
            case 'cloud':
                print "it's a cloud";
                break;
            case 'frog':
                print "not a cloud";
                break;
            default: 
                print 'default';
        }
    ?>
</body>
</html>