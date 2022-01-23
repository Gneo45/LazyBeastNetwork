const mongoose = require('mongoose');

mongoose
    .connect(
        process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Connected to MongoDb'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
 