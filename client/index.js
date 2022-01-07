const { request, response } = require('express');
const express = require ('express');
const handlebars = require('express-handlebars'); 

app = express ();

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}))

app.set('view engine', 'hbs');

app.set('views', './views');

app.get('/', (request, response) => {
    response.render('home' , {
        layout: 'header', 

    })
})

app.get('/home', (request, response) => {
    response.render('home')
} )

app.get('/post', (req, res) => {
    const post = {
        title: 'It is new post',
        description: 'Some post description',
        author: 'Root',
    }
    res.render('post', { post })
});


app.listen (3000, () => {
    console.log ("Servak pasha, but he not Pasha")
});