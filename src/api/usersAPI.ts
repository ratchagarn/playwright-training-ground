import request from './index'

import type { User } from '_mocks/model/userModel'

export { User }

export const usersAPI = {
  create: (data: User) => request.post('/api/users', data),

  readAll: () => request.get<User[]>('/api/users').then((resp) => resp.data),
  readByID: (id: string) =>
    request.get<User>(`/api/users/${id}`).then((resp) => resp.data),

  updateByID: (data: User) => request.put(`/api/users/${data.id}`, data),

  deleteByID: (id: string) => request.delete(`/api/users/${id}`),
}
