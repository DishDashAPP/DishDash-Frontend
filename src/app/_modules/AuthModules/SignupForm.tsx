'use client'

import {FC} from "react";
import {Controller, RegisterOptions, useForm} from "react-hook-form";
import TextInput from "@components/TextInput/TextInput";
import Button from "@components/Button/Button";
import Link from "next/link";
import {LOGIN} from "@utils/links";
import {UserType} from "@utils/types";
import {loginReq, signupReq} from "@api/services/authService";

type TSingUpFormProps = {
    type: UserType
}

type Inputs = {
    username: string,
    password: string,
    confirmPassword: string
}

type TFieldType = {
    name: keyof Inputs,
    label: string,
    rules?: RegisterOptions<Inputs, keyof Inputs>,
    minLength?: number,
    maxLength?: number,
    onChange?: (val?: string, onChange?: (val?: string) => void) => void
}

const fields: TFieldType[] = [
    {
        name: 'username',
        label: 'نام کاربری',
        rules: {
            required: 'نام کاربری الزامی است.',
        }
    },
    {
        name: 'password',
        label: 'گذرواژه',
        rules: {
            required: 'گذرواژه الزامی است.',
            minLength: {
                value: 6,
                message: 'گذرواژه باید حداقل ۶ کاراکتر باشد.'
            },
            maxLength: {
                value: 20,
                message: 'گذرواژه باید حداکثر ۲۰ کاراکتر باشد.'
            }
        }
    },
    {
        name: 'confirmPassword',
        label: 'تکرار گذرواژه',
        rules: {
            required: 'تکرار گذرواژه الزامی است.',
            validate: (value, allValues) => value === allValues?.password || 'گذرواژه‌ها باید مطابقت داشته باشند.'
        }
    }
]

const SignupForm: FC<TSingUpFormProps> = ({ type }) => {

    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
    } = useForm<Inputs>({mode: 'onChange', defaultValues: {username: '', password: ''}});

    const submit: (data: Inputs) => void = async (data) => {
        const res = await signupReq(data.username, data.password, type)
        if (res.isSuccess) {
            const res = await loginReq(data.username, data.password)
            if (res.isSuccess) {
                console.log('User logged in successfully')
            }
        }
    }

    const formTitle: string = {
        CUSTOMER: 'ثبت نام مشتری',
        RESTAURANT_OWNER: 'ثبت نام رستوران',
        DELIVERY_PERSON: 'ثبت نام پیک'
    }[type]

    return (
        <div className="flex flex-col w-full">
            <div className="bg-white rounded-b-lg p-6">
                <h1 className="text-base font-medium">{formTitle}</h1>
                <p className="text-sm mt-10 mb-8">لطفاً اطلاعات خواسته‌شده را برای ایجاد حساب کاربری خود وارد کنید.</p>
                <form>
                    {fields.map((field) => (
                        <Controller
                            key={field.name}
                            control={control}
                            name={field.name}
                            rules={field.rules}
                            render={({field: {value, onChange, onBlur, name}}) => (
                                <TextInput
                                    className="mb-6"
                                    type={field.name === 'username' ? 'text' : 'password'}
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
                    <Button
                        className="mt-2 w-full"
                        disabled={!isValid || isSubmitting}
                        onClick={handleSubmit(submit)}>
                        ثبت‌نام
                    </Button>
                </form>
                <div className="flex items-center justify-between w-full mt-4">
                    <span className="text-sm">قبلا ثبت نام کردید؟</span>
                    <Link href={LOGIN} className="text-sm text-primary hover:text-brand">ورود</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;
