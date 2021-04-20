const express = require('express')
const path=require('path')
const morgan=require('morgan')
const app = express()
app.use(morgan('combined'))
// app.set('views', path.join(__dirname, 'views'));

const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',  (req, res)=> {
  res.render('login'); // load the login page
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})