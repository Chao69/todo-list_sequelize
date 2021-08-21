const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('./node_modules/body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 根目錄
app.get('/', (req, res) => {
  res.send('hello world')
})

// 登入頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})

// 註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})