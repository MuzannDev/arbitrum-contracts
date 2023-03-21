// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const Block = await ethers.getContractFactory("Block");
  const block = await Block.deploy();
  await block.deployed();
  console.log(`Block deployed at ${block.address}`)
  const Token = await ethers.getContractFactory("Token")
  const token = await Token.deploy('Fake Arb', 'FARB')
  await token.deployed()
  console.log(`Token deployed at ${token.address}`)
  const Distributor = await ethers.getContractFactory("Distributor")
  const distributor = await Distributor.deploy(token.address, 16872354, 26872354)
  await distributor.deployed()
  console.log(`Distributor deployed at ${distributor.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
