import React, { useEffect, useState, ChangeEvent } from 'react';
import { getNfts, INftRes } from '@/lib/apis/nfts';
import NftCard from '@/components/NftCard';
import Modal from '@/components/Modal';
import MintNftContent from '@/components/MintNftContent';
import { mintNft } from '@/lib/apis/nfts';

const NftPage = () => {
  const [nfts, setNfts] = useState<Array<INftRes>>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [nftInfo, setNftInfo] = useState<{
    contract: string;
    chain_id: string;
    nft_id: string;
    nft_data: string;
    to: string;
  }>({
    contract: '',
    chain_id: '',
    nft_id: '',
    nft_data: '',
    to: '',
  });
  const [nftRefresh, setNftRefresh] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNftInfo({ ...nftInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await mintNft(nftInfo);
    setNftRefresh(!nftRefresh);
    setModalOpen(false);
  };

  const transferNft = async (nft: INftRes) => {
    const nftInfo = {
      chain_id: nft.chain_id,
      contract: nft.contract,
      nft_id: nft.id,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNfts(4);
      setNfts(res);
    };
    fetchData();
  }, [nftRefresh]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-black'>My NFTs</h2>
        <button
          className='bg-secondary-500 rounded-md px-3 py-2 text-white'
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Mint Nft
        </button>
      </div>
      <div className='mt-5 grid grid-flow-col grid-cols-3 gap-5'>
        {nfts.map((item: INftRes, index: number) => (
          <NftCard
            key={index}
            nftData={item.data}
            id={item.id}
            name={item.name}
            shortName={item.short_name}
            status={item.status}
            confirmUrl={item.transaction_url}
          />
        ))}
      </div>
      <Modal
        open={modalOpen}
        handleClose={handleModalClose}
        title='Mint Nft'
        bodyContent={
          <MintNftContent
            contract={nftInfo.contract}
            chain_id={nftInfo.chain_id}
            nft_id={nftInfo.nft_id}
            nft_data={nftInfo.nft_data}
            to={nftInfo.to}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        }
      />
    </div>
  );
};

export default NftPage;
