const superHeroesService = require('./superHeroesService.js');


exports.bringBatman = function(req, res) {
	
	superHeroesService.llamarBatman(function(batman, err) {
		if (err) {
			console.error('Error al recuperar a Batman: ' + err);
			res.send('Se ha producido un error');
		} else {
            console.log(batman)
			res.render('heroes', {heroes: batman});
		}
	});
};

exports.heroesList = function(req, res) {
	
	superHeroesService.cargarHeroes(function(heroes, err) {
		if (err) {
			console.error('Error al recuperar los heroes: ' + err);
			res.send('Se ha producido un error');
		} else {
			res.render('heroes', {heroes: heroes});
		}
	});
};

exports.getHero = function(req, res){

    var heroName = req.params.heroName;
    superHeroesService.obtenerHeroe(heroName, function(heroe, err) {
		if (err) {
			console.error('Error al recuperar al heroe: ' + err);
			res.send('Se ha producido un error');
		} else {
            console.log(heroe.connections)
			res.render('heroes', {heroes: heroe});
		}
	});

};