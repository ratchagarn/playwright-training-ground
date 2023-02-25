import { factory, primaryKey } from '@mswjs/data'
import { faker } from '@faker-js/faker'

const db = factory({
  ['api/user']: {
    id: primaryKey(faker.datatype.uuid),
    name: String,
    position: String,
    email: String,
    phone: String,
  },
})

export const userModel = db['api/user']

userModel.create({
  name: 'User 01',
  position: 'Manager',
  email: 'user01@mail.com',
  phone: '000-0000-00000',
})

for (let i = 0; i < 9; i++) {
  userModel.create({
    name: faker.name.fullName(),
    position: faker.name.jobTitle(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  })
}

export type User = MSWDataInferModelType<typeof userModel>
