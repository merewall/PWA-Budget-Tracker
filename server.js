const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
// ASYNC AWAIT FOR MONGOOSE DATABASE CONNECTION
// CONSULTED CODE HERE: https://stackoverflow.com/questions/54890608/how-to-use-async-await-with-mongoose
// const connectDb = async () => {
//   await mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/budget',
//     {
//       useNewUrlParser:true,
//       useCreateIndex:true,
//       useFindAndModify:false,
//       useUnifiedTopology: true 
//     }
//   )
//   .then(() => {
//     console.log("Connected to database!")
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }
// CONNECT TO MONGOOSE DATABASE OR CATCH & CONSOLE LOG ERROR
// connectDb().catch(err => console.log(err))
mongoose.connect("mongodb://localhost/budget", 
  {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
  
  }
);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});