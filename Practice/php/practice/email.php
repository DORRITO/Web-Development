<php 
    $to = "@yahoo.com";
    $subject = "test test";
    $msg = "short message";

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Contenet-type: text/html; charset=iso-8859-1' . "\r\n";
   
    $headers .= 'To: @yahoo.com' . "\r\n"; 
    $headers .= 'From: @yahoo.com' . "\r\n";
    $headers .= 'Reply-To: @yahoo.com' . "\r\n";

    $addParams = "-fwebmaster@anything.com";
    mail($to, $subject, $msg, $headers, $addParams);
?>
// add email to these