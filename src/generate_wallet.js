import { ethers } from "ethers";
import fs from "fs";

async function generateWallet() {
    const wallet = ethers.Wallet.createRandom();

}

generateWallet();