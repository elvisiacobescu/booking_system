<?php

$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking_system";
//conect to the data baze
$conn = new mysqli($servername, $username, $password,$dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//else echo "Connected successfully";
$json = json_decode($obj, true);// decode the JSON into an associative array
//echo '<pre>' . print_r($json, true) . '</pre>';
// echo 'what ever '.$obj;
$start=$json['start'];
$stop=$json['stop'];
$car=$json['car'];

$query = sprintf("SELECT price FROM qoutes
    WHERE start=". "'".$start."'"." AND stop='".$stop."' AND car='".$car."' ");
$rezult=$conn-> query($query);
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
    echo  $row["price"];
}
} else {
echo "0 results";
}

?>
