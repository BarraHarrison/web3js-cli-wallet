import { parseEther } from "ethers";
import { getProvider } from "./provider";
import { loadWalletFromEnv } from "./wallet";

export async function sendTransaction(to, amountEth) {
    try {
        const showCommand = process.argv.includes("--showCommand");
        const provider = getProvider();
        const wallet = loadWalletFromEnv().connect(provider);

        if (showCommand) {
            console.log("⚙️ Secure Mode: Showing wallet and transaction info");
            console.log("---------------------------");
            console.log(`Sender: ${wallet.address}`);
            console.log(`Recipient: ${to}`);
            console.log(`Amount (ETH): ${amountEth}`);
            console.log("---------------------------");
        } else {
            console.log(`💸 Preparing to send ${amountEth} ETH...`);
        }

        if (showCommand) console.log("🚀 Sending transaction...");

        const tx = await wallet.sendTransaction({
            to,
            value: parseEther(amountEth.toString())
        });

        console.log(` Transaction hash: ${tx.hash}`);
        console.log("Waiting for the confirmation...")

        const receipt = await tx.wait();

        console.log("Transaction Confirmed!");
        console.log(` Block Number: ${receipt.blockNumber}`);
        console.log(` Gas Used: ${receipt.gasUsed.toString()}`);

        return receipt;

    } catch (err) {
        console.error("❌ Error sending transaction:", err);
    }
}