let express = require("express");
let app = express();
let cors = require("cors");
const axios = require('axios').default;
let gov = require('./gov');

app.use(cors());

var port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0",function(){
    console.log("rodando")
})

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.get('/cases', (req, res) => {
gov.gov(function(callback){
    console.log(callback);
    res.send(callback);
var dados = JSON.parse(callback);
   res.end();
})
  
})





