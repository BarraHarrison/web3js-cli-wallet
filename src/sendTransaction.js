import { parseEther } from "ethers";
import { getProvider } from "./provider";
import { loadWalletFromEnv } from "./wallet";

export async function sendTransaction(to, amountEth) {
    try {
        const provider = getProvider();
        const wallet = loadWalletFromEnv().connect(provider);

        console.log(` Sending ${amountEth} ETH from ${wallet.address} to ${to}...`)

        const tx = await wallet.sendTransaction({
            to,
            value: parseEther(amountEth.toString())
        });

        console.log(` Transaction hash: ${tx.hash}`);
        console.log("Waiting for the confirmation...")


    }
}