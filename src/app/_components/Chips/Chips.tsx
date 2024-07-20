import {FC, useState} from "react";
import classJoin from "@utils/classJoin";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import AddNewCategory from "@modules/Restaurant/Menu/AddNewCategory";
import {TChip} from "@utils/types";

type TChips = {
    chips: TChip[]
    onCategoryChange?: (tChip: TChip) => any
    canAddNewCategory?: boolean
    className?: string
}

const Chips: FC<TChips> = ({chips, onCategoryChange, canAddNewCategory = true, className}) => {
    const [category, setCategory] = useState<string>('all')
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleAddCategory = () => {
        setBottomSheetOpen(true)
    }

    const handleCategoryChange = (tChip: TChip) => {
        setCategory(tChip.value)
        if (onCategoryChange)
            onCategoryChange(tChip)
    }

    return (
        <div className={classJoin([
            'flex items-center overflow-x-auto w-full max-w-[448px]',
            className
        ])}>
            {
                canAddNewCategory &&
              <button className="flex items-center justify-center px-4 py-2 text-primary rounded-full whitespace-nowrap"
                      onClick={handleAddCategory}>
                + دسته‌ی جدید
              </button>
            }
            <BottomSheet open={isBottomSheetOpen} onOpenChange={setBottomSheetOpen}>
                <h2 className="text-base font-semibold mt-4 mb-6">دسته‌ی جدید</h2>
                <AddNewCategory/>
            </BottomSheet>
            {chips.map((chip, index) => (
                <button key={index} className={classJoin([
                    'flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-full mr-2 whitespace-nowrap',
                    category === chip.value && 'bg-gray-primary text-white'
                ])} onClick={() => handleCategoryChange(chip)}>
                    {chip.title}
                </button>
            ))}
        </div>
    )
}

export default Chips;