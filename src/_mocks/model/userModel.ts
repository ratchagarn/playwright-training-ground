import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

import type { InferModelType } from './types'

const db = factory({
  ['api/user']: {
    id: primaryKey(faker.datatype.uuid),
    name: String,
  },
})

export const userModel = db['api/user']

userModel.create({
  name: 'Test 1',
})

export type IUser = InferModelType<typeof userModel>
