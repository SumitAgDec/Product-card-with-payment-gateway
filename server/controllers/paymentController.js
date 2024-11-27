const instance = require("../config/config")
const crypto = require("crypto")

//create order
const checkOut = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: 'INR'
    }

    const order = await instance.orders.create(options)

    res.status(201).json({
        success: true,
        order
    })
}

//verify payment
const paymentVerification = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex')

    const isAuthentication = razorpay_signature === expectedSignature

    if (isAuthentication) {

        return res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`)
    } else {
        res.status(400).json({
            success: false
        })
    }

    res.status(201).json({
        success: true
    })
}

module.exports = {
    checkOut,
    paymentVerification
}