import { useRef, useCallback, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'react-toastify'

import { Button } from 'components/Elements'

const useCustomToast = () => {
  const toastId = useRef<string | number>('')

  const toastConfirm = useCallback(
    ({ title, onOK, onCancel }: ConfirmProps) => {
      toastId.current = toast(
        <>
          <Confirm
            title={title}
            onOK={() => {
              onOK()
              toast.dismiss(toastId.current)
            }}
            onCancel={() => {
              onCancel?.()
              toast.dismiss(toastId.current)
            }}
          />

          {createPortal(
            <div
              className="fixed top-0 left-0 right-0 bottom-0"
              style={{ zIndex: 'calc(var(--toastify-z-index) - 1)' }}
            />,
            document.body
          )}
        </>,
        {
          toastId: 'toast-confirm',
          autoClose: false,
          closeOnClick: false,
          closeButton: false,
        }
      )
    },
    []
  )

  return {
    toast,
    toastConfirm,
  }
}

export default useCustomToast

interface ConfirmProps {
  title?: ReactNode
  onOK: VoidFunction
  onCancel?: VoidFunction
}

const Confirm = ({ title, onOK, onCancel }: ConfirmProps) => {
  return (
    <div className="p-6">
      <h3 className="mb-4 text-center">
        {title ? title : 'Confrim Your Action'}
      </h3>

      <div className="flex justify-center gap-4">
        <Button
          type="danger"
          size="lg"
          onClick={onCancel}
          style={{ width: 100 }}
        >
          CANCEL
        </Button>
        <Button type="primary" size="lg" onClick={onOK} style={{ width: 100 }}>
          OK
        </Button>
      </div>
    </div>
  )
}
