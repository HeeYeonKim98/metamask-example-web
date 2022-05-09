import { useState } from 'react';
import Board from '../board/Board';
import Button from '../button/Button';

const Connect = () => {
  const [address, setAddress] = useState('undefined');
  const content = `Account Address : ${address}`;

  // TODO connect 되어있다면, 주소 값 기억해두기

  const requestAccounts = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res: string) => {
          setAddress(res);
        })
        .catch((error: any) => {
          alert(error.message);
        });
    } else {
      alert('install MetaMask');
    }
  };

  return (
    <>
      <Board title="Connecting" content={content} />
      <Button title="CONNECT" onclick={requestAccounts} />
    </>
  );
};

export default Connect;
