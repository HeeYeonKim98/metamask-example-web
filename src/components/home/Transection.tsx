import useInput from '../../hooks/useInput';
import Board from '../board/Board';
import Button from '../button/Button';
import Input from '../input/Input';
import { ethers } from 'ethers';

const Transection = () => {
  const [data, onChangeData] = useInput({
    from: '0x5871e16a2e360257f3d78e18c72ca764a3fc7aa5',
    to: '',
    gas: '',
    value: '',
    data: '',
  });

  const transaction = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const gasPrice = await provider.getGasPrice();

    const params = [
      {
        from: data.from,
        to: data.to,
        gas: data.gas,
        gasPrice: gasPrice.toHexString(),
        value: data.value,
        data: data.data,
      },
    ];

    window.ethereum
      .request({ method: 'eth_sendTransaction', params })
      .then((result: any) => console.log(result))
      .catch((error: any) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Board title="Transaction" />
      <Input label="from" disable={true} value={data.from} />
      <Input label="to" onchange={onChangeData} value={data.to} />
      <Input label="gas" onchange={onChangeData} value={data.gas} />
      <Input label="value" onchange={onChangeData} value={data.value} />
      <Input label="data" onchange={onChangeData} value={data.data} />

      <Button title="SAND" onclick={transaction} />
    </>
  );
};

export default Transection;
