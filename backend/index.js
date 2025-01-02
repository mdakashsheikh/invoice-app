require('dotenv').config();
const express = require('express');
const dbCon = require('./db/dbCon');
const userRouter = require('./routes/userRoute')

const app = express();

app.use(express.json())

dbCon()
app.use('/api/v1', userRouter)

app.listen(4000, () => console.log(`Listening on PORT 4000`))