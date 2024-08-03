'use client'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import TextInput from '@components/TextInput/TextInput'
import Button from '@components/Button/Button'
import { Rating } from '@mui/material'
import { setReviewReq, setOrderRateReq, setDeliveryPersonRateReq } from '@api/services/customerService'
import { toast } from 'sonner'

type CommentBottomSheetProps = {
    orderId: string
}

const CommentBottomSheet: FC<CommentBottomSheetProps> = ({ orderId }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            comment: '',
            restaurantRate: 0,
            courierRate: 0,
        },
    })

    const submit = async (data: any) => {
        try {
            await setReviewReq(orderId, data.comment)
            await setOrderRateReq(orderId, data.restaurantRate)
            await setDeliveryPersonRateReq(orderId, data.courierRate)

            toast.success('نظر و امتیاز با موفقیت ثبت شد.')
        } catch (error) {
            toast.error('خطایی در ثبت نظر و امتیاز رخ داده است.')
        }
    }

    return (
        <div className={'p-6 text-black'}>
            <div className={'text-base font-medium'}>ثبت نظر و امتیاز</div>
            <form className={'mt-12'}>
                <Controller
                    key={'comment'}
                    control={control}
                    name={'comment'}
                    rules={{
                        required: 'نظر الزامی است.',
                    }}
                    render={({ field: { value, onChange, onBlur, name } }) => (
                        <TextInput
                            className={''}
                            type={'text'}
                            fullWidth
                            label={'نظر'}
                            id={'comment'}
                            error={`${errors['comment']?.message || ''}`}
                            isOptional={false}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            name={name}
                            autoComplete={'off'}
                        />
                    )}
                />

                <div className={'flex justify-between mt-6'}>
                    <span className={'text-sm'}>به رستوران چه امتیازی می‌دهید؟</span>

                    <Controller
                        key={'restaurantRate'}
                        control={control}
                        name={'restaurantRate'}
                        rules={{
                            required: 'امتیاز الزامی است.',
                        }}
                        render={({ field: { value, onChange, onBlur, name } }) => (
                            <Rating
                                dir={'ltr'}
                                name={'restaurantRate'}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                </div>

                <div className={'flex justify-between mt-6'}>
                    <span className={'text-sm'}>به پیک چه امتیازی می‌دهید؟</span>

                    <Controller
                        key={'courierRate'}
                        control={control}
                        name={'courierRate'}
                        rules={{
                            required: 'امتیاز الزامی است.',
                        }}
                        render={({ field: { value, onChange, onBlur, name } }) => (
                            <Rating
                                dir={'ltr'}
                                name={'courierRate'}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                </div>

                <Button className={'mt-8 w-full'} disabled={!isValid || isSubmitting} onClick={handleSubmit(submit)}>
                    ثبت
                </Button>
            </form>
        </div>
    )
}

export default CommentBottomSheet
