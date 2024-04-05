// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const { User } = require('../class/user')
const { Confirm } = require('../class/confirm')
const { Session } = require('../class/session')
const { Transaction } = require('../class/transaction')
const { Notification } = require('../class/notification')
const { NOTIFICATION_TYPE, } = require('../utils/notification-type')

//=====
router.get('/transaction/:transactionId', function(req, res) {
  const { transactionId } = req.params
  const { email } = req.query

  if (!email || !transactionId) {
    return res.status(400).json({
      message: 'Error, required variables are missing!',
    })
  }

  try {
    const user = User.getByEmail(email)

    if (!user) {
      return res.status(400).json({
        message: 'The user with this email does not exist!',
      })
    }

    const transaction = user.transactions.find(
      (transaction) => 
      transaction.transaction.id === 
      Number(transactionId),
      )

      if (!transaction) {
        return res.status(400).json({
          message: 'The transaction with this ID does not exist!',
        })
      }

      let companyName = null

      if (
        transaction.transaction.from &&
        transaction.transaction.from.companyName
      ) {
        companyName = 
        transaction.transaction.from.companyName
      }

      let transactionEmail

      if (transaction.type === 'PLUS') {
        transactionEmail = 
        transaction.transaction.from.email
      } else {
        transactionEmail = transaction.transaction.to.email
      }

      return res.status(200).json({
        message: 'Data transaction are sent!',
        transaction: {
          amount: transaction.transaction.amount,
          date: transaction.transaction.date,
          type: transaction.type,
          transactionEmail: transactionEmail,
          companyName: companyName,
        },
      })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      message: err,
    })
  }
},
)

//=====
router.get('/balance', function (req, res) {
  const { email } = req.query

  if (!email) {
    return res.status(400).json({
      message: `Error, required fields are missing!`,
    })
  }

  try {
    const user = User.getByEmail(email)

    if (!user) {
      return res.status(400).json({
        message: `The user with this email does not exist!`,
      })
    }

    return res.status(200).json({
      message: 'Data user are sent!',
      user: {
        balance: user.balance,

        transactions: user.transactions.map(
          (transaction) => {
            let firstname
            let lastname
            let companyName
            if (transaction.type === 'PLUS') {
              companyName =
                transaction.transaction.from.companyName
              firstname =
                transaction.transaction.from.firstname
              lastname =
                transaction.transaction.from.lastname
            } else {
              firstname =
                transaction.transaction.to.firstname
              lastname = transaction.transaction.to.lastname
            }

            return {
              type: transaction.type,
              firstname: firstname,
              lastname: lastname,
              companyName: companyName,
              amount: transaction.transaction.amount,
              date: transaction.transaction.date,
              id: transaction.transaction.id,
            }
          },
        ),
      },
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      message: err,
    })
  }
})

//=====


// Експортуємо глобальний роутер
module.exports = router
