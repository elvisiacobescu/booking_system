window.onload = function() {
//pune style shetul in head
  var head = document.head
  , link = document.createElement('link')

link.type = 'text/css'
link.rel = 'stylesheet'
link.href = 'style.css'
var pre;
head.appendChild(link)

// celformat'
document.getElementById('bookingsystem').innerHTML += "<form id='bookingform' action='index.html' method='post'></form>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 43px 10px 5px;'>Name:</span><input class='celformat' name='name' type='text' value=''/></br>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 51px  10px 5px;'>Date:</span><input class='celformat' type='date' data-date-inline-picker='true' /></br>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 52px  10px 5px;'>Start:</span><input class='celformat'  id='start' type='text' placeholder='-- enter a city -- '></input></br>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 10px 10px 5px;'>Destination:</span><input class='celformat' id='stop' type='text' placeholder='-- enter a city -- '></input></br>";
document.getElementById('bookingform').innerHTML += "<span style='margin: 10px 29px 10px 5px;'>Car type:</span><select  class='celformat' id='car'></select></br>";
document.getElementById('car').innerHTML += " <option disabled selected value> -- select a car -- </option>";
document.getElementById('car').innerHTML += "<option value='vip'>Vip</option>";
document.getElementById('car').innerHTML += "<option value='salon'>Salon</option>";
document.getElementById('car').innerHTML += "<option value='8-seater'>8-seater</option>";
document.getElementById('bookingsystem').innerHTML += "<p id='showproce'>Price :<span id='price'>0</span>$</P></br>";
document.getElementById('bookingsystem').innerHTML += "<div id='buton1' class='buton1'>BOOCK</div>";
document.getElementById('bookingsystem').innerHTML += "<div id='buton2' class='buton2'>BOOCKINGS</div>";
document.getElementById('bookingsystem').innerHTML += "<div  class='clear'></div>";
document.getElementById('bookingsystem').innerHTML += "<div id='map' class=''></div>";
document.getElementById('bookingsystem').innerHTML += "<p id='show-error'></P></br>";



//aici se termina formul
//---incep functiile---------------------------------------------------------
//aici se trimite apeleaza o functie la un interval de o secunda
var start='';
var stop='';
var car='';
var name='';
var date='';
var pret='';
var price='5';
//e un timer care cheama o functie o data la o secunda
var auto_refresh = setInterval(function() { asckprice(); }, 500);//testata si functioneaza
//functia asta trebuie sa faca afisare automata a pretului

    function asckprice(){
      oForm = document.forms[0];
      var start1=oForm.elements[2].value;
      var stop1=oForm.elements[3].value;
      var car1=oForm.elements[4].value;
    if(start != start1 || stop != stop1 || car != car1  &&(car1!='' && stop1!='' && start!='') ){
      start=start1;
      stop=stop1;
      car=car1;

      var service = new google.maps.DistanceMatrixService();

      service.getDistanceMatrix(
        {
      origins: [start],
      destinations: [stop],
      travelMode: google.maps.TravelMode.DRIVING,
      transitOptions: google.maps.TransitMode.CAR,
      drivingOptions: {
                        departureTime: new Date(Date.now() + 12),  // for the time N milliseconds from now.
                        trafficModel: "optimistic"
                      },
      // unitSystem: UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
        }, callback);

        function callback(response, status) {
          if (status == google.maps.DistanceMatrixStatus.OK) {
            var origins = response.originAddresses;
            var destinations = response.destinationAddresses;
            for (var i = 0; i < origins.length; i++) {
              var results = response.rows[i].elements;
              for (var j = 0; j < results.length; j++) {
                var element = results[j];
                var distance = element.distance.value;
                var duration = element.duration.value;
                var from = origins[i];
                var to = destinations[j];
                 if(car=='vip'){
                   document.getElementById('price').innerHTML=Math.round(distance*2/1000);}
                   else if(car=='salon'){
                      document.getElementById('price').innerHTML=Math.round(distance*1.5/1000);}
                      else if(car=='8-seater'){
                         document.getElementById('price').innerHTML=Math.round(distance*1/1000); }
              }
            }
          }
        }
    }
  }
//  functionalitate butonului de booking
  document.getElementById('buton1').addEventListener("click",function(){
      oForm = document.forms[0];
      name=oForm.elements[0].value;
      date=oForm.elements[1].value;
      pret=document.getElementById("price").innerHTML;
      document.getElementById('show-error').innerHTML =pret;
      //ifurile intreaba daca sunt completate campurile
       if(name == ''){
            document.getElementById('show-error').innerHTML ="please enter your name";
            }
            else if(date == ''){
              document.getElementById('show-error').innerHTML ="please enter a date";
            }  else if(start == ''){
                document.getElementById('show-error').innerHTML ="please choose a starting loction";
              }  else if(stop == ''){
                  document.getElementById('show-error').innerHTML ="please choose a destination";
                }  else if(car == ''){
                    document.getElementById('show-error').innerHTML ="please choose a car";
                  }else{
                      var register={
                        "name" : name,
                        "date" : date,
                        "start" : start,
                        "stop" : stop,
                        "car" : car,
                        "price" : pret
                      }
                  var jsonstring=JSON.stringify(register);
                  console.log(jsonstring);
                //  document.getElementById('show-error').innerHTML =jsonstring;
                  var hr=new XMLHttpRequest();
                  var url="php/register.php?obj="+jsonstring;
                  hr.open("GET",url,true);
                  hr.send();
                  hr.onreadystatechange = function()
                  {
                      if(hr.readyState == 4 && hr.status == 200)
                      {
                        //face primirea de date de la server
                        var rezultat = hr.responseText;
                        document.getElementById('show-error').innerHTML =rezultat;
                        //se reseteaza formul
                        oForm.reset();
                      }
                    }
                }
  })
  //functionalitatea butonulu deafisare a ezervariolor


    document.getElementById('buton2').addEventListener("click",function(){
      var hr=new XMLHttpRequest();
      var url="php/all.php";
      hr.open("GET",url,true);
      hr.send();
      hr.onreadystatechange = function(){
        var jsontext=hr.responseText;
        var obj = JSON.parse(jsontext);
      //asta e functia care numara cate obecte avem.s
        var count= Object.keys(obj).length;
      //  var count=Object.keys(obj).length;
        document.getElementById('show-error').innerHTML ="" ;
      for (var i=0;i<count;i++){
        document.getElementById('show-error').innerHTML +="<div class ='name floter'>"+obj[i].name+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='start floter'>"+obj[i].start+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='stop floter'>"+obj[i].stop+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='date floter'>"+obj[i].date+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='car  floter'>"+obj[i].car+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class ='price floter'>"+obj[i].price+"</div>" ;
        document.getElementById('show-error').innerHTML +="<div class='clear'></div>" ;
      }
    }
    })
// function myFunction(){
//     var js = document.createElement("script");
//
//     js.type = "text/javascript";
//     js.src = "js/les.js";
//     head.appendChild(js);
//   }
//   var myvar =  setTimeout(myFunction, 3000);


//deaici in jos se face un autocomplit

  var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(47.799478, 21.601229),
  new google.maps.LatLng(43.485073, 29.690932));

var input = document.getElementById('start');
var options = {
  bounds: defaultBounds,
  types: ['establishment']
};

autocomplete = new google.maps.places.Autocomplete(input, options);

    var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(47.799478, 21.601229),
  new google.maps.LatLng(43.485073, 29.690932));

var input = document.getElementById('stop');
var options = {
  bounds: defaultBounds,
  types: ['establishment']
};

autocomplete = new google.maps.places.Autocomplete(input, options);





}
