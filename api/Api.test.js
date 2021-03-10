import mockAxios from 'jest-mock-axios'
import api from '.'

describe('Api tests', () => {
  const mockResponseObject = {
    status: 200,
    data: 'server says hello!',
  }
  const mockErrorObject = {
    message: 'Test error acquired',
    response: {
      data: 'Test error data',
    },
  }
  const mockResponseNot200 = {
    status: 201,
    data: 'Response with code 201',
  }

  afterEach(() => {
    mockAxios.reset()
  })

  describe('Testing main sendRequest() method', () => {
    it('Should send GET requests correctly', async () => {
      const request = {
        url: '/123',
        method: 'GET',
        data: '234',
        headers: '',
      }

      const promise = api.sendRequest(request)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result.status).toBe(mockResponseObject.status)
      expect(result.data).toBe(mockResponseObject.data)
    })

    it('Should send POST requests correctly', async () => {
      const request = {
        url: '/123',
        method: 'POST',
        data: '234',
        headers: '',
      }

      const promise = api.sendRequest(request)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result.status).toBe(mockResponseObject.status)
      expect(result.data).toBe(mockResponseObject.data)
    })

    it('Should send DELETE requests correctly', async () => {
      const request = {
        url: '/123',
        method: 'DELETE',
        data: '234',
        headers: '',
      }

      const promise = api.sendRequest(request)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result.status).toBe(mockResponseObject.status)
      expect(result.data).toBe(mockResponseObject.data)
    })

    it('Should react to error correctly', async () => {
      const request = {
        url: '/123',
        method: 'GET',
        data: '234',
        headers: '',
      }

      const promise = api.sendRequest(request)
      mockAxios.mockError(mockErrorObject)
      const result = await promise

      expect(result.error).toBeTruthy()
      expect(result.message).toBe(mockErrorObject.message)
      expect(result.data).toBe(mockErrorObject.response.data)
    })
  })

  describe('Testing login(data) method', () => {
    const data = '234'

    it('Should login correctly', async () => {
      const promise = api.login(data)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result.error).toBeFalsy()
      expect(result.user).toBe(mockResponseObject.data)
    })

    it('Should react to not 200 response correctly', async () => {
      const promise = api.login(data)
      mockAxios.mockResponse(mockResponseNot200)
      const result = await promise

      expect(result.error).toBeTruthy()
      expect(result.message).toBe('[API]: LOGIN error')
    })
  })

  describe('Testing registration(data) method', () => {
    const data = '234'

    it('Should register correctly', async () => {
      const promise = api.registration(data)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result.error).toBeFalsy()
      expect(result.user).toBe(mockResponseObject.data)
    })

    it('Should react to not 200 response correctly', async () => {
      const promise = api.registration(data)
      mockAxios.mockResponse(mockResponseNot200)
      const result = await promise

      expect(result.error).toBeTruthy()
      expect(result.message).toBe('[API]: REGISTRATION error')
    })
  })

  describe('Testing refreshToken(refreshToken) method', () => {
    const refreshToken = 123

    it('Should refresh token correctly', async () => {
      const mockResponseToken = {
        data: {
          accessToken: 456,
          refreshToken: 123,
        },
      }

      const promise = api.refreshToken(refreshToken)
      mockAxios.mockResponse(mockResponseToken)
      const result = await promise

      expect(result[0]).toBe(mockResponseToken.data.accessToken)
      expect(result[1]).toBe(mockResponseToken.data.refreshToken)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.refreshToken(refreshToken)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing getAllWines(data) method', () => {
    const data = '234'

    it('Should get all wines correctly', async () => {
      const promise = api.getAllWines(data)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.getAllWines(data)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing getWineById(id) method', () => {
    const id = 234

    it('Should get wind by Id correctly', async () => {
      const promise = api.getWineById(id)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.getWineById(id)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing addWineToFavourites(id, token) method', () => {
    const id = 234
    const token = 456

    it('Should add wine to favourites correctly', async () => {
      const promise = api.addWineToFavorites(id, token)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.addWineToFavorites(id, token)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing deleteWineFromFavorites(id, token) method', () => {
    const id = 234
    const token = 456

    it('Should delete wine from favourites correctly', async () => {
      const promise = api.deleteWineFromFavorites(id, token)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.deleteWineFromFavorites(id, token)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing deleteAllWinesFromFavorites(token) method', () => {
    const token = 456

    it('Should delete all wines from favourites correctly', async () => {
      const promise = api.deleteAllWinesFromFavorites(token)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.deleteAllWinesFromFavorites(token)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing getFavoritesWines(token) method', () => {
    const token = 456

    it('Should get favourite wines correctly', async () => {
      const promise = api.getFavoritesWines(token)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.getFavoritesWines(token)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing getFavoritesWinesByUserId(userId) method', () => {
    const usedID = 12345678

    it('Should get favourite wines by used id correctly', async () => {
      const promise = api.getFavoritesWinesByUserId(usedID)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result).toBe(mockResponseObject.data)
    })

    it('Should throw error to not 200 response', async () => {
      const promise = api.getFavoritesWinesByUserId(usedID)
      mockAxios.mockResponse(mockResponseNot200)
      try {
        await promise
      } catch (e) {
        expect(e.message).toBe('Server Error')
      }
    })
  })

  describe('Testing getProfile(accessToken) method', () => {
    const accessToken = '1234'

    it('Should get profile correctly', async () => {
      const promise = api.getProfile(accessToken)
      mockAxios.mockResponse(mockResponseObject)
      const result = await promise

      expect(result.error).toBeFalsy()
      expect(result.profile).toBe(mockResponseObject.data)
    })

    it('Should react correctly to 403 response', async () => {
      const mockResponse403 = {
        status: 403,
      }
      const promise = api.getProfile(accessToken)
      mockAxios.mockResponse(mockResponse403)
      const result = await promise

      expect(result.error).toBeTruthy()
      expect(result.message).toBe('[API]: GETPROFILE - token expired')
    })
  })
})
