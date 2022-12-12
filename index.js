const express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts')
const router = require('./routers/router')
const app = express();


//CONNECT DATABASE
mongoose.connect("mongodb+srv://team03:632000@cluster0.niw44un.mongodb.net/?retryWrites=true&w=majority", () => {
  console.log("Connected to MongoDB")
})

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', path.join(__dirname, 'resources/views/index'))
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'resources/views/layouts'));
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', router)

app.listen(4000, (_) => {
   console.log('server run on port 4000'); 
});