'use client'

import { FC, useEffect, useState } from 'react'
import UserProfile from '@components/UserProfile/UserProfile'
import { Controller, RegisterOptions, useForm } from 'react-hook-form'
import TextInput from '@components/TextInput/TextInput'
import Button from '@components/Button/Button'
import { getDeliveryPersonProfileReq, updateDeliveryPersonProfileReq } from '@api/services/deliveryPersonService'
import { toEnglishDigits } from '@utils/toEnglishDigits'
import { toast } from 'sonner'

type Inputs = {
    firstName: string
    lastName: string
    phoneNumber: string
}

type TFieldType = {
    name: keyof Inputs
    label: string
    rules?: RegisterOptions<Inputs, keyof Inputs>
    minLength?: number
    maxLength?: number
    onChange?: (val?: string, onChange?: (val?: string) => void) => void
}

const fields: TFieldType[] = [
    {
        name: 'firstName',
        label: 'نام',
        rules: {
            required: 'نام الزامی است.',
        },
    },
    {
        name: 'lastName',
        label: 'نام‌خانوادگی',
        rules: {
            required: 'نام‌خانوادگی الزامی است.',
        },
    },
    {
        name: 'phoneNumber',
        label: 'شماره تماس',
        rules: {
            validate: (value: string) => {
                if (!toEnglishDigits(value)?.match(/^09[0-9]{9}$/)) {
                    return 'شماره تماس باید با ۰۹ شروع شود و ۱۱ رقم باشد.'
                }
            },
        },
    },
]

const CourierProfile: FC = () => {
    const [user, setUser] = useState<Inputs & { username: string }>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        username: '',
    })
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        setValue,
    } = useForm<Inputs>({
        mode: 'onChange',
        defaultValues: { firstName: '', lastName: '', phoneNumber: '' },
    })

    const fetchProfile = async () => {
        const res = await getDeliveryPersonProfileReq()
        if (res.isSuccess) {
            const { first_name, last_name, phone_number, username } = res.data
            setValue('firstName', first_name)
            setValue('lastName', last_name)
            setValue('phoneNumber', phone_number)
            setUser({
                firstName: first_name,
                lastName: last_name,
                phoneNumber: phone_number,
                username: username || '',
            })
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [setValue])

    const submit: (data: Inputs) => void = async (data: Inputs) => {
        const res = await updateDeliveryPersonProfileReq({
            first_name: data.firstName,
            last_name: data.lastName,
            phone_number: toEnglishDigits(data.phoneNumber),
        })
        if (res.isSuccess) {
            toast.success('اطلاعات شما با موفقیت به‌روزرسانی شد.')
            await fetchProfile()
        }
    }

    return (
        <div className="flex flex-col w-full">
            <UserProfile user={user} className="mt-6" />
            <form className="mt-12">
                {fields.map((field) => (
                    <Controller
                        key={field.name}
                        control={control}
                        name={field.name}
                        rules={field.rules}
                        render={({ field: { value, onChange, onBlur, name } }) => (
                            <TextInput
                                className="mb-6"
                                type="text"
                                fullWidth
                                label={field.label}
                                id={field.name}
                                error={`${errors[field.name]?.message || ''}`}
                                isOptional={!field.rules?.required}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={name}
                                autoComplete="off"
                            />
                        )}
                    />
                ))}
            </form>
            <div className="flex flex-col justify-end h-full pb-6">
                <Button className="mt-2 w-full" disabled={!isValid || isSubmitting} onClick={handleSubmit(submit)}>
                    ثبت تغییرات
                </Button>
            </div>
        </div>
    )
}

export default CourierProfile
