const express = require('express')
require('dotenv').config()
const paymentRoute = require('./routes/paymentRoutes')
const CORS = require('cors')
const app = express()
const port = process.env.PORT

// Middlewares 
app.use(CORS())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes 
app.use('/api', paymentRoute)

app.get('/api/getkey', (req, res) => {
    return res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
})

app.listen(port, () => console.log(`http://localhost:${port}`))
