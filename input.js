// const url="http://api.openweathermap.org/data/2.5/forecast?id=49593&cnt=3&appid=98e80921c229ff15439ec677b6763e6a&units=imperial"
const http = require('http');
let city = 833;


let getweather = (target) => {
	// Get information from Open Weather
	console.log("target");
	console.log(target);
	url = "http://api.openweathermap.org/data/2.5/forecast?id=" + target + "&cnt=3&appid=98e80921c229ff15439ec677b6763e6a&units=imperial";
	console.log(url);
	let weather = [];
	city = target;
	http.get(url, (resp) => {
		let data = '';
		resp.on('data', (chunk) => {
			data += chunk;
		});
		resp.on('end', () => {
	    	JSON.parse(data).list.forEach(
	    		function(item, index) {
	    			weather.push(item.main.temp)
	    	});
		});
	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
	console.log(weather);
	return(weather);
}
exports.gw = getweather;

/*
















// const url= (city = 8054) =>{
// 	return "http://api.openweathermap.org/data/2.5/forecast?id=${city}&cnt=3&appid=98e80921c229ff15439ec677b6763e6a&units=imperial";
// }


const http = require('http');
//let city = 8054;
// 49593


let getweather = (target = 4330145) => {
	// Get information from Open Weather
	var weather = [];
	url = "http://api.openweathermap.org/data/2.5/forecast?id=" + target + "&cnt=3&appid=98e80921c229ff15439ec677b6763e6a&units=imperial";
	http.get(url, (resp) => {
		let data = '';
		resp.on('data', (chunk) => {
			data += chunk;
		});
		resp.on('end', () => {
		// console.log(data);
	    	JSON.parse(data).list.forEach(
	    		function(item, index) {
	    			// console.log(item.main.temp);
	    			weather.push(item.main.temp)
	    	});
		});
	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
	console.log(weather);
	return(weather);
}
exports.gw = getweather;

*/