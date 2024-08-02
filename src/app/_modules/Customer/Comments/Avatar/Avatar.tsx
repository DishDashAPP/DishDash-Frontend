'use client'

import { FC } from 'react'
import AVATAR from '@public/avatar.svg'
import Image from 'next/image'

const Avatar: FC = () => {
    return (
        <div className={'flex items-center justify-center bg-white-background w-14 h-14 rounded-full'}>
            <Image src={AVATAR} alt={'avatar'} width={25} height={25} />
        </div>
    )
}

export default Avatar
