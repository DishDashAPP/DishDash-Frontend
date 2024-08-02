'use client'

import { FC } from 'react'
import { CommentType } from '@utils/types'
import AVATAR from '../../../../public/avatar.svg'
import Image from 'next/image'
import Avatar from '@modules/Customer/Comments/Avatar/Avatar'
import { Rating } from '@mui/material'

const Comment: FC<{ comment: CommentType }> = ({ comment }) => {
    return (
        <>
            <div className={'pl-8 pr-14 mt-7 mb-8'}>
                <div className={'flex'}>
                    <Avatar />
                    <div className={'text-sm text-black mr-9'}>
                        <div className={'font-medium'}>{comment.name}</div>
                        <div className={'flex justify-center items-center mt-2'}>
                            <span className={'text-base text-black ml-2 -mb-1'}>{comment.rate}</span>
                            <Rating dir={'ltr'} value={comment.rate} precision={0.1} readOnly />
                        </div>
                    </div>
                </div>
                <div className={'text-sm text-gray-paragraph mt-5'}>{comment.comment}</div>
            </div>
            <div className={'border-t border-gray-line mt-2'} />
        </>
    )
}

export default Comment
