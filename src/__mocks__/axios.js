const mockAxios = jest.genMockFromModule('axios')

mockAxios.create = jest.fn(() => mockAxios)
//mockAxios.request.mockName('Mikhail')

export default mockAxios
