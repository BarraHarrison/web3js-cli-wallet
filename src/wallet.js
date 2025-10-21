import { Wallet } from "ethers";
import { getProvider } from "./provider.js";
import dotenv from "dotenv"

dotenv.config()

export function generateWallet() {
    const wallet = Wallet.createRandom();
    console.log("🪪 New Wallet Created!");
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
    console.log("Mnemonic:", wallet.mnemonic?.phrase || "(not available)");
    return wallet;
}

export function loadWalletFromEnv() {
    const privateKey = process.env.PRIVATE_KEY;

    if (!privateKey) {
        throw new Error("❌ Missing PRIVATE_KEY in .env file");
    }

    const provider = getProvider();
    const wallet = new Wallet(privateKey, provider);
    console.log("🔐 Wallet loaded from .env");
    console.log("Address:", wallet.address);
    return wallet;
}

export async function signMessage(message) {
    const wallet = loadWalletFromEnv();
    const signature = await wallet.signMessage(message);
    console.log("Message has been signed.");
    console.log("Message:", message);
    console.log("Signature:", signature)
    return signature;
}