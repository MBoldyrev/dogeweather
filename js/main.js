$(document).ready(function() {
	getLocation(); 
});

function getWeather(link) {
	$.getJSON(link, function(data){

		//set weather id & icon 
		var id = data.weather[0].id;
		var icon = data.weather[0].icon;

		$('#weather-id').text(id);
		$('#weather-icon').text(icon);

		var doge_img = "url(./img/doge/" + icon + ".png)";
		$('.doge-image').css('background-image', doge_img);

		var sky_img = "url(./img/sky-img/" + icon + ".png)";
		$('.bg').css('background-image', sky_img);


		//get weather description
		var tempCelcius = data.main.temp - 273.15;
		var tempFahrenheit = tempCelcius * 9 / 5 + 32;
		var description = data.weather[0].description;

		$('#weather-desc').text("wow " + description);
		$('#location').text(data.name);

		$('#degreesCelsius .number').text(Math.round(tempCelcius));
		$('#degreesCelsius .cel').text("°C ");
		$('#degreesFahrenheit').text(Math.round(tempFahrenheit) + "°F");

		$(".suchlikes").show();
		$(".ourinfo").show();

		// much initialise such doge
		$($.doge);
	});
}

$("#browser_geo" ).one('click', function(){
   	getLocation();
});
	   
function getLocation() {
      		getWeather("http://api.openweathermap.org/data/2.5/weather?q=Sviyazhsk,ru&appid=13866aba2470736250be0ec3bb389ae7");
}

function showPosition(position) {
	var url = 'http://api.openweathermap.org/data/2.5/weather';
    url += '?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&callback=?';

    getWeather(url);
    $("#browser_geo").text("wow, located!").css("cursor", "auto").css("color", "#FF5CFF");
}
