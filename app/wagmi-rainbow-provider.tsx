'use client'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {
    arbitrum,
    goerli,
    mainnet,
    optimism,
    polygon,
    base,
    zora,
    sepolia,
} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        zora,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
            ? [sepolia, goerli]
            : []),
    ],
    [publicProvider()],
)

const { connectors } = getDefaultWallets({
    appName: 'RainbowKit App',
    projectId: '6b1ffa66703f9bd1946ed057aaf44a8c',
    chains,
})

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
})

const WagmiRainbowProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
    )
}

export default WagmiRainbowProvider
