const express = require('express')
const router = express.Router()

const { User } = require('../class/user')
const { Confirm } = require('../class/confirm')
const { Session } = require('../class/session')
// const { Notification } = require('../class/notification')
// const {
//   NOTIFICATION_TYPE,
// } = require('../utils/notification-type')

User.create({
  firstname: 'Larysa',
  lastname: 'Zubenko',
  email: "zubenko0311@gmail.com",
  password: 'lZ123456',
})

User.create({
  firstname: 'Oleksandr',
  lastname: 'Zubenko',
  email: "alex0603@gmail.com",
  password: 'aZ654321',
})

router.post('/signup', function (req, res) {
  try {
  const { firstname, lastname, email, password } = req.body
  console.log(req.body);

  const firstnameNew = firstname.trim()
  const lastnameNew = lastname.trim()

  if (!email || !password || !firstname || !lastname) {
    return res.status(400).json({
      message: "Error. There are no required fields",
    })
  }
  
    const user = User.getByEmail(email)

    if (user) {
      return res.status(400).json({
        message: "The user with this email is already registered!",
      })
    }

    const newUser = User.create({ 
      firstnameNew, 
      lastnameNew, 
      email, 
      password 
    })
    
    const session = Session.create(newUser)
    
  Confirm.create(newUser.email)
  
    return res.status(200).json({
      message: "The user is successfully registered",
      session,
    })
  } catch (err) {
    return res.status(400).json({
      message: "Error creating user",
    })
  }
})


router.post('/signup-confirm', function (req, res) {
  const { code, token } = req.body

  if (!code || !token) {
    return res.status(400).json({
      message: 'Error, required fields are missing!',
    })
  }
console.log("code", code, ", token", token)
  try {
    const session = Session.get(token)
console.log(session)
    if (!session) {
      return res.status(400).json({
        message: 'Error, you are not logged in!',
      })
    }

    const email = Confirm.getData(code)
    
    if (!email) {
      return res.status(400).json({
        message: 'The code is not valid!',
      })
    }

    if (email !== session.user.email) {
      return res.status(400).json({
        message: 'The code is not valid!',
      })
    }

    session.user.isConfirm = true

    const user = User.getByEmail(email)

    if (!user) {
      return res.status(400).json({
        message: 'The user with this email does not exist!',
      })
    }

    user.isConfirm = true

    return res.status(200).json({
      message: "User is verified!",
      session,
    })
} catch (err) {
  return res.status(400).json({
    message: err.message,
  })
}
})

router.post('/resend-code', function (req, res) {
  const { email } = req.query

  if (!email) {
    return res.status(400).json({
      message: 'Error, required fields are missing!',
    })
  }

  try {
    Confirm.create(email)

    return res.status(200).json({
      message: 'Code is sent!',
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    })
  }
})

// Експортуємо глобальний роутер
module.exports = router
