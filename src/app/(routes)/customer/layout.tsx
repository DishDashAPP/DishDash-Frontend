import { ReactNode } from 'react'

function CustomerLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight">
            {children}
        </div>
    )
}

export default CustomerLayout
