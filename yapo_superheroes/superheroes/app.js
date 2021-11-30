const express = require("express");
const app = express();
const port = 3000;

const superHeroesRouter = require('./superheroes/infrastructure/superHeroesRouter.js');
const path = require('path');

app.use('/', superHeroesRouter);
app.use('/heroes', superHeroesRouter);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
});
app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto", port);
});