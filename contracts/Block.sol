pragma solidity ^0.8.0;

contract Block{
    function getL1Block() public view returns(uint){
        return block.number;
    }
}