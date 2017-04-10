// REQUIRED PACKAGES
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    // passport    = require("passport"),
    // flash       = require("connect-flash"),
    // LocalStrategy = require("passport-local"),
    // methodOverride = require("method-override"),
    router  = express.Router();
    // Spot     = require("./models/spot");
    
// CONNECT TO MONGOOSE DATABASE

// mongoose.connect("mongodb://localhost/been_here");
// app.use(bodyParser.urlencoded({extended:true}));
// app.set("view engine", "ejs");
// app.use(methodOverride("_method"));
// app.use(flash());

// SCHEMA
/* var spotSchema = new mongoose.Schema({
    name: String,
    image: String,
    desription: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectID,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: "Comment"
        }
    ]
});*/



// CONFIGURE PASSPORT
/*  Require express-session
    Initialize passport session
    Autenticate users
*/

// APP ROUTES
/* router.get("/", function(req, res){
    // Get all the spots from the database
    
});*/




//INDEX ROUTE
app.get("/", function(req,res){
    res.send("Hi there!");
});

//NEW SPOT ROUTE - SHOW FORM
app.get("/new", function(req, res){
    res.send("This is the page for creating a new post!")
});

//CREATE SPOT ROUTE


//ADD COMMENT ROUTE



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The BeenHere App Server Has Started");
});