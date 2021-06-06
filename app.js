const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("static"));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/signup.html");

});

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    
    res.write("<h1>First Name : "+ firstName +"</h1>");
    res.write("<h1>Last Name : " + lastName + "</h1>");
    res.write("<h1>Email : " + email+ "</h1>");
    res.write("Successfully signed up");
    res.send();
});
app.listen(process.env.PORT || 8080);
