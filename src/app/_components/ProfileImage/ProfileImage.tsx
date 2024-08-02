'use client'

import { AvatarGenerator } from 'random-avatar-generator'
import classJoin from '@utils/classJoin'
import Image from 'next/image'

export default function ProfileImage({ name, className }: { name: string; className?: string }) {
    const avatarGenerator = new AvatarGenerator()

    return (
        <Image
            width={56}
            height={56}
            className={classJoin(['w-14 h-14 rounded-full', className])}
            src={avatarGenerator.generateRandomAvatar(name)}
            alt={'profile image'}
        />
    )
}
