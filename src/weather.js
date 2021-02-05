const citifier = (state) => {
  let cd = document.getElementById("cities");
  cd.options.length = 0;
  cd.appendChild(makeoption(null, "Select a City"));
  for (const city of cities.sort()) {
    if (city.country == "US" && city.state == state.target.value && city.state != "") {
      cd.appendChild(makeoption(city.id, city.name + ", " + city.state));
    }
  }
}

const makeoption = (value, text) => {
  // to automate the creation of an option, which is done repeatedly in this script
  let option = document.createElement("option");
  option.textContent = text;
  option.value = value;
  return option;
}

const sendcity = city => {
  // city data format is object from state dropdown
  setData({mode:'', mean:'', median:''});
  const pp = new Promise((res, rej) => {
    ccc = loader(city.target.value);
    res(ccc);
  })
  document.getElementById("ident").innerHTML = city.target.options[city.target.selectedIndex].text
  // setTimeout(function() {
  pp.then(function() {
    setData({mode: weather.mode.toFixed(2), median: weather.median.toFixed(2), mean: weather.mean.toFixed(2)})
  });
  // }, 3000)
}

const setData = data => {
  // data format: {mode: [value], median: [value], mean: [value]}
  for (datum in data) {
    document.getElementById(datum).innerHTML = data[datum];
  }
}

const kaz = () => {
  resume();
}

class Forecast extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
	  return (
			<main>
        <h2>The SCP Coding Challenge<br/> of Might and Honor</h2>
        <h3>The Current Three-Day Forecast for: <city-name id="ident">Lafeyette, LA</city-name></h3>
				<h1>
					Mode: <temp-out id="mode">{weather.mode.toFixed(2)}</temp-out>
				</h1>
				<h1>
					Median: <temp-out id="median">{weather.median.toFixed(2)}</temp-out>
				</h1>
				<h1>
					Mean: <temp-out id="mean">{weather.mean.toFixed(2)}</temp-out>
				</h1>
        <p/>
        <h3>Hot enough for ya?<br/> If not, pick another city here:</h3>
        <select id="states" onChange={citifier.bind(this)}>
          <option value='0'>Select a state</option>
        </select><br/>
        <select id="cities" onChange={sendcity.bind(this)}>
          <option value='0'>Select a city</option>
        </select>
        <p>
        <button value="Happy? Click Here!" onClick={kaz}>Happy? Click Here!</button>
        </p>
			</main>
		);
	}
}

let domContainer = document.querySelector('#weather');
ReactDOM.render(<Forecast />, domContainer);

// create a list of unique state names using the spread operator and set from es6
const states = [...new Set(cities.map(city => city.state))];
let sd = document.getElementById("states")
for (const state of states.sort()) {
  if (state != "" && state != "00") {
      sd.appendChild(makeoption(state, state));
  }
}

let d = document;
const but = link => {(link == "learn") ? resume() : call()};
const call = () => {
  alert("Calling Kaz!");
  location = "tel:618-402-9397";
}
const resume = (event) => {
  let p = d.getElementsByTagName("popup")[0].style;
  p.display = (p.display == '') ? "block" : '';
}
d.getElementsByTagName("caller")[0].addEventListener("click", function(e) {call()})
d.getElementsByTagName("closer")[0].addEventListener("click", function(e) {resume(e)})
