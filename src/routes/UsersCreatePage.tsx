import PageTitle from 'components/PageTitle'
import { Form, FormItem, Input, Button } from 'components/Elements'

const UserCreatePage = () => {
  return (
    <>
      <PageTitle>Users Create Page</PageTitle>

      <Form>
        <FormItem label="Name">
          <Input />
        </FormItem>

        <FormItem label="Position">
          <Input />
        </FormItem>

        <FormItem label="Email">
          <Input />
        </FormItem>

        <FormItem label="Phone">
          <Input />
        </FormItem>

        <Button type="primary">Submit</Button>
      </Form>
    </>
  )
}

export default UserCreatePage
