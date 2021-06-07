import axios from 'axios'

export const testFetch = async () => {
  await axios.get('/api').then((response) => console.log(response.data.message))
}
