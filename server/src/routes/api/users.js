import express from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'
import bcrypt from 'bcryptjs'
import { check, validationResult } from 'express-validator'
import users from '../../mocks/users'
import User from '../../models/User'

const router = express.Router()

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (request, response) => {
  try {
    return response.json(users)
  } catch (error) {
    console.log(error.message)
    return response.status(500).send('Error retrieving users')
  }
})

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
  check('username', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
async (request, response) => {
  const errors = validationResult(request)

  // Return any errors as response if body is present
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() })
  }

  const { username, email, password } = request.body

  try {
    // See if user exists
    let user = await User.findOne({ email })

    if (user) {
      return response.status(400).json({ errors: [{ message: 'User already exists' }] })
    }

    user = new User({
      username,
      email,
      password
    })

    // Encrypt Password
    const salt = await bcrypt.genSalt()

    user.password = await bcrypt.hash(password, salt)

    await user.save()

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (error, token) => {
      if (error) throw error
      response.json({ token })
    })
  } catch (error) {
    console.error(error.message)
    response.status(500).send('Server Error')
  }
}
)

export default router
