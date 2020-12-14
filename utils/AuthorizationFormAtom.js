import { atom } from 'recoil'

export const authorizeUser = json => {
  atom({
    key: 'currentUser',
    default: {
      accessToken: json.accessToken,
      refreshToken: json.refreshToken,
      user: {
        id: json.user.id,
        phoneNumber: json.user.phoneNumber,
        role: json.user.role,
        name: json.user.name,
        cityId: json.user.cityId,
        birthdate: json.user.birthdate,
      },
    },
  })
}
