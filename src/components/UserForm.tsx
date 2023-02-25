import { Form, FormItem, Input, Button } from 'components/Elements'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import type { User } from 'api/usersAPI'

type FormValues = User

interface UserFormProps {
  onSubmit: SubmitHandler<FormValues>
  loading?: boolean
}

const messages = {
  required: 'Required',
}
const validateSchema = z.object({
  name: z.string().min(1, { message: messages.required }),
  position: z.string().min(1, { message: messages.required }),
  email: z.string().min(1, { message: messages.required }).email(),
  phone: z.string().min(1, { message: messages.required }),
})

const UserForm = ({ onSubmit, loading }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validateSchema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        label="Name"
        hasError={errors.name != null}
        help={errors.name?.message}
      >
        <Input {...register('name')} />
      </FormItem>

      <FormItem
        label="Position"
        hasError={errors.position != null}
        help={errors.position?.message}
      >
        <Input {...register('position')} />
      </FormItem>

      <FormItem
        label="Email"
        hasError={errors.email != null}
        help={errors.email?.message}
      >
        <Input {...register('email')} />
      </FormItem>

      <FormItem
        label="Phone"
        hasError={errors.phone != null}
        help={errors.phone?.message}
      >
        <Input {...register('phone')} />
      </FormItem>

      <Button type="primary" htmlType="submit" loading={loading}>
        Submit
      </Button>
    </Form>
  )
}

export default UserForm
