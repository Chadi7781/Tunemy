const mongoose = require("mongoose");

const connectDB= async () => {

   const connection =  mongoose.connect(
        // "mongodb+srv://xx:24551966@linktunisia.i0bdn.mongodb.net/closer?retryWrites=true&w=majority",
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        },
        (err) => {
            if (!err) {
                console.log(`MongoDB Connection Succeded `);
            } else {
                console.log("Error in DB conncection: " + err);
            }
        });
};

module.exports = connectDB;

