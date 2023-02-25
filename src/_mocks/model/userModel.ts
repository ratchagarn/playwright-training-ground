import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const db = factory({
  ['api/user']: {
    id: primaryKey(faker.datatype.uuid),
    name: String,
    jobTitle: String,
    email: String,
  },
})

export const userModel = db['api/user']

userModel.create({
  name: 'User 01',
  jobTitle: 'Manager',
  email: 'user01@mail.com',
})

for (let i = 0; i < 9; i++) {
  userModel.create({
    name: faker.name.fullName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  })
}

export type User = MSWDataInferModelType<typeof userModel>
