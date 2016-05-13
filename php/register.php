<?php

$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking_system";
//conect to the data baze
$conn = new mysqli($servername, $username, $password,$dbname);

//echo $obj;
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//else echo "Connected successfully";
 $json = json_decode($obj, true);// decode the JSON into an associative array
// se testeaza daca a facut bine pardarea//echo '<pre>' . print_r($json, true) . '</pre>';
// se testeaza daca a facut bine transmiterea de date// echo 'what ever '.$obj;
 $start=$json['start'];
 $stop=$json['stop'];
 $car=$json['car'];
 $date=$json['date'];
 $name=$json['name'];
 $price=$json['price'];

 //creaza automat urmatorul id
 $id=0;
 $getid=sprintf("SELECT id FROM booking");
 $rezult=$conn-> query($getid);
 if ($rezult->num_rows>0){
 while($row = $rezult->fetch_assoc()) {
   $m=$row["id"];
     if($id <= $m) {$id=$m;}
  }
 }
  $id++;
 $time = strtotime($date);
 $newformat = date('Y-m-d',$time);
  $test="2010-11-20";
$query =sprintf("INSERT INTO booking (id,Nume,data,start,stop,car,price)
VALUES (".$id.","."'".$name."'".",'".$newformat."',"."'".$start."'".","."'".$stop."'".","."'".$car."'".",".$price.")");
if ($conn->query($query) === TRUE) {
    echo "booking succesful";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}

?>
