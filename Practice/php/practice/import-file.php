<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>include</title>
</head>
<body>
    <?php 
        require "test.php";
    ?>

    <?php 
        function yes(){
            print 'yes';
        }

        yes();
    ?>
</body>
</html>