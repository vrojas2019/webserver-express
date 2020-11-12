const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;


hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hello World')


    /* let salida = {
        nombre: 'victor',
        edad: 40,
        url: req.url
    }

    res.send(salida); */

    res.render('home', {
        nombre: 'VICTOR',
        anio: new Date().getFullYear()
    });

})

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

})



app.listen(port, () => {
    console.log(`Escuchando peticiones en elpuerto ${port}`);
});