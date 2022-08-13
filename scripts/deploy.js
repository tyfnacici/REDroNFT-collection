// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const CuberiumNFT = await hre.ethers.getContractFactory("REDroNFT");
  const cuberiumNFT = await CuberiumNFT.deploy();

  await cuberiumNFT.deployed();
  console.log("CuberiumNFT deployed to:", cuberiumNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x7a5b8A399BA232bF9619bFF535FB07670056229A
