import request, { withDelay } from './index'

import type { User } from '_mocks/model/userModel'

export { User }

export const usersAPI = {
  create: (data: User) => withDelay<User>(request.post('/api/users', data)),

  readAll: () => withDelay<User[]>(request.get('/api/users')),
  readByID: (id: number) => withDelay<User>(request.get(`/api/users/${id}`)),

  updateByID: (data: User) =>
    withDelay<User>(request.put(`/api/users/${data.id}`, data)),

  deleteByID: (id: number) =>
    withDelay<User>(request.delete(`/api/users/${id}`)),
}
