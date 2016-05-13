<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking_system";
//conect to the data baze
$centralstage=array();
$conn = new mysqli($servername, $username, $password,$dbname);
$getid=sprintf("SELECT * FROM booking");
$rezult=$conn-> query($getid);
if ($rezult->num_rows>0){
while($row = $rezult->fetch_assoc()) {
  $start=$row["start"];
  $stop=$row["stop"];
  $car=$row["car"];
  $date=$row["data"];
  $name=$row["Nume"];
  $price=$row["price"];
  //aici trebuie facut un array
  $arr = array('start' => $start ,'stop' => $stop,'car' => $car,'date' => $date,'name' => $name,'price' => $price );
  array_push($centralstage,$arr);

 }
}
echo json_encode($centralstage);


//$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

//echo json_encode($arr);
?>
