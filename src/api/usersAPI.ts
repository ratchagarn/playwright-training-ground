import request from './index'

import type { User } from '_mocks/model/userModel'

export { User }

export const usersAPI = {
  getAll: () => request.get<User[]>('/api/users').then((resp) => resp.data),
  getByID: (id: string) =>
    request.get<User>(`/api/users/${id}`).then((resp) => resp.data),

  create: (data: User) => request.post('/api/users', data),

  deleteByID: (id: string) => request.delete(`/api/users/${id}`),
}
