declare type MSWDataInferModelType<
  T extends { getAll: (...args: any) => any }
> = Omit<ReturnType<T['getAll']>[number], symbol>
