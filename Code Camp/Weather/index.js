$(document).ready(function(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
             
            //coordinates
            var lon = position.coords.longitude;
            var lat = position.coords.latitude; 
            //api from open weather with api key, concatinated with lat/lon variables
            var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=2c932966f6214d928f480ab04a2e75b2";

            $.getJSON(api, function(data){
                //weather variables
                var county = data.name;
                var weather = data.weather[0].description;
                //farenheit temp starts true.
                var tChange = true;
                var kTemp = data.main.temp;
                var fTemp = kTemp * (9/5) - 459.67;
                var cTemp = kTemp - 273.15;

                ////////////////////////background change dependent on weather///////////////////////////
                if (fTemp > 80){
                    $("body").css("background-image", "url(https://images.unsplash.com/reserve/unsplash_529f1a3f2f5ed_1.JPG?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=)");
                } else if (fTemp > 70){
                    $("body").css("background-image", "url(https://images.unsplash.com/photo-1416230789844-1998de481fdc?dpr=1&auto=format&fit=crop&w=1500&h=937&q=80&cs=tinysrgb&crop=)");
                } else if (fTemp > 50){
                    $("body").css("background-image", "url(https://images.unsplash.com/photo-1476243773506-2685b801fc9d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)");
                } else if (fTemp > 40){
                    $("body").css("background-image", "url(https://images.unsplash.com/photo-1433863448220-78aaa064ff47?dpr=1&auto=format&fit=crop&w=1500&h=844&q=80&cs=tinysrgb&crop=)");
                } else {
                    $("body").css("background-image", "url(https://images.unsplash.com/reserve/unsplash_52cee6d9df810_1.JPG?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)");
                }////////////////////////////////////////////////////////////////////////////////////////

                //HTML changes
                $(".county").html(county);
                $(".weather").html(weather);
                $(".temp").html(fTemp.toFixed() + "° F");
                
                ////Farenheit to Celcius & Vica Versa//
                $(".changeTemp").click(function(){
                    if(tChange === true){
                        $(".temp").html(cTemp.toFixed() + "° C");
                        tChange = false;
                    }else{
                        $(".temp").html(fTemp.toFixed() + "° F");
                        tChange = true;
                    }
                })//////////////////////////////////
                
            })//getJSON
        })//getCurrentPosition
    }//geoLocation
})