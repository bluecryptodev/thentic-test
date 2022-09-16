import React, { ChangeEvent, useState } from 'react';
import {
  getNftContracts,
  IContractRes,
  createNftContract,
} from '@/lib/apis/nfts';
import ContractCard from '@/components/ContractCard';
import Modal from '@/components/Modal';
import CreateContractContent from '@/components/CreateContractContent';

interface INftPageProps {
  contractList: Array<IContractRes>;
}

const NftPage = (props: INftPageProps) => {
  const { contractList } = props;
  const [contracts, setContracts] = useState<Array<IContractRes>>(contractList);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [contractInfo, setContractInfo] = useState<{
    chain_id: string;
    name: string;
    short_name: string;
  }>({
    chain_id: '',
    name: '',
    short_name: '',
  });

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContractInfo({ ...contractInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log('submit');
    const res = await createNftContract(contractInfo);
    console.log(res);
    const newContract: IContractRes = {
      name: contractInfo.name,
      contract: null,
      chain_id: contractInfo.chain_id,
      short_name: contractInfo.short_name,
      status: res.status,
      request_id: res.request_id,
      transaction_pixel: res.transaction_pixel,
      transaction_url: res.transaction_url,
    };
    const updateContracts = [...contracts];
    updateContracts.push(newContract);
    setContracts(updateContracts);
    setModalOpen(false);
  };
  console.log(contracts);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-black'>My NFT Contracts</h2>
        <button
          className='bg-secondary-500 rounded-md px-3 py-2 text-white'
          onClick={() => setModalOpen(true)}
        >
          Create Contract
        </button>
      </div>
      <div className='mt-5'>
        {contracts.map((item: IContractRes, index: number) => (
          <ContractCard
            key={index}
            name={item.name}
            symbol={item.short_name}
            address={item.contract}
            status={item.status}
            confirmUrl={item.transaction_url}
          />
        ))}
      </div>
      <Modal
        open={modalOpen}
        title='Create Contract'
        bodyContent={
          <CreateContractContent
            name={contractInfo.name}
            short_name={contractInfo.short_name}
            chain_id={contractInfo.chain_id}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        }
        handleClose={handleModalClose}
      />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  let contractList: Array<IContractRes> = [];
  let error: boolean = false;
  try {
    contractList = await getNftContracts(4);
  } catch (err) {
    error = true;
  }
  // Pass data to the page via props
  return { props: { contractList, error } };
}

export default NftPage;
