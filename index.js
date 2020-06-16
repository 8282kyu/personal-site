
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/xxx', express.static(path.join(__dirname, 'html5up-eventually')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/xxxx', (req, res) => res.render('pages/index2'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// express()
//   .use('/', express.static(path.join(__dirname, 'html...')))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
