import { userModel } from './model/userModel'

export const handlers = [...userModel.toHandlers('rest')]
