import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());

const generateNumbers = (times) => {
  let counter = 0;
  const arrayOfRandomNumbers = [];
  while (counter !== times) {
    counter++;
    const min = Math.ceil(1000000000);
    const max = Math.floor(9999999999);
    const number = String(Math.floor(Math.random() * (max - min)) + min).split('');
    number.splice(0, 1, '0');
    const joinedNumbers = number.join('');
    arrayOfRandomNumbers.push(joinedNumbers);
  }
  fs.writeFile("randomNumbers.txt", JSON.stringify(arrayOfRandomNumbers), function(err) {
    if(err) {
        return console.log(err);
    }
}); 

  return arrayOfRandomNumbers;
}

app.get('/random-numbers/:quantity', (req, res) => {
  res.status(200).send({randomNumbers: generateNumbers(parseInt(req.params.quantity, 10))});
});

app.listen(process.env.PORT || 3000, () => {
    console.log('listening');
});