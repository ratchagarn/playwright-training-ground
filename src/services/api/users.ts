import request from './index'

interface DataItem {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

interface Support {
  url: string
  text: string
}

export interface Users {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: DataItem[]
  support: Support
}

const users = {
  getUserList: () => request.get<Users>('/users'),
}

export default users
