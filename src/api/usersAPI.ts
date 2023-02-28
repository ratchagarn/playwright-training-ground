import request, { withForReactQuery } from './index'

import type { User } from '_mocks/model/userModel'

export { User }

const path = '/api/users'

export const usersAPI = {
  create: (data: User) => withForReactQuery<User>(request.post(path, data)),

  readAll: () => withForReactQuery<User[]>(request.get(path)),
  readByID: (id: number) =>
    withForReactQuery<User>(request.get(`${path}/${id}`)),

  updateByID: (data: User) =>
    withForReactQuery<User>(request.put(`${path}/${data.id}`, data)),

  deleteByID: (id: number) =>
    withForReactQuery<User>(request.delete(`${path}/${id}`)),
}
