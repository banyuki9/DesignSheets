import {ReactNode} from 'react';

type InnerProps = {
  children: ReactNode,
  styles?: string
}

const Inner: React.FC<InnerProps> = ({children, styles}) => {
  return <div className={`max-w-[1420px] px-7 mx-auto ${styles}`}>{children}</div>;
}

export default Inner; 