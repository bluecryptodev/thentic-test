import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getNftData } from '@/lib/apis/nftdata';

interface INftCardProps {
  nftData: string;
  name: string;
  id: string;
  shortName: string;
  status: string;
  confirmUrl: string;
}

const NftCard = (props: INftCardProps) => {
  const { nftData, name, id, shortName, status, confirmUrl } = props;
  const [imgSrc, setImgSrc] = useState(
    'https://themesfinity.com/wp-content/uploads/2018/02/default-placeholder.png',
  );

  useEffect(() => {
    const fetchData = async () => {
      let imgsrc: string = '';
      try {
        const data: any = await getNftData(nftData);
        imgsrc = data.image;
      } catch (error) {
        imgsrc =
          'https://themesfinity.com/wp-content/uploads/2018/02/default-placeholder.png';
      }
      setImgSrc(imgsrc);
    };
    fetchData();
  }, [nftData]);

  return (
    <div className='rounded-md shadow-lg overflow-auto'>
      <Image
        loader={() => imgSrc}
        src={imgSrc}
        alt='image'
        className='w-full'
        width={400}
        height={300}
        layout='responsive'
      />
      <div className='p-2 flex justify-between'>
        <div className='info'>
          <p>
            {name} #{id}
          </p>
          <p>{shortName}</p>
        </div>
        <div className='action'>
          {status === 'success' ? (
            <button className='rounded-md bg-secondary-500 text-white p-2'>
              Transfer
            </button>
          ) : (
            <a href={confirmUrl}>
              <button className='rounded-md bg-secondary-500 text-white p-2'>
                Confirm
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
