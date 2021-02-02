const express = require('express');
const app = express();
const {gw} = require('./input.js')
let median, mean, mode;
let weatherdata = {};
let weather = gw();

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

app.get('/', function(req, res){
	process(weather);
	// I once managed to try to view it before the weather data came back, ergo the test for null median
	weatherdata = (median) ? {
		median: median,
		mean: mean, 
		mode: mode
	} : "Still processing data from weather service. Hit refresh to try again...now. (if this persists, there may be a problem with the connection to Open Weather)";
	res.send(weatherdata);
})
console.log(process);


app.set('port', process.env.PORT);
var server = app.listen(app.get('port'), function() {
	var host = server.address().address
	var port = server.address().port
	console.log("SCP Demo listening at http://%s:%s", host, port)
})