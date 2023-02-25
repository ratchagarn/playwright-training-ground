import request from './index'

import type { User } from '_mocks/model/userModel'

export { User }

const users = {
  getUserList: () =>
    request.get<User[]>('/api/users').then((resp) => resp.data),
}

export default users
