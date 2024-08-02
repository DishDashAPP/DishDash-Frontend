import { FC, ReactNode } from 'react'
import classJoin from '../../_utils/classJoin'

export interface IButtonProps {
    /**
     * variant of button
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'danger'
    /**
     * Disabled state of button
     */
    disabled?: boolean
    /**
     * Custom class name
     */
    className?: string
    /**
     * Optional click handler
     */
    onClick?: (e?: any) => void
}

type TButtonProps = IButtonProps &
    (
        | {
              children?: never
              label: string
          }
        | {
              label?: never
              children: ReactNode
          }
    )

/**
 * Primary UI component for user interaction
 */
const Button: FC<TButtonProps> = (props) => {
    const { variant = 'primary', label, disabled = false, className, children, ...otherProps } = props
    const mode = {
        primary: 'bg-primary text-white active:bg-gray-secondary',
        secondary: 'bg-gray-primary text-white active:bg-gray-secondary',
        outline: 'bg-transparent border border-gray-primary text-gray-primary',
        danger: 'bg-red text-white',
    }[variant]

    return (
        <button
            type="button"
            className={classJoin([
                'rounded-xl p-4 text-sm font-medium',
                disabled ? 'bg-gray-disabled text-white cursor-not-allowed' : mode,
                className,
            ])}
            disabled={disabled}
            aria-label={label}
            {...otherProps}
        >
            {label ? label : children}
        </button>
    )
}

export default Button
