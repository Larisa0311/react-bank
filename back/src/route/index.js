// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
// const test = require('./test')
// Підключіть інші файли роутів, якщо є
const auth = require('./auth')
const dashboard = require('./dashboard')
// Об'єднайте файли роутів за потреби
// router.use('/', test)
router.use('/', auth)
router.use('/', dashboard)
// Використовуйте інші файли роутів, якщо є

router.get('/', (req, res) => {
  res.status(200).json('Hello World')
})

// Експортуємо глобальний роутер
module.exports = router
