const express = require('express');
const app = express();
const partials = require('express-partials');

app.set('view-engine', 'ejs');


app.use( express.static( "public" ) );
app.use(express.urlencoded({ extended: false }));
app.use(partials());
app.use( express.static( "public" ) );

app.get('/', (req,res) => {
    res.render('index.ejs');
    res.end();
});

app.get('/mainmenu', (req,res) => {
    res.render('mainmenu.ejs');
    res.end();
});

app.get('/user', (req,res) => {
    res.render('user.ejs');
    res.end();
});

app.get('/contract', (req,res) => {
    res.render('contract.ejs');
    res.end();
});


app.listen(80);