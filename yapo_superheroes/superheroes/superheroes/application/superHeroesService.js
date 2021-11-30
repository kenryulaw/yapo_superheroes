const request = require('request');

exports.llamarBatman = function(next) {
 
    var options = {
        host: 'superheroapi.com',
        port: 80,
        path: '/api.php/10159318389480967/70',
        method: 'GET',
        encoding: 'utf8'
    };
 
    // Se invoca el servicio RESTful con las opciones configuradas previamente y sin objeto JSON.
    callSuperHeroesAPI(options, null, function (heroes, err) {
        if (err) {
            next(null, err);
        } else {
            next(heroes, null);
        }
    });
};


exports.cargarHeroes = function(next) {
 
    var options = {
        host: 'superheroapi.com',
        port: 80,
        path: '/api.php/10159318389480967/search/batgirl',
        method: 'GET',
        encoding: 'utf8'
    };
 
    // Se invoca el servicio RESTful con las opciones configuradas previamente y sin objeto JSON.
    callSuperHeroesAPI(options, null, function (heroes, err) {
        if (err) {
            next(null, err);
        } else {
            next(heroes, null);
        }
    });

};

exports.obtenerHeroe = function(heroName, next){

    var options = {
        host: 'superheroapi.com',
        port: 80,
        path: '/api.php/10159318389480967/search/' + heroName,
        method: 'GET',
        encoding: 'utf8'
    };

    // Se invoca el servicio RESTful con las opciones configuradas previamente y sin objeto JSON.
    callSuperHeroesAPI(options, null, function (heroe, err) {
        if (err) {
            next(null, err);
        } else {
            next(heroe, null);
        }
    });
}

/**
* Función encargada de invocar los servicios RESTful y devolver
* el objeto JSON correspondiente.
*/
function callSuperHeroesAPI(options, jsonObject, next) {
   request('https://' + options.host + options.path, { json: true }, (err, res, body) => {
       
        if (err) { return console.log(err); }
        next(body);
   });

   // Si la petición tiene datos estos se envían con la request
   if (jsonObject) {
       req.write(jsonObject);
   }

};


function getRequest(url, next) {
    return new Promise(function (success, failure) {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                success(body);
            } else {
                failure(error);
            }
        });
    });
}

