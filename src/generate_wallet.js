import { ethers } from "ethers";
import fs from "fs";

async function generateWallet() {
    const wallet = ethers.Wallet.createRandom();

    console.log("✅ New Wallet Generated!");
    console.log("---------------------------");
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
    console.log("Mnemonic:", wallet.mnemonic?.phrase || "N/A");
    console.log("---------------------------");
}