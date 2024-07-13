import { ReactNode } from 'react'

function RestaurantLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight">
            {children}
        </div>
    )
}

export default RestaurantLayout
