import { useState } from 'react';
import Board from '../board/Board';
import Button from '../button/Button';

const Permission = () => {
  const [address, setAddress] = useState('undefined');
  const content = `Account Address : ${address}`;

  const getPermissions = () => {
    window.ethereum
      .request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }],
      })
      .then((permissions: any) => {
        setAddress(permissions[0].caveats[0].value[0]);

        const accountsPermission = permissions.find(
          (permission: any) => permission.parentCapability === 'eth_accounts',
        );
        if (accountsPermission) {
          console.log('eth_accounts permission successfully requested!');
        }
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Board title="Permission" content={content} />
      <Button title="CONNECT" onclick={getPermissions} />
    </>
  );
};

export default Permission;
