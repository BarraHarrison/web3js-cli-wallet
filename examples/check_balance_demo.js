import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETH_RPC_URL;
    const privateKey = process.env.PRIVATE_KEY;

    if (!rpcUrl || !privateKey) {
        console.error("❌ Missing ETH_RPC_URL or PRIVATE_KEY in .env");
        process.exit(1);
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    const balance = await provider.getBalance(wallet.address);
    const balanceEth = ethers.formatEther(balance);

    console.log("🔍 Checking balance...");
    console.log(`👛 Wallet Address: ${wallet.address}`);
    console.log(`💰 Balance: ${balanceEth} Sepolia ETH`);
}

main().catch((err) => {
    console.error("❌ Error checking balance:", err);
});
