// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol"";


contract NFT is ERC721URIStorage{
    using Counters for Counter.Counter;
    Counter.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketPlaceAddress) ERC721("Metavers Tokens","MET"){
        contractAddress = marketPlaceAddress;
    }


    function createToken(string memory tokenURI)public returns(uint){
        
    }

}

