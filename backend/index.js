require('dotenv').config();
const express = require('express');
const dbCon = require('./db/dbCon');

const app = express();

dbCon()

app.listen(4000, () => console.log(`Listening on PORT 4000`))