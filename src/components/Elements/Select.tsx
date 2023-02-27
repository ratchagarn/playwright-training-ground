import { forwardRef, type HTMLProps } from 'react'
import { clsx } from 'clsx'

const arrowIcon =
  "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")"

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options?: { label: string; value: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { defaultValue, value, className, options = [], ...props }: SelectProps,
    ref
  ) => {
    const acturalClassNames = clsx(
      'block w-full appearance-none rounded border p-2 outline-none',
      {
        [className ?? '']: typeof className === 'string',
      }
    )

    return (
      <select
        {...props}
        ref={ref}
        className={acturalClassNames}
        style={{
          backgroundImage: arrowIcon,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0.5rem center',
          backgroundSize: '1em',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    )
  }
)
