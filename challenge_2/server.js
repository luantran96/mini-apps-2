const express = require('express');
const PORT = 3000;
const path = require('path');
const request = require('request');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/api/', (req, res) => {

    const { start_date, end_date } = req.query;
    
    var options = {
      url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`,
    };

    request(options, (err, response, body) => {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        res.json(info);
      }
    });

});

app.listen(PORT, () => console.log('listening on port ' + PORT));