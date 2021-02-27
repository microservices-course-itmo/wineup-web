import axios from 'axios'

class Api {
  constructor() {
    this.request = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API,
    })
  }

  login() {}

  registration() {}

  refreshToken() {}

  getAllWines() {}

  getWineById() {}

  addWineToFavorites() {}

  deleteWineFromFavorites() {}

  deleteAllWinesFromFavorites() {}

  getFavoritesWines() {}

  getFavoritesWinesByUserId() {}

  getProfile() {}

  async sendRequest({ url, method, data }) {
    try {
      const { data: response } = await this.request({
        url,
        method,
        data,
      })

      return response
    } catch (err) {
      return {
        error: true,
        message: err.message,
        data: err.response.data,
      }
    }
  }
}

export default Api
