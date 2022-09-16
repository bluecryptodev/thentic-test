import React, { ChangeEvent } from 'react';
import Input from './Input';

interface IMintNftContentProps {
  contract: string;
  chain_id: string;
  nft_id: string;
  nft_data: string;
  to: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const MintNftContent = (props: IMintNftContentProps) => {
  const {
    contract,
    nft_id,
    chain_id,
    nft_data,
    to,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <div className='w-full px-10 py-5'>
      <Input
        label='Chain Id'
        name='chain_id'
        value={chain_id}
        onChange={handleChange}
        className='mb-3'
        inputStyle='w-full'
      />
      <Input
        label='Contract'
        name='contract'
        value={contract}
        onChange={handleChange}
        className='mb-3'
        inputStyle='w-full'
      />
      <Input
        label='Nft Id'
        name='nft_id'
        value={nft_id}
        onChange={handleChange}
        className='mb-3'
        inputStyle='w-full'
      />
      <Input
        label='Nft Data'
        name='nft_data'
        value={nft_data}
        onChange={handleChange}
        className='mb-3'
        inputStyle='w-full'
      />
      <Input
        label='To address'
        name='to'
        value={to}
        onChange={handleChange}
        className='mb-3'
        inputStyle='w-full'
      />
      <div className='flex justify-between mt-5'>
        <button className='py-2 px-3 bg-primary-500 rounded-md text-white'>
          Cancel
        </button>
        <button
          className='py-2 px-3 bg-secondary-500 rounded-md text-white'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MintNftContent;
