import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import TextInput from '@components/TextInput/TextInput'
import Button from '@components/Button/Button'
import { createCategoryReq } from '@api/services/restaurantService'
import { toast } from 'sonner'

type Inputs = {
    name: string
}

type AddNewCategoryProps = {
    onAddCategory?: () => void
    onClosed: () => void
}

const AddNewCategory: FC<AddNewCategoryProps> = ({ onAddCategory, onClosed }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm<Inputs>({ mode: 'onChange', defaultValues: { name: '' } })

    const submit: (data: Inputs) => void = async (data) => {
        const res = await createCategoryReq(data)
        if (res.isSuccess) {
            toast.success('دسته با موفقیت افزوده شد.')
            onAddCategory?.()
            onClosed()
        }
    }

    return (
        <div className="flex flex-col w-full mt-4">
            <form>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: 'نام دسته الزامی است.',
                    }}
                    render={({ field: { value, onChange, onBlur, name } }) => (
                        <TextInput
                            className="mb-6"
                            type="text"
                            fullWidth
                            label="عنوان دسته"
                            id="name"
                            error={errors.name?.message}
                            isOptional={false}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            name={name}
                            autoComplete="off"
                        />
                    )}
                />
                <Button className="mt-2 w-full" disabled={!isValid || isSubmitting} onClick={handleSubmit(submit)}>
                    افزودن دسته‌ی جدید
                </Button>
            </form>
        </div>
    )
}

export default AddNewCategory
