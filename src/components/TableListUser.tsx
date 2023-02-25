import { Link } from 'react-router-dom'

import { Button, Table, type TableProps } from 'components/Elements'

import { getRoutePath } from 'AppRoutes'

import type { User } from 'api/usersAPI'

interface TableListUserProps {
  data?: User[]
  onDelete?: (id: string) => void
  deleteLoading?: boolean
}

const TableListUser = ({
  data,
  onDelete,
  deleteLoading = false,
}: TableListUserProps) => {
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
        <Link to={getRoutePath('usersUpdatePage', { params: { id } })}>
          <Button>✎</Button>
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
          loading={deleteLoading}
          onClick={() => onDelete?.(record.id)}
        >
          ✕
        </Button>
      ),
    },
  ]

  return <Table dataSource={data} columns={columns} />
}

export default TableListUser
