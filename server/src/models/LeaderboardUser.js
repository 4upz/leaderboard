import mongoose from 'mongoose'

const LeaderboardUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  wins: {
    type: Number,
    required: true
  },
  losses: {
    type: Number,
    required: true
  },
  hasIncreased: Boolean
})

export default mongoose.model('LeaderboardUser', LeaderboardUserSchema)
