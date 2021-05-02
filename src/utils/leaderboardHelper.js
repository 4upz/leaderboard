import { sort, descend, slice } from 'ramda'

/** A list of helper functions for the leaderboard */
const leaderboardHelpers = {
  /** Sorts an array of users in descending order by absolute score (wins- losses) */
  sortByScore(users) {
    const byScore = descend((user) => user.wins - user.losses)
    return sort(byScore, users)
  },
  firstThreeOf(users) {
    return slice(0, 3, users)
  },
}

export default leaderboardHelpers
