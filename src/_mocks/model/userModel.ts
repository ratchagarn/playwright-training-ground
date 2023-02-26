import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const db = factory({
  ['api/user']: {
    id: primaryKey(Number),
    name: String,
    jobTitle: String,
    email: String,
  },
})

export const userModel = db['api/user']

userModel.create({
  id: 1,
  name: 'User 01',
  jobTitle: 'Manager',
  email: 'user01@mail.com',
})

for (let i = 1; i <= 10; i++) {
  userModel.create({
    id: i + 1,
    name: faker.name.fullName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  })
}

export type User = MSWDataInferModelType<typeof userModel>
