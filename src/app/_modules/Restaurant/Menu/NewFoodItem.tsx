import { FC, useEffect, useState } from 'react'
import { Controller, RegisterOptions, useForm } from 'react-hook-form'
import TextInput from '@components/TextInput/TextInput'
import Button from '@components/Button/Button'
import { createFoodReq, editFoodReq, getAllCategoriesReq } from '@api/services/restaurantService' // Adjust the import path accordingly
import { MenuItem, TChip } from '@utils/types'
import Dropdown from '@components/Dropdown/Dropdown'
import { toEnglishDigits } from '@utils/toEnglishDigits'

type NewFoodItemProps = {
    mode: 'add' | 'edit'
    foodItem?: MenuItem
    onClose: () => void
    onUpdate: () => void
}

type Inputs = {
    name: string
    description: string
    price: string
    category: string
    quantity: string
}

type IFieldType = {
    name: keyof Inputs
    label: string
    rules?: RegisterOptions<Inputs, keyof Inputs>
    minLength?: number
    maxLength?: number
    onChange?: (val?: string, onChange?: (val?: string) => void) => void
}

const fields: IFieldType[] = [
    {
        name: 'name',
        label: 'عنوان',
        rules: {
            required: 'عنوان الزامی است.',
        },
    },
    {
        name: 'description',
        label: 'توضیحات',
        rules: {
            required: 'توضیحات الزامی است.',
        },
    },
    {
        name: 'price',
        label: 'قیمت',
        rules: {
            required: 'قیمت الزامی است.',
        },
    },
    {
        name: 'quantity',
        label: 'موجودی',
        rules: {
            required: 'موجودی الزامی است.',
        },
    },
]

const NewFoodItem: FC<NewFoodItemProps> = ({ mode, foodItem, onClose, onUpdate }) => {
    const [categories, setCategories] = useState<TChip[]>([])
    const [selectedCategory, setSelectedCategory] = useState<{
        id: number
        name: string
    } | null>(null)

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        setValue,
    } = useForm<Inputs>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            description: '',
            price: '',
            category: '',
            quantity: '',
        },
    })

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesRes = await getAllCategoriesReq()
            if (categoriesRes.isSuccess) {
                setCategories(categoriesRes.data)
                if (mode === 'edit' && foodItem) {
                    setValue('name', foodItem.name)
                    setValue('description', foodItem.description)
                    setValue('price', foodItem.price.amount.toString())
                    setSelectedCategory({
                        id: foodItem.category_id,
                        name: categoriesRes.data.find((cat) => cat.id === foodItem.category_id)?.name || '',
                    })
                    setValue('quantity', foodItem.stock.toString())
                }
            }
        }

        fetchCategories()
    }, [mode, foodItem, setValue])

    const title: string = mode === 'add' ? 'افزودن محصول جدید' : 'ویرایش محصول'
    const buttonText: string = mode === 'add' ? 'افزودن محصول' : 'ویرایش محصول'

    const submit: (data: Inputs) => void = async (data) => {
        const foodData: Omit<MenuItem, 'id'> = {
            name: data.name,
            description: data.description,
            stock: parseInt(toEnglishDigits(data.quantity), 10),
            price: { amount: parseFloat(toEnglishDigits(data.price)), unit: 'TOMAN' },
            category_id: selectedCategory ? selectedCategory.id : 0,
        }

        if (mode === 'add') {
            const response = await createFoodReq(foodData)
            if (response.isSuccess) {
                onUpdate()
                onClose()
            }
        } else if (mode === 'edit' && foodItem) {
            const response = await editFoodReq(foodItem.id.toString(), foodData)
            if (response.isSuccess) {
                onUpdate()
                onClose()
            }
        }
    }

    return (
        <div>
            <h2 className="text-base font-semibold mt-4 mb-6">{title}</h2>
            <form className="mt-12">
                <Dropdown
                    items={categories}
                    selectedItem={selectedCategory}
                    onSelect={setSelectedCategory}
                    label="دسته‌بندی"
                />
                {fields.map((field) => (
                    <Controller
                        key={field.name}
                        control={control}
                        name={field.name}
                        rules={field.rules}
                        render={({ field: { value, onChange, onBlur, name } }) => (
                            <TextInput
                                className="mt-6"
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
                <Button className="mt-8 w-full" disabled={!isValid || isSubmitting} onClick={handleSubmit(submit)}>
                    {buttonText}
                </Button>
            </form>
        </div>
    )
}

export default NewFoodItem
