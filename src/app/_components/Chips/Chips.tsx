import {FC, useState} from "react";
import classJoin from "@utils/classJoin";
import OrderDetails from "@modules/Restaurant/Orders/OrderDetails";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import AddNewCategory from "@modules/Restaurant/Menu/AddNewCategory";

type TChip = {
    title: string
    value: string
}

type TChips = {
    chips: TChip[]
    active?: string
    onClick: (value: string) => () => void
    className?: string
}

const Chips: FC<TChips> = ({chips, active, onClick, className}) => {

    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleAddCategory = () => {
        setBottomSheetOpen(true)
    }

    return (
        <div className={classJoin([
            'flex items-center overflow-x-auto w-full max-w-[448px]',
            className
        ])}>
            <button className="flex items-center justify-center px-4 py-2 text-primary rounded-full whitespace-nowrap" onClick={handleAddCategory}>
                + دسته‌ی جدید
            </button>
            <BottomSheet open={isBottomSheetOpen} onOpenChange={setBottomSheetOpen}>
                <h2 className="text-base font-semibold mt-4 mb-6">دسته‌ی جدید</h2>
                <AddNewCategory />
            </BottomSheet>
            {chips.map((chip, index) => (
                <button key={index} className={classJoin([
                    'flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-full mr-2 whitespace-nowrap',
                    active === chip.value && 'bg-gray-primary text-white'
                ])} onClick={onClick(chip.value)}>
                    {chip.title}
                </button>
            ))}
        </div>
    )
}

export default Chips;