'use client'

import { FC } from 'react'
import Image from 'next/image'
import LOGO from '@public/logo.svg'
import { Controller, RegisterOptions, useForm } from 'react-hook-form'
import TextInput from '@components/TextInput/TextInput'
import Button from '@components/Button/Button'
import { COURIER, CUSTOMER, RESTAURANT, SIGNUP } from '@utils/links'
import Link from 'next/link'
import { loginReq, signupReq } from '@api/services/authService'
import { useRouter } from 'next/navigation'
import useAuthStore from '@store/authStore'
import { toast } from 'sonner'

type Inputs = {
    username: string
    password: string
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
        name: 'username',
        label: 'نام کاربری',
        rules: {
            required: 'نام کاربری الزامی است.',
        },
    },
    {
        name: 'password',
        label: 'گذرواژه',
        rules: {
            required: 'گذرواژه الزامی است.',
            minLength: {
                value: 5,
                message: 'گذرواژه باید حداقل ۵ کاراکتر باشد.',
            },
            maxLength: {
                value: 20,
                message: 'گذرواژه باید حداکثر ۲۰ کاراکتر باشد.',
            },
        },
    },
]

const Login: FC = (props) => {
    const router = useRouter()
    const { setToken, setRole } = useAuthStore()

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<Inputs>({
        mode: 'onChange',
        defaultValues: { username: '', password: '' },
    })

    const submit: (data: Inputs) => void = async (data) => {
        const res = await loginReq(data.username, data.password)
        if (res.isSuccess) {
            toast.success('ورود موفقیت‌آمیز بود.')
            const { token, role } = res.data
            setToken(token)
            setRole(role)

            if (role === 'CUSTOMER') {
                router.push(CUSTOMER)
            } else if (role === 'RESTAURANT_OWNER') {
                router.push(RESTAURANT)
            } else if (role === 'DELIVERY_PERSON') {
                router.push(COURIER)
            } else {
                console.error('Unknown role:', role)
            }
        }
    }

    return (
        <div className="flex flex-col w-full mt-4">
            <div className="flex items-center justify-end">
                <Image src={LOGO} width={40} height={40} alt="logo" />
            </div>
            <div className="bg-white rounded-lg p-6 mt-20">
                <h1 className="text-base font-medium">ورود</h1>
                <p className="text-sm mt-10 mb-8">
                    لطفاً نام‌کاربری و گذرواژه خود را وارد کنید تا وارد حساب کاربری خود شوید.
                </p>
                <form>
                    {fields.map((field) => (
                        <Controller
                            key={field.name}
                            control={control}
                            name={field.name}
                            rules={field.rules}
                            render={({ field: { value, onChange, onBlur, name } }) => (
                                <TextInput
                                    className="mb-6"
                                    type={field.name === 'password' ? 'password' : 'text'}
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
                    <Button className="mt-2 w-full" disabled={!isValid || isSubmitting} onClick={handleSubmit(submit)}>
                        ورود
                    </Button>
                </form>
                <div className="flex items-center justify-between w-full mt-4">
                    <span className="text-sm">اگر تا کنون ثبت‌نام نکرده‌اید</span>
                    <Link href={SIGNUP} className="text-sm text-primary hover:text-brand">
                        ثبت‌نام
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
