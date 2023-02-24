import { ENTITY_TYPE, PRIMARY_KEY } from '@mswjs/data'

export type InferModelType<T extends { getAll: (...args: any) => any }> = Omit<
  ReturnType<T['getAll']>[number],
  typeof ENTITY_TYPE | typeof PRIMARY_KEY
>
