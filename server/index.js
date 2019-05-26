const express = require('express');
const cors = require('cors');
const PORT = 4000; 
const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
    res.send('Hi!')
})

app.get('/number', (req, res, next) => {
    res.send({num: 50});
})

app.listen(PORT, () => {console.log('Server is running on port ' + PORT)})