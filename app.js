const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT;

//Configuracion de parciales con Handelbars
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Contenido Estatico
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Greck',
        title: 'Primera Pagina Hbs'
    });
})

app.get('/generic',(req,res) => {
    res.render('generic',{
        nombre: 'Greck',
        title: 'Primera Pagina Hbs'});
})

app.get('/elements',(req,res) => {
    res.render('elements',{
        nombre: 'Greck',
        title: 'Primera Pagina Hbs'});
})

// app.get('*',(req,res) => {
//     res.sendFile(__dirname+'/public/404.html');
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
