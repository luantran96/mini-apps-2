const express = require('express');
const PORT = 3000;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));



app.listen(PORT, () => console.log('listening on port ' + PORT));