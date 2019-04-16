'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());

var generateNumbers = function generateNumbers(times) {
  var counter = 0;
  var arrayOfRandomNumbers = [];
  while (counter !== times) {
    counter++;
    var min = Math.ceil(1000000000);
    var max = Math.floor(9999999999);
    var number = String(Math.floor(Math.random() * (max - min)) + min).split('');
    number.splice(0, 1, '0');
    var joinedNumbers = number.join('');
    arrayOfRandomNumbers.push(joinedNumbers);
  }
  _fs2.default.writeFile("randomNumbers.txt", JSON.stringify(arrayOfRandomNumbers), function (err) {
    if (err) {
      return console.log(err);
    }
  });

  return arrayOfRandomNumbers;
};

app.get('/random-numbers/:quantity', function (req, res) {
  res.status(200).send({ randomNumbers: generateNumbers(parseInt(req.params.quantity, 10)) });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening');
});