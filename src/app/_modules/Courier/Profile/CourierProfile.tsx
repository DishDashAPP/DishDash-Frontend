'use client'

import {FC} from "react";
import UserProfile from "@modules/Restaurant/Profile/UserProfile";
import {Controller, RegisterOptions, useForm} from "react-hook-form";
import TextInput from "@components/TextInput/TextInput";
import Button from "@components/Button/Button";

const user = {
    firstName: "امیرحسین",
    lastName: "عرب‌زاده",
    username: "A.H.Arabzadeh",
    phone: "09304087303",
}

type Inputs = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
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
        name: 'firstName',
        label: 'نام',
        rules: {
            required: 'نام الزامی است.',
        }
    },
    {
        name: 'lastName',
        label: 'نام‌خانوادگی',
        rules: {
            required: 'نام‌خانوادگی الزامی است.',
        }
    },
    {
        name: 'phoneNumber',
        label: 'شماره تماس',
        rules: {
            validate: (value: string) => {
                if (!value.match(/^09[0-9]{9}$/)) {
                    return 'شماره تماس باید با ۰۹ شروع شود و ۱۱ رقم باشد.'
                }
            },
        }
    }
]

const CourierProfile: FC = () => {

    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
    } = useForm<Inputs>({mode: 'onChange', defaultValues: {firstName: '', lastName: '', restaurantName: '', phoneNumber: '', address: ''}});

    const submit: (data: Inputs) => void = async (data) => {
        console.log(data);
    }

    return (
        <div className="flex flex-col w-full">
            <UserProfile user={user} className="mt-6"/>
            <form className="mt-12">
                {fields.map((field) => (
                    <Controller
                        key={field.name}
                        control={control}
                        name={field.name}
                        rules={field.rules}
                        render={({field: {value, onChange, onBlur, name}}) => (
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
                <Button
                    className="mt-2 w-full"
                    disabled={!isValid || isSubmitting}
                    onClick={handleSubmit(submit)}>
                    ثبت تغییرات
                </Button>
            </div>
        </div>
    )
}

export default CourierProfile;