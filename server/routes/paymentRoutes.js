const { Router } = require('express')
const { checkOut, paymentVerification } = require('../controllers/paymentController')

const router = Router()

router.post('/checkout', checkOut)
router.post('/paymentverification', paymentVerification)

module.exports = router