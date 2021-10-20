import React, { useEffect, useState, createRef } from 'react';
import { Button } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';

//Ethereum imports
import {Contract, ethers} from 'ethers'

import ArbiSpermArtifact from "./abi/ArbiSperm.json"

const contractAddress = "0x2a0c81d09d28cD94E4bc65006d98cdE3095161FF";
const abi = ArbiSpermArtifact.abi;

const numCheapMints = 25;
const baseURI =
  "https://ipfs.infura.io/ipfs/QmZjYjWTu853UtVPfErRWFtezj6zvpwE7hsCHRrG3QihHK/";

function MintComponent(props) {
    const [ numSwimmers, setnumSwimmers ] = useState(1); 
    const [isSoldOut, setIsSoldOut ] = useState(false);
    const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
    const [mintPrice, setMintPrice] = useState(0.025);
    const [numMinted, setNumMinted] = useState(0);
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [signer, setSigner] = useState(null);
    const [writeContract, setWriteContract] = useState(null);
    const [isOnArbitrum, setIsOnArbitrum] = useState(false);
    const [isMetaMaskDownloaded, setIsMetaMaskDownloaded] = useState(false);
    const [canMint, setCanMint] = useState(true);
    const [userAddress, setUserAddress] = useState(null);
    const [numUserSwimmers, setnumUserSwimmers] = useState(0);
    const [userSwimmersIds, setUserSwimmersIds] = useState([]);
    const [swimmerImages, setSwimmersImages] = useState([]);

    useEffect( () => {
        if((typeof window.ethereum !== 'undefined') || (typeof window.web3 !== 'undefined')) {
            if(window.ethereum) setIsMetaMaskDownloaded(true)
        }
    },[])

    
    useEffect( () => {
        if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
            
            const contract = new Contract(contractAddress, abi, provider);
            setContract(contract)

            const signer = provider.getSigner();
            setSigner(signer);
        }
    },[isOnArbitrum])

    useEffect(() => {
        if(signer) {
            signer.getAddress().then((addr) => setUserAddress(addr));
        }
    },[signer])

    useEffect(() => {
        if(contract && userAddress) {
            contract.balanceOf(userAddress).then((bal) => bal.toNumber()).then((bal) => setnumSwimmers(bal));
        }

    },[contract, userAddress])

    useEffect( async () => {
        if(contract) {
            let idArr = [];
            let imageUrlArr = [];

            for(let i = 0; i < numSwimmers; i++) {
                let id = await contract.tokenOfOwnerByIndex(userAddress,i).then((id) => id.toNumber());
                idArr.push(id);
                //console.log(getImgUrl(id));
            }
        }
    }, [numSwimmers])


    useEffect( () => {
        if(contract && isOnArbitrum) {
            const writeContract = contract.connect(signer);
            setWriteContract(writeContract)
        }
    }, [contract, isOnArbitrum, signer, numSwimmers])

    useEffect(() => {
        if(contract && isOnArbitrum) {
            getNumMinted(numMinted, setNumMinted, contract);
        }
    },[contract, isOnArbitrum])

    useEffect(() => {
        if(contract && isOnArbitrum) {
            getPrice(setMintPrice, numMinted);
            getSoldOut(setIsSoldOut)
            getCanMint(setCanMint, numMinted, numSwimmers)
        }
    }, [contract, isOnArbitrum, numSwimmers, numMinted])

    /*
    useEffect(() => {
        if (contract && isOnArbitrum) {
            console.log(getTotalSupply(contract) + numSwimmers)
            if(getTotalSupply(contract) + numSwimmers > maxCheapMint) {
                setMintPrice(0.05)
            }
        }
    }, [numSwimmers])
    */

    const connectToMetaMask = async () => {
        setIsMetaMaskConnected(true)
        await provider.send("eth_requestAccounts", []);
        if(window.ethereum.networkVersion == 42161) {
            setIsOnArbitrum(true)
        }
    }

    return (
      <div className="block-container">
        <h1>Mint-A-Swimmer</h1>
        {isMetaMaskDownloaded ? (
          <>
            {isMetaMaskConnected ? (
              <>
                {isOnArbitrum ? (
                  <>
                    <p>{numMinted}/260 minted</p>
                    {!isSoldOut ? (
                      <>
                        <p>How many ArbiSperm would you like to mint?</p>
                        <div className="mint-slider">
                          <RangeSlider
                            value={numSwimmers}
                            min="1"
                            max="20"
                            tooltipPlacement="top"
                            variant="dark"
                            onChange={(changeEvent) =>
                              setnumSwimmers(parseInt(changeEvent.target.value))
                            }
                          />
                          <p>
                            Total: {(mintPrice * numSwimmers).toFixed(3)} ETH +
                            gas
                          </p>
                          {!canMint ? (
                            <p className="error-msg">
                              You are trying to mint more ArbiSperm for 0.025
                              than are available at that price. Please reduce
                              the number of swimmers and try again.
                            </p>
                          ) : (
                            <Button
                              variant="light"
                              onClick={() =>
                                mint(numSwimmers, mintPrice, writeContract)
                              }
                            >
                              Mint
                            </Button>
                          )}
                        </div>
                      </>
                    ) : (
                      <p>Sold Out!</p>
                    )}
                    <div className="swimmer-viewer">
                      <h2>ArbiSperm Viewer</h2>
                      {numUserSwimmers != 0 ? (
                        <div></div>
                      ) : (
                        <p>You have no ArbiSperm:(</p>
                      )}
                    </div>
                  </>
                ) : (
                  <p>
                    Please change your network to Arbitrum One Mainnet and
                    reload this page.
                  </p>
                )}
              </>
            ) : (
              <Button variant="light" onClick={connectToMetaMask}>
                Connect To Metamask
              </Button>
            )}
          </>
        ) : (
          <p>Please download MetaMask and reload this page.</p>
        )}
      </div>
    );
}

async function mint(numSwimmers, mintPrice, writeContract, signer) {
  const override = {
    value: ethers.utils.parseEther((mintPrice * numSwimmers).toString()),
    gasLimit: 4000000 * numSwimmers,
  };
  try {
    writeContract.mint(numSwimmers, override);
  } catch (error) {
    console.log(error.message);
  }
}

function getPrice(setMintPrice, numMinted) {
    if(numMinted >= numCheapMints) {
        setMintPrice(0.05)
    } else {
        setMintPrice(0.025)
    }

}

function getSoldOut(setIsSoldOut, numMinted) {
    if(numMinted >= 8085) {
        setIsSoldOut(true)
    } else {
        setIsSoldOut(false)
    }
}

function getCanMint(setCanMint, numMinted, numSwimmers) {
    if(numMinted + parseInt(numSwimmers) > numCheapMints && numMinted < numCheapMints) {
        setCanMint(false)
    } else {
        setCanMint(true)
    }
}

async function getNumMinted(numMinted, setNumMinted, contract) {
    contract.totalSupply()
        .then((bigNum) => bigNum.toNumber())
        .then((num) => {if(num != numMinted) setNumMinted(num)})
}

async function getImgUrl(id) {
    return await fetch(baseURI + ids[i])
            .then(res => res.json())
            .then(res => res.image.slice(-46))
            .then(hash => "https://ipfs.infura.io/ipfs/" + hash)
}

export default MintComponent;