const axios = require('axios').default;
let request = require ('request');

exports.gov = function(callback){
    request({
        headers: {
            'x-parse-application-id' : 'seutoken',
           'Content-Type': 'application/json' ,
        },
    uri: " ",
    method: "GET",
}, function(err, body) {
    if (body.statusCode == 200) {

callback(body.body);

    }else{  
      callback({"error": err});
    }
})
};







