import axios, { type AxiosResponse } from 'axios'
import { faker } from '@faker-js/faker'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API_END_POINT,
})

export default instance

export const wait = (ms?: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms ?? +faker.random.numeric(3) + 50)
  })

export const withForReactQuery = <T = any>(
  request: Promise<AxiosResponse<T, any>>,
  ms?: number
) =>
  request.then(async (resp) => {
    await wait(ms)
    return resp.data
  })
