'use client'

import { FC } from 'react'
import Image from 'next/image'
import STAR from '@public/star.svg'
import classJoin from '@utils/classJoin'

type RateProps = {
    rate: string
    variant?: 'small' | 'normal'
}

const Rate: FC<RateProps> = ({ rate, variant = 'normal' }) => {
    const starSize = variant === 'normal' ? 20 : 15
    const textSize = variant === 'normal' ? 'text-sm' : 'text-xs'

    return (
        <div className={'flex items-center justify-between bg-white-background px-1 py-0.5 rounded'}>
            <Image src={STAR} alt={'star'} width={starSize} height={starSize} className={'ml-0.5'} />
            <span className={classJoin([textSize, 'text-sm text-gray-primary font-normal ml-0.5'])}>{rate}</span>
        </div>
    )
}

export default Rate
