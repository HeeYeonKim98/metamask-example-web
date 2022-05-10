import { useState } from 'react';
import Board from '../board/Board';
import Button from '../button/Button';
import { ethers } from 'ethers';

const ChangeChain = () => {
  const [chain, setChain] = useState('undefined');

  const changeNetwork = async (networkName: string) => {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: networkName }],
    });
  };

  return (
    <>
      <Board title="changeChain" />
      <Button title="Switch To Ethereum" onclick={() => changeNetwork('0x1')} />
      <Button
        title="Switch To GND Chain"
        onclick={() => changeNetwork('0x3')}
      />
    </>
  );
};

export default ChangeChain;
