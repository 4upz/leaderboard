import express from 'express'
import users from './routes/api/users'

const PORT = process.env.PORT || 5000
const app = express();

app.get("/", (req, res) => res.send("API is Running!"));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', users)

app.listen(PORT, () => {
  console.log(`Server is up on Port ${PORT}! ^_^`)
})
