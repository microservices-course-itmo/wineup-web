import mockAxios from '../src/__mocks__/axios'
import api from '.'

describe('Api tests', () => {
  it('Should send request correctly', async () => {
    const mockResponse = {
      status: 200,
      user: {
        user: 'user',
        accessToken: 123,
        refreshToken: 456,
      },
    }

    // mockAxios.request.mockImplementationOnce(() =>
    //   Promise.resolve({ data: mockResponse }),
    // )
    mockAxios.request.mockName('Mikhail')

    // // mockAxios.request.mockResolvedValue(mockResponse)
    // mockAxios.request.mockImplementationOnce(() =>
    //   Promise.resolve({ data: mockResponse }))
    // // mockAxios.post.mockResolvedValue(mockResponse)
    // mockAxios.post.mockImplementationOnce(() =>
    //   Promise.resolve({ data: mockResponse })
    // )
    // mockAxios.request.mockReturnValue('123456')

    const request = {
      url: '111',
      method: 'POST',
      data: '234',
      headers: '',
    }
    const resp = await api.sendRequest(request)
    console.log(resp)
    expect(resp.data).toBe('123')
  })
})
