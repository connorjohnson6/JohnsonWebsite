const express = require('express');

const app = express();

const port = 3000;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set Templating Engine
app.set('views', './views');
app.set('view engine', 'ejs');

//Navigation
app.get('', (req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.render('about',{text: "About PGE"})
})

//Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))