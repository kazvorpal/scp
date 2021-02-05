var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var citifier = function citifier(state) {
  var cd = document.getElementById("cities");
  cd.options.length = 0;
  cd.appendChild(makeoption(null, "Select a City"));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cities.sort()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var city = _step.value;

      if (city.country == "US" && city.state == state.target.value && city.state != "") {
        cd.appendChild(makeoption(city.id, city.name + ", " + city.state));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var makeoption = function makeoption(value, text) {
  // to automate the creation of an option, which is done repeatedly in this script
  var option = document.createElement("option");
  option.textContent = text;
  option.value = value;
  return option;
};

var sendcity = function sendcity(city) {
  // city data format is object from state dropdown
  setData({ mode: '', mean: '', median: '' });
  var pp = new Promise(function (res, rej) {
    ccc = loader(city.target.value);
    res(ccc);
  });
  document.getElementById("ident").innerHTML = city.target.options[city.target.selectedIndex].text;
  // setTimeout(function() {
  pp.then(function () {
    setData({ mode: weather.mode.toFixed(2), median: weather.median.toFixed(2), mean: weather.mean.toFixed(2) });
  });
  // }, 3000)
};

var setData = function setData(data) {
  // data format: {mode: [value], median: [value], mean: [value]}
  for (datum in data) {
    document.getElementById(datum).innerHTML = data[datum];
  }
};

var kaz = function kaz() {
  resume();
};

var Forecast = function (_React$Component) {
  _inherits(Forecast, _React$Component);

  function Forecast(props) {
    _classCallCheck(this, Forecast);

    return _possibleConstructorReturn(this, (Forecast.__proto__ || Object.getPrototypeOf(Forecast)).call(this, props));
  }

  _createClass(Forecast, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(
          "h2",
          null,
          "The SCP Coding Challenge",
          React.createElement("br", null),
          " of Might and Honor"
        ),
        React.createElement(
          "h3",
          null,
          "The Current Three-Day Forecast for: ",
          React.createElement(
            "city-name",
            { id: "ident" },
            "Lafeyette, LA"
          )
        ),
        React.createElement(
          "h1",
          null,
          "Mode: ",
          React.createElement(
            "temp-out",
            { id: "mode" },
            weather.mode.toFixed(2)
          )
        ),
        React.createElement(
          "h1",
          null,
          "Median: ",
          React.createElement(
            "temp-out",
            { id: "median" },
            weather.median.toFixed(2)
          )
        ),
        React.createElement(
          "h1",
          null,
          "Mean: ",
          React.createElement(
            "temp-out",
            { id: "mean" },
            weather.mean.toFixed(2)
          )
        ),
        React.createElement("p", null),
        React.createElement(
          "h3",
          null,
          "Hot enough for ya?",
          React.createElement("br", null),
          " If not, pick another city here:"
        ),
        React.createElement(
          "select",
          { id: "states", onChange: citifier.bind(this) },
          React.createElement(
            "option",
            { value: "0" },
            "Select a state"
          )
        ),
        React.createElement("br", null),
        React.createElement(
          "select",
          { id: "cities", onChange: sendcity.bind(this) },
          React.createElement(
            "option",
            { value: "0" },
            "Select a city"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            { value: "Happy? Click Here!", onClick: kaz },
            "Happy? Click Here!"
          )
        )
      );
    }
  }]);

  return Forecast;
}(React.Component);

var domContainer = document.querySelector('#weather');
ReactDOM.render(React.createElement(Forecast, null), domContainer);

// create a list of unique state names using the spread operator and set from es6
var states = [].concat(_toConsumableArray(new Set(cities.map(function (city) {
  return city.state;
}))));
var sd = document.getElementById("states");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = states.sort()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var state = _step2.value;

    if (state != "" && state != "00") {
      sd.appendChild(makeoption(state, state));
    }
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var d = document;
var but = function but(link) {
  link == "learn" ? resume() : call();
};
var call = function call() {
  alert("Calling Kaz!");
  location = "tel:618-402-9397";
};
var resume = function resume(event) {
  var p = d.getElementsByTagName("popup")[0].style;
  p.display = p.display == '' ? "block" : '';
};
d.getElementsByTagName("caller")[0].addEventListener("click", function (e) {
  call();
});
d.getElementsByTagName("closer")[0].addEventListener("click", function (e) {
  resume(e);
});