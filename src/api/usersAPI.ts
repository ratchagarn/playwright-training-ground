import request, { wait, withWait } from './index'

import type { User } from '_mocks/model/userModel'

export { User }

export const usersAPI = {
  create: (data: User) => withWait<User>(request.post('/api/users', data)),

  readAll: () => withWait<User[]>(request.get('/api/users')),
  readByID: (id: string) => withWait<User>(request.get(`/api/users/${id}`)),

  updateByID: (data: User) =>
    withWait<User>(request.put(`/api/users/${data.id}`, data)),

  deleteByID: (id: string) =>
    withWait<User>(request.delete(`/api/users/${id}`)),
}
