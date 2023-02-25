import type { ReactNode } from 'react'

interface TableColumn<T extends any> {
  key: string
  title: string
  render(record: T): ReactNode
  width?: number | string
  align?: 'left' | 'center' | 'right'
}

export interface TableProps<T extends any> {
  dataSource?: T[]
  rowKey?: string
  columns: TableColumn<T>[]
}

export const Table = <T extends { id: string }>({
  dataSource = [],
  rowKey = 'id',
  columns,
}: TableProps<T>) => {
  return (
    <div className="overflow-hidden rounded-md shadow-sm shadow-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                style={{ width: column.width }}
                align={column.align ?? 'left'}
                className="border border-solid border-gray-200 bg-gray-200 p-2"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-4">
                <div className="text-center text-gray-500">No Data</div>
              </td>
            </tr>
          ) : (
            dataSource.map((item) => (
              <tr
                // TODO: Remove as `id`
                key={item[rowKey as 'id']}
                className="transition-all even:bg-gray-100 hover:bg-blue-100"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    align={column.align ?? 'left'}
                    className="border border-solid border-gray-300 p-2"
                  >
                    {column.render(item)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
