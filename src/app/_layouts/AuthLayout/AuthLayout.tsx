import { ReactNode } from 'react'

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight bg-white-background">
            <div className="mx-auto px-8 container flex flex-1 w-full">{children}</div>
        </div>
    )
}

export default AuthLayout
