const express = require('express');
const ejs = require('ejs')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src/views'))
app.use(express.static('./src'));

console.log(__dirname);

const PORT = process.env.PORT || 8080;

app.get( '/' , ( req , res ) => {
  let message = 'Proyecto Node.js con Git'
  res.render('index', {message: message})
})

app.listen( PORT , () => {
  console.log(`Servidor funcionando localhost:${PORT}`);
})
