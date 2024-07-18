import {FC} from "react";

type NewFoodItemProps = {
    mode: 'add' | 'edit',
}

const NewFoodItem: FC<NewFoodItemProps> = ({mode}) => {

    const title = mode === 'add' ? 'افزودن محصول جدید' : 'ویرایش محصول';
    return (
        <div>
            <h2 className="text-base font-semibold mt-4 mb-6">{title}</h2>
            <h1>Form</h1>
        </div>
    )
}

export default NewFoodItem;