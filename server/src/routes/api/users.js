import express from 'express'
import users from '../../mocks/users'

const router = express.Router()

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
  try{
    return res.json(users)
  } catch (error) {
    console.log(error.message)
    return res.status(500).send('Error retrieving users')
  }
})

export default router