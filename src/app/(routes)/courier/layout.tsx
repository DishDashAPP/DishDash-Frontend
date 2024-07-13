import { ReactNode } from 'react'

function CourierLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight">
            {children}
        </div>
    )
}

export default CourierLayout
