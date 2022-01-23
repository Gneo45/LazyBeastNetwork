const mongoose = require('mongoose');

mongoose
    .connect( process.env.MONGODB_URI ||
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.pg86x.mongodb.net/mern-project", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Connected to MongoDb'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
    