const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true
    }
)
    .then(() => console.log('database connected'))
    .catch(error => console.log(error))