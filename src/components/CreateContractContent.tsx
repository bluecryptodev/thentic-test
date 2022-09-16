import React, { ChangeEvent } from 'react';
import Input from './Input';

interface ICreateContractContentProps {
  name: string;
  chain_id: string;
  short_name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const CreateContractContent = (props: ICreateContractContentProps) => {
  const { name, short_name, chain_id, handleChange, handleSubmit } = props;
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
        label='Name'
        name='name'
        value={name}
        onChange={handleChange}
        className='mb-3'
        inputStyle='w-full'
      />
      <Input
        label='Short Name'
        name='short_name'
        value={short_name}
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

export default CreateContractContent;
