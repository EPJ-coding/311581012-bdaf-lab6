# 311581012-bdaf-lab6

**Here is the scenario:** 

You are a poor dev and want to get into the door of a wealthy club, the wealthy club is gated by an NFT. Only those who hold this [WealthyPrivateClub NFT](https://goerli.etherscan.io/address/0x5e94B61BCa112683D18d5Ed27CebB16566E6d5ba#code) can walk into their secret club. The secret club consists of wealthy members who holds lot of [“Bank Token”](https://goerli.etherscan.io/address/0x7A81e50E0Ad45B31cC8E54A55095714F13a0c74e). Separately, the token is used to govern a Bank and they have recently released a new smart contract [BankWithFlashloan](https://goerli.etherscan.io/address/0xbe02727047fADd7fe434E093e001745B42C5F49B#code), adding a flashloan capability and with lots of Bank Token in it.
# How to run it
## Install dependencies
With [npm](https://npmjs.org/) installed, run

    $ npm install 
    
## Create a .env file and set your personal key
  set your PRIVATE_KEY, infura ENDPOINT_URL (goerli), ETHERSCAN_API_KEY and set REPORT_GAS to true
  
    $ PRIVATE_KEY = ""
    $ GOERLI_URL = ""
    $ ETHERSCAN_API_KEY = ""
    
## Compile
    $ npx hardhat compile
    
## Deploy
    $ npx hardhat run scripts/deploy.js --network goerli
    
## Verify
    $ npx hardhat verify --constructor-args arguments.js --network goerli {contract address}
    
    
## Implementation steps
(1) Deploy FlashloanExecutor contract, and save the [contract address](https://goerli.etherscan.io/address/0xd9a97c82e65caa643f6daa88a6f99dda79bd8ec2)
(2) Go to contract [BankWithFlashloan](https://goerli.etherscan.io/address/0xbe02727047fADd7fe434E093e001745B42C5F49B#code), input contract addess and amount 1000000e18 to call Flashloan function. 
(3) Check if the FlashloanExecutor contract receive the NFT.
(4) GO to [FlashloanExecutor](https://goerli.etherscan.io/address/0xd9a97c82e65caa643f6daa88a6f99dda79bd8ec2) you deployed, and call transfer the NFT to your wallet.
