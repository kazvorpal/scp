const url="http://api.openweathermap.org/data/2.5/forecast?id=4330145&cnt=3&appid=98e80921c229ff15439ec677b6763e6a&units=imperial"
const http = require('http');
let getweather = () => {
	let weather = [];
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
	return(weather);
}
exports.gw = getweather;

