import React from 'react';

interface IContractCardProps {
  name: string;
  symbol: string;
  address: string | null;
  status: string;
  confirmUrl: string;
}

const ContractCard = (props: IContractCardProps) => {
  const { name, symbol, address, status, confirmUrl } = props;
  return (
    <div className='mt-3 p-3 rounded-lg border border-gray-300 flex justify-between items-center'>
      <div>
        <p className='font-black'>{name}</p>
        <p className='text-sm'>{symbol}</p>
      </div>
      <div>
        {status === 'success' ? (
          <div className='rounded-full p-2 bg-green-500' />
        ) : (
          <a
            href={confirmUrl}
            className='rounded-md text-white p-2 bg-primary-500'
          >
            Confirm
          </a>
        )}
      </div>
    </div>
  );
};

export default ContractCard;
