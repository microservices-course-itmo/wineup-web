/*eslint-disable*/
import { atom } from 'recoil'

export let user
export const authorizeUser = json => {
  user = atom({
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
