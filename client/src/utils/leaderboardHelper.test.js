import leaderboardHelper from './leaderboardHelper'
import mockUsers from '../mocks/users'

describe('Leaderboard Helpers Utility', () => {
  it('sorts a given list of users by their win/loss ratio', () => {
    const expectedLowestUser = mockUsers[4]
    const expectedHighestUser = mockUsers[2]
    const result = leaderboardHelper.sortByScore(mockUsers)
    expect(result[0]).toBe(expectedHighestUser)
    expect(result[5]).toBe(expectedLowestUser)
  })

  it('retrieves the first three users within a list', () => {
    const expectedResults = [mockUsers[0], mockUsers[1], mockUsers[2]]
    const result = leaderboardHelper.firstThreeOf(mockUsers)
    expect(result).toEqual(expectedResults)
  })

  it('retrieves the list while excluding the first three elements', () => {
    const expectedResults = [mockUsers[3], mockUsers[4], mockUsers[5]]
    const result = leaderboardHelper.afterFirstThreeOf(mockUsers)
    expect(result).toEqual(expectedResults)
  })
})
