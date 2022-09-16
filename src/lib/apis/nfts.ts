import axios from '../axios';
import axio from 'axios';

export interface IContractRes {
  chain_id: string;
  contract: string | null;
  name: string;
  request_id: string;
  short_name: string;
  status: string;
  transaction_pixel: string;
  transaction_url: string;
}
export const getNftContracts = async (
  chainId: string | number,
): Promise<Array<IContractRes>> => {
  try {
    const nftContracts = await axios.get<{ contracts: Array<IContractRes> }>(
      `contracts?key=${process.env.THENTIC_API_KEY}&chain_id=${chainId}`,
    );
    return nftContracts.data.contracts;
  } catch (error) {
    if (axio.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('different error than axios');
    }
  }
};

export interface ICreateNftContractReq {
  name: string;
  chain_id: string;
  short_name: string;
}

export interface ICreateNftContractRes {
  request_id: string;
  status: string;
  transaction_pixel: string;
  transaction_url: string;
}

export const createNftContract = async (
  contractInfo: ICreateNftContractReq,
): Promise<ICreateNftContractRes> => {
  try {
    const res = await axios.post<ICreateNftContractRes>('nfts/contract', {
      ...contractInfo,
      key: process.env.THENTIC_API_KEY,
      redirect_url: `${process.env.THENTIC_API_KEY}nft-contract`,
    });
    return res.data;
  } catch (error) {
    if (axio.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('different error than axios');
    }
  }
};

//nfts
export interface INftRes {
  chain_id: string;
  contract: string;
  data: string;
  id: string;
  name: string;
  request_id: string;
  short_name: string;
  status: string;
  transaction_pixel: string;
  transaction_url: string;
}

export const getNfts = async (
  chainId: string | number,
): Promise<Array<INftRes>> => {
  try {
    const res = await axios.get<{ nfts: Array<INftRes> }>(
      `nfts?key=${process.env.THENTIC_API_KEY}&chain_id=${chainId}`,
    );
    return res.data.nfts ?? [];
  } catch (error) {
    if (axio.isAxiosError(error)) {
      throw error;
    } else {
      throw 'different error than axios';
    }
  }
};

export const mintNft = async (nftInfo: any) => {
  try {
    const res = await axios.post<ICreateNftContractRes>('nfts/mint', {
      ...nftInfo,
      key: process.env.THENTIC_API_KEY,
      redirect_url: `${process.env.THENTIC_API_KEY}nft`,
    });
    return res.data;
  } catch (error) {
    if (axio.isAxiosError(error)) {
      throw error;
    } else {
      throw 'different error than axios';
    }
  }
};

export const transferNft = async (nftInfo: any) => {
  try {
    const res = await axios.post<ICreateNftContractRes>('nfts/transfer', {
      ...nftInfo,
      key: process.env.THENTIC_API_KEY,
      redirect_url: 'https://vercel.com/lovecodeing1995',
    });
    return res.data;
  } catch (error) {
    if (axio.isAxiosError(error)) {
      throw error;
    } else {
      throw 'different error than axios';
    }
  }
};
