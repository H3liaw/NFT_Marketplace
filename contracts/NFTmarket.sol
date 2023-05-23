// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol"";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract NFTMarket is ReentrancyGuard{
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemSold;

    address payable owner;
    uint256 listingPrice = 0.00025 ether;
    

    constructor(){
        owner = payable(msg.sender);
    }


    struct MarketItem {
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable tokenSeller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    
}
 