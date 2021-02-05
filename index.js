const express = require('express');
const app = express();
const {gw} = require('./input.js')
const querystring = require('querystring');
const url = require('url');
const rp = require('request-promise');
let median, mean, mode;
let weatherdata = {};
var target;
let weather = gw(833);
const getmedian = ray => {
	let middle = Math.floor(size = ray.length/2);
	let sorted = ray.sort();
	return (size != middle) ? ray[middle] : (ray[middle]+ray[middle-1])/2;
}
const getmean = ray => {
	let totes=0;
	for (const r of ray) totes+=r;
	return totes/ray.length;
}
/* 
Since the temperatures almost always differ, 
this getmode will tend to return the last item in the array.
I could have it return zero, or the first item.
Depends on what you want done by default
*/
const getmode = ray => 
  	Object.values(
		ray.reduce((count, e) => {
	    	(!(e in count)) ? count[e] = [0, e] : 0;
		    count[e][0]++;
		    return count;
    }, {})
).reduce((ray, v) => v[0] < ray[0] ? ray : v, [0, null])[1];

const process = (weather) => {
	median = getmedian(weather);
	mean = getmean(weather);
	mode = getmode(weather);
}
var cityweather = function(target) {
	return new Promise(function(resolve, reject) {
		weather = gw(833);
	})
}
console.log(app.query);
app.set('view engine', 'ejs');
app.get('/', function(req, res){
	rp("http://api.openweathermap.org/data/2.5/forecast?id=" + req.query.city + "&cnt=3&appid=98e80921c229ff15439ec677b6763e6a&units=imperial").then(
		body => {
			weather = [];
	    	JSON.parse(body).list.forEach(
	    		function(item, index) {
	    			weather.push(item.main.temp)
	    	});
		process(weather);
		weatherdata = (median) ? {
			median: median,
			mean: mean, 
			mode: mode
		} : {};
		console.log(req.query.test);
		res.send("var weather = " + JSON.stringify(weatherdata))
	});
})
console.log(process);
var port = 8080;


var server = app.listen(port, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("SCP Demo listening at http://%s:%s", host, port)
})