import { ethers } from "ethers";
import dotenv from "dotenv"

dotenv.config()

export function getProvider() {
    const rpcUrl = process.env.ETH_RPC_URL;

    if (!rpcUrl) {
        throw new Error("Missing ETH_RPC_URL in .env file");
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    return provider;
}

export async function showNetworkInfo() {
    const provider = getProvider();
    const network = await provider.getNetwork();

    console.log(`Connected to network: ${network.name} (chainId: ${network.chainId})`)
}