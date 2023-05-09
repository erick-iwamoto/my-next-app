import { ReactNode } from "react"

interface AuthLayoutProps{ 
    children: ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
    return (
        <div>
            <div style={{
                backgroundColor: '#836FFF',
                width: '100%',
                height: '70px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <p style={{ color: 'white'}}>Header do auth</p>
            </div>
            {children}
        </div>
    )
}