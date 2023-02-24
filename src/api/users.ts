import request from './index'

import type { IUser } from '_mocks/model/userModel'

const users = {
  getUserList: () => request.get<IUser[]>('/api/users'),
}

export default users
