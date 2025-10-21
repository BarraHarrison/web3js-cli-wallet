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

}