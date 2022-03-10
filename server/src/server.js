import express from 'express'
import connectDB from '../config/db'
import users from './routes/api/users'

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.send('API is Running!'))

// Init Middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/users', users)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is up on Port ${PORT}! :D`)
})
