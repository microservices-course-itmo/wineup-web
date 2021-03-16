import axios from 'axios'

class Api {
  constructor() {
    this.request = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API,
    })
  }

  async login(data) {
    const response = await this.sendRequest({
      url: '/user-service/login',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
    })

    if (response.status !== 200) {
      return {
        error: true,
        message: '[API]: LOGIN error',
      }
    }

    return {
      error: false,
      user: response.data,
    }
  }

  async registration(data) {
    const response = await this.sendRequest({
      url: '/user-service/registration',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
    })

    if (response.status !== 200) {
      return {
        error: true,
        message: '[API]: REGISTRATION error',
      }
    }

    return {
      error: false,
      user: response.data,
    }
  }

  async refreshToken(refreshToken) {
    const response = await this.sendRequest({
      url: `/user-service/refresh?refreshToken=${refreshToken}`,
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return [response.data.accessToken, response.data.refreshToken]
  }

  async getAllWines(data) {
    const response = await this.sendRequest({
      url: '/catalog-service/position/true/',
      method: 'POST',
      data,
      headers: {
        accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async getWineById(id) {
    const response = await this.sendRequest({
      url: `/catalog-service/position/true/byId/${id}`,
      method: 'GET',
      data: {},
      headers: {
        accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async addWineToFavorites(id, token) {
    const response = await this.sendRequest({
      url: `/user-service/favorites/${id}`,
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async deleteWineFromFavorites(id, token) {
    const response = await this.sendRequest({
      url: `/user-service/favorites/${id}`,
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async deleteAllWinesFromFavorites(token) {
    const response = await this.sendRequest({
      url: '/user-service/favorites/clear',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async getFavoritesWines(token) {
    const response = await this.sendRequest({
      url: '/user-service/favorites/list',
      method: 'GET',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async getFavoritesWinesByUserId(userId) {
    const response = await this.sendRequest({
      url: `/catalog-service/position/true/byId/${userId}`,
      method: 'GET',
      data: {},
      headers: {
        accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async getProfile(accessToken) {
    const response = await this.sendRequest({
      url: '/user-service/users/me',
      method: 'GET',
      data: {},
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (response.status === 403) {
      return {
        error: true,
        message: '[API]: GETPROFILE - token expired',
      }
    }

    return {
      error: false,
      profile: response.data,
    }
  }

  async patchProfile(token, data) {
    const response = await this.sendRequest({
      url: '/user-service/users/me',
      method: 'PATCH',
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8',
        accept: '*/*',
      },
    })

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.data
  }

  async sendRequest({ url, method, data, headers }) {
    try {
      const response = await this.request({
        url,
        method,
        data,
        headers,
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
