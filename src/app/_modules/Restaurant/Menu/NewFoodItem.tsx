import {FC} from "react";
import {Controller, RegisterOptions, useForm} from "react-hook-form";
import TextInput from "@components/TextInput/TextInput";
import Button from "@components/Button/Button";

type NewFoodItemProps = {
    mode: 'add' | 'edit',
}

type Inputs = {
    title: string,
    description: string,
    price: string,
    category: string
    quantity: string,
}

type IFieldType = {
    name: keyof Inputs,
    label: string,
    rules?: RegisterOptions<Inputs, keyof Inputs>,
    minLength?: number,
    maxLength?: number,
    onChange?: (val?: string, onChange?: (val?: string) => void) => void
}

const fields: IFieldType[] = [
    {
        name: 'title',
        label: 'عنوان',
        rules: {
            required: 'عنوان الزامی است.',
        }
    },
    {
        name: 'description',
        label: 'توضیحات',
        rules: {
            required: 'توضیحات الزامی است.',
        }
    },
    {
        name: 'price',
        label: 'قیمت',
        rules: {
            required: 'قیمت الزامی است.',
        }
    },
    {
        name: 'category',
        label: 'دسته‌بندی'
    },
    {
        name: 'quantity',
        label: 'موجودی',
        rules: {
            required: 'موجودی الزامی است.',
        }
    }
]

const NewFoodItem: FC<NewFoodItemProps> = ({mode}) => {

    const {
        control,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
    } = useForm<Inputs>({mode: 'onChange', defaultValues: {title: '', description: '', price: '', category: '', quantity: ''}});

    const title = mode === 'add' ? 'افزودن محصول جدید' : 'ویرایش محصول';
    const buttonText = mode === 'add' ? 'افزودن محصول' : 'ویرایش محصول';

    const submit: (data: Inputs) => void = async (data) => {
        console.log(data);
    }

    return (
        <div>
            <h2 className="text-base font-semibold mt-4 mb-6">{title}</h2>
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
                <Button
                    className="mt-2 w-full"
                    disabled={!isValid || isSubmitting}
                    onClick={handleSubmit(submit)}>
                    {buttonText}
                </Button>
            </form>
        </div>
    )
}

export default NewFoodItem;