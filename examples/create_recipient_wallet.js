import { Wallet } from "ethers";
import fs from "fs";

async function main() {
    const wallet = Wallet.createRandom();

    const walletData = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic?.phrase || "N/A",
    };

    fs.writeFileSync("recipient_wallet.txt", JSON.stringify(walletData, null, 2));

    console.log("✅ New recipient wallet generated!");
    console.log("---------------------------------");
    console.log(`Address: ${wallet.address}`);
    console.log("💾 Wallet details saved to recipient_wallet.txt");
    console.log("---------------------------------");
}

main().catch((err) => {
    console.error("❌ Error generating recipient wallet:", err);
});
