import { Form, FormItem, Input, Button } from 'components/Elements'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import type { User } from 'api/usersAPI'

type FormValues = User

interface UserFormProps {
  onSubmit: SubmitHandler<FormValues>
  initialValue?: FormValues
  loading?: boolean
  disabled?: boolean
}

const messages = {
  required: 'Required',
}
const validateSchema = z.object({
  id: z.number(),
  name: z.string().min(1, { message: messages.required }),
  jobTitle: z.string().min(1, { message: messages.required }),
  email: z.string().min(1, { message: messages.required }).email(),
})

const UserForm = ({
  initialValue,
  onSubmit,
  loading = false,
  disabled = false,
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validateSchema),
    values: initialValue,
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
      <FormItem label="ID" hidden>
        <Input {...register('id')} />
      </FormItem>

      <FormItem
        label="Name"
        hasError={errors.name != null}
        help={errors.name?.message}
      >
        <Input {...register('name')} />
      </FormItem>

      <FormItem
        label="Position"
        hasError={errors.jobTitle != null}
        help={errors.jobTitle?.message}
      >
        <Input {...register('jobTitle')} />
      </FormItem>

      <FormItem
        label="Email"
        hasError={errors.email != null}
        help={errors.email?.message}
      >
        <Input {...register('email')} />
      </FormItem>

      <Button type="primary" htmlType="submit" disabled={loading || disabled}>
        Submit
      </Button>
    </Form>
  )
}

export default UserForm
