const mongoose = require('mongoose');

mongoose
    .connect( 
        "mongodb+srv://Gneo:mernproject@cluster0.pg86x.mongodb.net/mern-project", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Connected to MongoDb'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
    