import { ReactNode } from 'react'

function SignupLayout({ children }: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight">
            {children}
        </div>
    )
}

export default SignupLayout
