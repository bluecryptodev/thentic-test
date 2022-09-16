import React, { ReactNode, useRef, MouseEvent } from 'react';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';
import Animation from './Animation';

interface IModalProps {
  open: boolean;
  size?: 'sm' | 'md' | 'lg';
  title: string;
  bodyContent: ReactNode;
  handleClose: () => void;
}

const Modal = (props: IModalProps) => {
  const { open, size = 'md', title, bodyContent, handleClose } = props;
  const modalRef = useRef(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  return (
    <>
      {open ? (
        <div
          className='w-screen h-screen fixed flex items-center justify-center bg-[rgba(0,0,0,.8)] top-0 left-0 z-[99999]'
          ref={modalRef}
          onClick={closeModal}
        >
          <Animation animation='animate__fadeInDown' duration={1}>
            <div
              className={classNames('rounded-lg bg-white ', {
                'w-[500px]': size === 'sm',
                'w-[700px]': size === 'md',
                'w-[1000px]': size === 'lg',
              })}
            >
              <div className='flex flex-row justify-between items-center py-4 px-6 border-b border-gray-200'>
                <div>{title}</div>
                <button
                  className='w-8 h-8 flex items-center justify-center'
                  onClick={handleClose}
                >
                  <MdClose className='font-black text-lg' />
                </button>
              </div>
              <div>{bodyContent}</div>
            </div>
          </Animation>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
