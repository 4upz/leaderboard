import { descend, slice, sort, find, propEq } from 'ramda'

/** A list of helper functions for the leaderboard */
const leaderboardHelpers = {
  /** Sorts an array of users in descending order by absolute score (wins- losses) */
  sortByScore(users) {
    const byScore = descend((user) => user.wins - user.losses)
    return sort(byScore, users)
  },
  /** Retrieves the first three elements of the list of users */
  firstThreeOf(users) {
    return slice(0, 3, users)
  },
  /** Retrieves elements after the first three list of users */
  afterFirstThreeOf(users) {
    return slice(3, Infinity, users)
  },
  getUserByID(userID, users) {
    const hasID = propEq('id', userID)
    return find(hasID, users)
  },
}

export default leaderboardHelpers
