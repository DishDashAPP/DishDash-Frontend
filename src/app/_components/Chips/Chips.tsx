import { FC, useState } from 'react'
import classJoin from '@utils/classJoin'
import BottomSheet from '@components/BottomSheet/BottomSheet'
import AddNewCategory from '@modules/Restaurant/Menu/AddNewCategory'
import { TChip } from '@utils/types'
import { allCategory } from '@utils/consts'

type TChips = {
    chips: TChip[]
    onCategoryChange: (tChip: TChip) => any
    canAddNewCategory?: boolean
    updateCategories?: () => void
    className?: string
}

const Chips: FC<TChips> = ({ chips, onCategoryChange, canAddNewCategory = true, updateCategories, className }) => {
    const [category, setCategory] = useState<TChip>(allCategory)
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false)

    const handleAddCategory = () => {
        setBottomSheetOpen(true)
    }

    const handleCategoryChange = (tChip: TChip) => {
        setCategory(tChip)
        if (onCategoryChange) onCategoryChange(tChip)
    }

    return (
        <div className={classJoin(['flex items-center overflow-x-auto w-full max-w-[448px]', className])}>
            {canAddNewCategory && (
                <button
                    className="flex items-center justify-center px-4 py-2 text-primary rounded-full whitespace-nowrap"
                    onClick={handleAddCategory}
                >
                    + دسته‌ی جدید
                </button>
            )}
            <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)}>
                <h2 className="text-base font-semibold mt-4 mb-6">دسته‌ی جدید</h2>
                <AddNewCategory onAddCategory={updateCategories} onClosed={() => setBottomSheetOpen(false)} />
            </BottomSheet>
            {chips.map((chip, index) => (
                <button
                    key={index}
                    className={classJoin([
                        'flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-full mr-2 whitespace-nowrap',
                        category.id === chip.id && 'bg-gray-primary text-white',
                    ])}
                    onClick={() => handleCategoryChange(chip)}
                >
                    {chip.name}
                </button>
            ))}
        </div>
    )
}

export default Chips
