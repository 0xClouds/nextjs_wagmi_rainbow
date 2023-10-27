import '../styles/globals.css'
import { Metadata } from 'next'
import WagmiRainbowProvider from './wagmi-rainbow-provider'
import { Header } from '../components/headers/Header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <WagmiRainbowProvider>
                    <Header></Header>
                    {children}
                </WagmiRainbowProvider>
            </body>
        </html>
    )
}
