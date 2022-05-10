import { useState } from 'react';
import Board from '../board/Board';
import Button from '../button/Button';

const InquireChain = () => {
  const [chain, setChain] = useState('undefined');
  const content = `set chain : ${chain}`;

  const inquireNetwork = async () => {
    const chainIdHex = await window.ethereum.request({
      method: `eth_chainId`,
    });
    setChain(chainIdHex);
  };

  return (
    <>
      <Board title="inquireChain" content={content} />
      <Button title="Inquire" onclick={inquireNetwork} />
    </>
  );
};

export default InquireChain;
