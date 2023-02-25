import request from './index'

import type { User } from '_mocks/model/userModel'

export { User }

export const usersAPI = {
  getUserList: () =>
    request.get<User[]>('/api/users').then((resp) => resp.data),
  createUser: (data: User) => request.post('/api/users', data),
}
