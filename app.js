require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnect } = require('./config/bdConnection')
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.use('/api', require('./app/routes'))

dbConnect()
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});