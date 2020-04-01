const axios = require('axios').default;
let request = require ('request');

exports.gov = function(callback){
    request({
        headers: {
            'x-parse-application-id' : 'unAFkcaNDeXajurGB7LChj8SgQYS2ptm',
           'Content-Type': 'application/json' ,
        },
    uri: "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral/",
    method: "GET",
}, function(err, body) {
    if (body.statusCode == 200) {
callback(body.body);
    }else{  
      callback({"error": err});
    }
})
};







