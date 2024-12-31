const mongoose = require('mongoose');

const dbCon = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err))
}

module.exports = dbCon