import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface IAnimationProps {
  animation: string;
  duration: number;
  delay?: number;
  className?: string;
  children: ReactNode;
}
const Animation = (props: IAnimationProps) => {
  const { animation, duration, delay, className, children } = props;
  return (
    <div
      className={classNames(className, animation, 'animate__animated')}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Animation;
