const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/letters', require('./routes/letters'));

app.get('/', (req, res) => {
    res.send('hello world!');
})


const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {console.log(`Listening on http://localhost:${PORT}`)})