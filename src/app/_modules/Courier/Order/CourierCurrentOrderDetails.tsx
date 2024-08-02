'use client'

import { FC } from 'react'
import Button from '@components/Button/Button'

const CourierCurrentOrderDetails: FC = () => {
    const handleClick = () => {
        console.log('handleClick')
    }

    return (
        <div className="flex flex-col p-6 bg-white absolute inset-x-0 bottom-[24px] mx-4 rounded-xl">
            <span className="text-green text-lg self-center font-medium">رایگان!</span>
            <div className="flex flex-col mt-6">
                <div className="flex items-stretch gap-x-2">
                    <div className="flex flex-col items-center justify-start min-h-full">
                        <div className="flex items-center justify-center bg-gray-primary min-w-[32px] min-h-[32px] rounded-full text-white">
                            1
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <span className="border-l border-gray-primary border-2 min-h-full" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-sm text-gray-primary">آدرس مبدا (رستوران)</h2>
                        <p className="font-medium text-xs text-gray-secondary mt-2 mb-4">
                            خیابان انقلاب، خیابان کارگر، پلاک ۱۲ خیابان انقلاب، خیا ن کارگر، پلاک ۱۲ خیابان انقلاب، خیان
                            کارگر، پلاک ۱۲ خیابان انقلاب، خیابان کارگر، پلاک ۱۲ خیابان انقلاب،
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <div className="flex flex-col items-center justify-start">
                        <div className="flex items-center justify-center bg-gray-primary w-[32px] h-[32px] rounded-full text-white">
                            2
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-sm text-gray-primary">آدرس مقصد (مشتری)</h2>
                        <p className="font-medium text-xs text-gray-secondary mt-2 mb-4">
                            خیابان انقلاب، خیابان کارگر، پلاک ۱۲
                        </p>
                    </div>
                </div>
            </div>
            <Button className="mt-2 w-full" onClick={handleClick}>
                تحویل سفارش
            </Button>
        </div>
    )
}

export default CourierCurrentOrderDetails
