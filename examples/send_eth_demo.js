import { sendTransaction } from "../src/sendTransaction";

async function main() {
    const recipient = "";
    const amount = "";

    console.log("Sending transaction....");
    await sendTransaction(recipient, amount);
}

main().catch((err) => {
    console.error("❌ Transaction failed:", err)
})