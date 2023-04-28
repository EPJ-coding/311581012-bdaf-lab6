const hre = require("hardhat");
const TOKEN_ADDR = "0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e";
const NFT_ARRD = "0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba";
const BANK_ADDR = "0xbe02727047fADd7fe434E093e001745B42C5F49B";

async function main() {
  const FlashloanExecutor = await hre.ethers.getContractFactory("FlashloanExecutor");
  const executor = await FlashloanExecutor.deploy(TOKEN_ADDR, NFT_ARRD, BANK_ADDR);

  await executor.deployed();

  console.log("Deployed to:", executor.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });