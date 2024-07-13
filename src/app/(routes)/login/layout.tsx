import { ReactNode } from 'react'

function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight">
            {children}
        </div>
    )
}

export default LoginLayout
