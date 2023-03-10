import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { Button, Table, type TableProps } from 'components/Elements'

import { getRoutePath } from 'helpers'

import type { User } from 'api/usersAPI'

interface TableListUserProps {
  data?: User[]
  onDelete?: (id: number) => void
  deletingID?: User['id']
}

const TableListUser = ({ data, onDelete, deletingID }: TableListUserProps) => {
  const columns: TableProps<User>['columns'] = [
    {
      key: 'name',
      title: 'Name',
      width: '25%',
      render: (record) => record.name,
    },
    {
      key: 'jobTitle',
      title: 'Job Title',
      render: (record) => record.jobTitle,
    },
    {
      key: 'email',
      title: 'Email',
      width: '25%',
      render: (record) => record.email,
    },
    {
      key: 'edit',
      title: 'Edit',
      align: 'center',
      width: 60,
      render: ({ id }) => (
        <Link
          to={getRoutePath('/users/:id', {
            params: { id: id.toString() },
          })}
        >
          <Button disabled={deletingID === id}>
            <AiOutlineEdit />
          </Button>
        </Link>
      ),
    },
    {
      key: 'delete',
      title: 'Delete',
      align: 'center',
      width: 60,
      render: (record) => (
        <Button
          type="danger"
          loading={deletingID === record.id}
          onClick={() => onDelete?.(record.id)}
        >
          <AiOutlineDelete />
        </Button>
      ),
    },
  ]

  return <Table dataSource={data} columns={columns} />
}

export default TableListUser
