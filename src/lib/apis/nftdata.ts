import axios from '../axios';
import axio from 'axios';

export const getNftData = async (url: string): Promise<unknown> => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    if (axio.isAxiosError(error)) {
      throw error;
    } else {
      throw 'different error than axios';
    }
  }
};
