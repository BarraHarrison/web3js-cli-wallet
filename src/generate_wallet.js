import { ethers } from "ethers";
import fs from "fs";

const showCommand = process.argv.includes("--show");

async function generateWallet() {
    const wallet = ethers.Wallet.createRandom();

    console.log("✅ New Wallet Generated!");
    console.log("---------------------------");
    console.log("Address:", wallet.address);
    console.log("---------------------------");

    fs.writeFileSync(
        "new_wallet.json",
        JSON.stringify({ address: wallet.address }, null, 2)
    );
    console.log("💾 Wallet address saved to new_wallet.json");

    if (showCommand) {
        console.log("\n⚠️  SECURE MODE ENABLED — DO NOT SHARE THIS INFO ⚠️");
        console.log("Private Key:", wallet.privateKey);
        console.log("Mnemonic:", wallet.mnemonic?.phrase || "N/A");
        console.log("---------------------------");
        console.log("➡️  Store these securely in your .env or password manager.");
    } else {
        console.log("\n(🔒 Run with '--show' to display the private key and mnemonic)");
    }
}

generateWallet();
