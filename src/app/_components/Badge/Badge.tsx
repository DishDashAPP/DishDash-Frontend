import { FC } from 'react'
import classJoin from '@utils/classJoin'

export interface IBadgeProps {
  text?: string
  color?: 'red' | 'gray'
  bordered?: boolean
  className?: string
}

const Badge: FC<IBadgeProps> = (props) => {
  const { bordered, text, className = '', color = 'red' } = props

  const isEmpty = !text

  let innerContent = null

  if (text) {
    innerContent = <span>{text}</span>
  }

  return (
    <div
      className={classJoin([
        'flex justify-center items-center font-bold text-10 rounded-full',
        bordered ? 'border-white' : '',
        bordered ? 'border-2' : '',
        color === 'red'
          ? 'bg-red text-white'
          : 'bg-white-background text-gray-tertiary',
        isEmpty
          ? bordered
            ? 'w-[10px] h-[10px]'
            : 'w-[6px] h-[6px]'
          : 'min-w-[16px] px-1',
        className,
      ])}
    >
      {innerContent}
    </div>
  )
}

export default Badge
