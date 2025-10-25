import { sendTransaction } from "../src/sendTransaction.js";

async function main() {
    const recipient = "0xF4efa371997D0222625E25096FdbDa34B98421ae";
    const amount = "0.0001";

    console.log("Sending transaction....");
    await sendTransaction(recipient, amount);
}

main().catch((err) => {
    console.error("❌ Transaction failed:", err)
})