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
        message: 'Ошибка авторизации',
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
        message: 'Ошибка регистрации',
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
      return {
        error: true,
        message: 'Ошибка получения данных профиля',
      }
    }

    return {
      error: false,
      data: [response.data.accessToken, response.data.refreshToken],
    }
  }

  async getAllWines(data) {
    const response = await this.sendRequest({
      url: '/catalog-service/position/true/trueSettings',
      params: data,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    })

    if (response.status !== 200) {
      throw new Error('Ошибка получения каталога вин')
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
      throw new Error('Ошибка получения винной позиции')
    }

    return response.data
  }

  // TODO: добавить обработку ошибок
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

  // TODO: добавить обработку ошибок
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

  // TODO: добавить обработку ошибок
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

  // TODO: добавить обработку ошибок
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
      return response
      // throw new Error('Server Error')
    }

    return response.data
  }

  // TODO: добавить обработку ошибок
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
      return response
      // throw new Error('Server Error')
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

    if (response.status !== 200) {
      return {
        error: true,
        message: 'Ошибка получения данных пользователя',
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
      return {
        error: true,
        message: 'Не удалось обновить профиль',
      }
    }

    return {
      error: false,
      data: response.data,
    }
  }

  async sendRequest({ url, method, data, headers, params }) {
    try {
      const response = await this.request({
        url,
        method,
        data,
        headers,
        params,
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
