import { Button, Table, type TableProps } from 'components/Elements'

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
      render: (record) => record.name,
    },
    {
      key: 'postition',
      title: 'Position',
      width: '25%',
      render: (record) => record.position,
    },
    {
      key: 'email',
      title: 'Email',
      width: '25%',
      render: (record) => record.email,
    },
    {
      key: 'phone',
      title: 'Phone',
      width: '25%',
      render: (record) => record.phone,
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
