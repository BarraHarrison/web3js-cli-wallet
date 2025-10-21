import { formatEther } from "ethers";
import { getProvider } from "./provider";
import { loadWalletFromEnv } from "./wallet";

export async function getBalance(address) {
    try {
        const provider = getProvider();
        const balanceWei = await provider.getBalance(address);
        const balanceEth = formatEther(balanceWei);

        console.log(`💰 Balance of ${address}: ${balanceEth} ETH`);
        return balanceEth;
    } catch (err) {
        console.error("❌ Error fetching balance:", err);
    }
}

export async function getMyBalance() {
    const wallet = loadWalletFunction();
    await getBalance(wallet.address);
}