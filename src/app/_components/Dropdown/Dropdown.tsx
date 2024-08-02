import { FC, useState } from 'react'

type DropdownProps = {
    items: { id: number; name: string }[]
    selectedItem: { id: number; name: string } | null
    onSelect: (item: { id: number; name: string }) => void
    label: string
}

const Dropdown: FC<DropdownProps> = ({ items, selectedItem, onSelect, label }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (item: { id: number; name: string }) => {
        onSelect(item)
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block text-right w-full">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-between items-center rounded-xl bg-white px-3 py-4 text-sm font-semibold text-gray-primary border border-gray-card_border hover:bg-gray-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedItem ? selectedItem.name : label}
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg border border-gray-card_border focus:outline-none">
                    <div className="py-1">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleSelect(item)}
                                className="block px-4 py-2 text-sm text-gray-700 w-full text-right hover:bg-gray-100"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown
